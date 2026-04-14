---
title: 'Debugging Wireless@SGx on Linux Mint With Claude'
description: 'Wireless@SGx authenticated fine on Linux Mint but TCP was silently blocked. After hours of wrong DNS fixes, cloning a working device MAC solved it.'
date: '2026-04-14'
date_updated: ''
tags:
  - Linux
  - Mint
  - Networking
  - AI
  - Wireless@SGx
  - WPA2 Enterprise
published: true
slug: 'wireless-sgx-not-working-linux-mint-connected-no-internet'
---

I spent quite a bit of time trying to get Wireless@SGx working on my Linux Mint 22.2 laptop. Connecting should've taken a few minutes, but it turned into a multi-hour debugging session with Claude Opus open in one terminal and increasingly desperate commands in another.

The actual fix ended up being two lines, and everything I tried before that was wrong.

I'm writing this down mostly because when I was searching for help, hardly anything showed up for Linux-related content, and the few pages were either [problem-free](https://harishpillay.com/2025/01/20/wirelesssgx-for-linux-2025-update/) or old stuff, when we still had to [use scripts](https://github.com/zerotypic/wasg-register). So hopefully this saves you the afternoon I lost.

## The Setup

- **OS:** Linux Mint 22.2 Cinnamon
- **WirelessSGx Provider:** Singtel & M1

Quick context if you're not from Singapore: Wireless@SGx is the current iteration of Singapore's free public WiFi. It uses WPA2 Enterprise with PEAP/MSCHAPv2, so once you register on [IMDA's portal](https://eservice.imda.gov.sg/wirelessSGx) (which is quite buggy with adblocks, so remember to disable it) you get seamless auto-connect at every hotspot.

On my Android phone it's quite seamless when you connect via SIM, not so much for my laptop. [IMDA's guides](https://www.imda.gov.sg/how-we-can-help/wireless-at-sg/chrome-setup-guide) were pretty much useless.

## What Made This So Confusing

The maddening part was that everything _looked_ like it was working.

I registered on [IMDA's portal](https://eservice.imda.gov.sg/wirelessSGx) (which is quite buggy with adblocks, so remember to disable it), put in my SGx credentials, set the provider domain, and NetworkManager showed a green checkmark. `wpa_cli status` showed a perfectly healthy session: WPA2-Enterprise completed, 802.1X port authorized, EAP succeeded, TLS negotiated, MSCHAPv2 phase 2 done. I'm no networking expert, just a sysadmin wannabe, and this looked like I was online.

DHCP worked too. I had a lease, a default gateway, and very strangely `ping 1.1.1.1` came back at ~10ms with zero packet loss:

```
$ ping 1.1.1.1
64 bytes from 1.1.1.1: icmp_seq=1 ttl=54 time=9.89 ms
64 bytes from 1.1.1.1: icmp_seq=2 ttl=54 time=10.3 ms
64 bytes from 1.1.1.1: icmp_seq=3 ttl=54 time=10.7 ms
64 bytes from 1.1.1.1: icmp_seq=4 ttl=54 time=11.6 ms
```

That said, `ping google.com` went nowhere, browsers spun forever, and `curl` timed out on everything.

**My phone worked fine on the exact same network, location, and time.** I could literally hold both devices next to each other, one online, one not. That's the kind of thing that both tells you the problem is your device and also makes you question your sanity a little.

**I remembered that when I first set up SGx on my phone, it had prompted me to install some kind of certificate or profile.** That was months ago and I didn't think much of it at the time, but on the laptop NetworkManager never asked me for anything like that. I went back to the IMDA portal looking for a cert download link in the Linux setup flow and couldn't find one. I mentioned it to Claude mid-debug thinking it had to be the issue, but it was unfortunately a dead end.

**I tried both Singtel and M1 credentials.** I'd originally registered on the Wireless@SGx portal with Singtel and spent a long time struggling with that before I started wondering if maybe the problem was provider-specific. So I went back to the portal at go.gov.sg/wsgx and generated a separate set of M1 credentials to test. You don't actually need to be a subscriber of the telco, you can register through any of them. Same exact failure with M1. The problem was clearly something else entirely.

(Protip if you're doing this: disable Brave Shields or whatever ad blocker you're running before you go through the IMDA portal. Otherwise you'll get stuck on the agree dialog and the phone number page. Wasted some time on that too.)

**NetworkManager logged the discrepancy directly.** `nmcli networking connectivity check` returned `CONNECTED_SITE`, which is the OS politely stating you're on a local network without internet routing. The logs confirmed it:

```
NetworkManager[877]: <info> [1776153675.4008] manager: NetworkManager state is now CONNECTED_SITE
```

**There was also a weird detail in `resolvectl status`.** SGx was handing out a Singtel DNS server (`165.21.83.88`) via DHCP even though I was testing with M1 credentials at that point. I flagged this to Claude thinking it was suspicious, and Claude explained that WirelessSGx should be shared infrastructure across telcos, so the DNS you get depends on whoever runs the local access point, not which telco you registered with. Your credentials get proxied to your telco for authentication, but after that you're on the local operator's network. Turned out to be completely irrelevant, but it threw me off early on.

In summary, my laptop authenticated, got a DHCP lease, could ping the internet via ICMP, and couldn't actually load anything. On the other side, the phone was fine.

Ugh!!! It definitely DID NOT feel like Smart Nation /s

## What We Tried (and Why None of It Worked)

I say "we" because Claude Opus was driving most of the hypotheses here, so this is truly "stupid hooman". I understand networking fundamentals enough to evaluate the output and push back when something feels off, but the specific ideas of what to try next were mostly Claude's, and I ran them and reported back what happened.

Here's the rough progression:

- **Override DNS servers.** My first thought was the SGx-provided DNS was broken. Claude helped me point NetworkManager at Cloudflare and Google DNS (`1.1.1.1`, `8.8.8.8`), but even `nslookup google.com 1.1.1.1` timed out directly. No external DNS on port 53 worked at all. This locked me into a "DNS is broken" framing for the next few hours, which turned out to be completely wrong.

- **DNS-over-TLS via systemd-resolved.** If port 53 is blocked, tunnel DNS over port 853 instead. Claude walked me through editing `resolved.conf` to enable DoT. Port 853 was similarly blocked, with `nc -zv 1.1.1.1 853` timing out entirely.

- **DNS-over-HTTPS via cloudflared.** Port 443 can't really be blocked without breaking the web, so DoH should work. Except `cloudflared proxy-dns` has been deprecated and removed as of early 2026. Claude found this out after we hit the error. A lot of guides online still point to cloudflared but it doesn't work anymore.

- **DNS-over-HTTPS via dnscrypt-proxy.** The replacement for cloudflared. Installed it, service came up healthy, logs said it connected to Cloudflare fine. Except (and this was embarrassing) I was writing my prompts to Claude from my _phone's hotspot_, so dnscrypt-proxy had tested its upstreams on that network, not SGx. The moment I switched back to SGx it couldn't reach anything either.

- **Test whether TCP actually works.** Testing raw TCP should've been our first step, and Claude suggested it after the dnscrypt-proxy confusion. It reframed the entire problem. `curl --max-time 5 http://1.1.1.1`, plain HTTP to a raw IP with no DNS involved, timed out. Same with HTTPS, same with `nc` to any port on any host. Meanwhile ping still worked perfectly. Every single TCP connection from my laptop was being silently dropped. I'd spent hours trying to fix DNS when the problem was that TCP itself was broken across the board.

- **Rule out local causes.** Claude had me check firewall (`ufw status`: inactive), iptables (policy ACCEPT, no rules), nftables (empty ruleset). Everything on my end was wide open. Also confirmed the laptop was using its real hardware MAC with randomization off.

- **tcpdump.** Watched the wire while running curl. SYN packets left my laptop cleanly but the return was complete silence. The network was just swallowing my TCP packets.

- **TCP Fast Open.** Claude spotted `tfo cookiereq` in the tcpdump output, which is a Linux kernel optimization that some old network equipment chokes on. It's enabled by default on Linux but _not_ on Android, so it would perfectly explain why the phone worked and the laptop didn't. Claude suggested disabling it, but I never got to test it because the actual fix came from a different suggestion in that same message.

## The Fix: Clone My Phone's MAC

In the same message where Claude suggested the TFO thing, it also suggested cloning my phone's WiFi MAC address onto the laptop. Claude's hypothesis was that SGx's backend might maintain some per-MAC state that determines whether you get full internet access or get walled off, and my phone, which went through the proper first-connection flow months ago (the cert/profile thing), was in a "promoted" state that my laptop never reached.

I still have no real idea what exactly SGx does on its end, and the mechanism is just Claude's best guess. All I can tell you is that it worked.

I found my phone's per-SSID randomized MAC in Android settings (Settings > Wi-Fi > Wireless@SGx > Privacy > MAC address), disconnected the phone from SGx first (same MAC on the same network = bad), and on the laptop:

```bash
nmcli con mod "Wireless@SGx" wifi.cloned-mac-address AA:BB:CC:DD:EE:FF
nmcli con down "Wireless@SGx" && nmcli con up "Wireless@SGx"
```

Everything worked instantly. TCP connections went through, DNS resolved, browsers loaded pages, `nmcli networking connectivity check` returned `full`. All with zero other changes from default. All the DoT, DoH, dnscrypt-proxy, custom DNS I'd spent hours on was completely unnecessary.

The `nmcli con mod` change is persistent, saved to the connection file and applied automatically every time you connect.

## A Few Things to Know

- **Don't use both devices on SGx at the same time.** Same MAC on the same L2 network causes ARP conflicts. Use one or the other. Your phone can be on mobile data while the laptop is on SGx.
- **PEAP re-auth isn't affected.** RADIUS uses your credentials, not the MAC, so authentication keeps working fine.
- **If Android rotates the MAC**, you'll need to update the cloned value. In practice it's stable unless you "forget" and re-add the network.
- **If you want to try your real MAC later:**
  ```bash
  nmcli con mod "Wireless@SGx" wifi.cloned-mac-address ""
  ```
  It's possible the restricted state eventually clears on its own, worth retrying every few weeks.

## Claude Was Genuinely Useful Here

I want to be honest about what happened, because the reality is Claude did most of the thinking. To be honest, I'm quite sure Gemini Pro 3.1 wouldn't have made it even halfway before it declared the problem unsolvable.

The other thing is that Claude follows your framing wherever you take it. I was locked into "this is a DNS problem" for hours because `ping 1.1.1.1` worked and `ping google.com` didn't. Every test I asked for was a DNS test. Claude went along with it and helped me try increasingly elaborate DNS workarounds without ever saying "hey, have you actually checked that TCP works at all?" It eventually got there, but only after I'd installed packages, modified system config, and spent a good hour going deeper into the wrong direction. An experienced sysadmin would've stopped me way earlier.

The thing I'd do differently next time: when I'm three or four attempts deep into something with Claude and nothing is working, explicitly ask _"what am I assuming that I haven't actually verified?"_ That one prompt would've saved me hours.

And if you're ever debugging "connects but no internet," here's the order that Claude eventually taught me, which I wish I'd known from the start:

1. `ip addr` / `ip route`: do you have an IP and gateway?
2. `ping <gateway>`: can you reach the local network?
3. `ping 1.1.1.1`: does ICMP to the internet work?
4. **`curl --max-time 5 http://1.1.1.1`: does TCP work?** (this is the one I skipped)
5. `nslookup google.com 1.1.1.1`: does DNS work?
6. `curl http://google.com`: does the whole stack work?

Step 4 is the one that would've reframed the whole problem in the first 10 minutes. If TCP itself is broken, no amount of DNS workarounds will help, and that's exactly what I wasted my afternoon learning the hard way.

## Closing

Wireless@SGx works fine on Linux once you're on a MAC that the network considers promoted. If you're getting the exact symptoms I had (authenticates, gets DHCP, ICMP works, TCP doesn't), skip the DNS rabbit hole and clone a known-working device's MAC. The whole fix is two `nmcli` commands and a reconnect.
