---
title: 'Two Wifi Networks Broke After a SIM Swap, and the Fix Was Resetting Network Settings'
description: 'A new SIM left my old Pixel 8 Pro stuck on "scanning" for Wireless@SGx and my home wifi. Resetting the phone''s network settings fixed both, once I read the failure stage instead of blaming the SIM.'
date: '2026-06-30'
date_updated: '2026-06-30'
category: 'Life'
tags:
  - Android
  - Pixel
  - Networking
  - Wireless@SGx
  - Wifi
published: true
slug: 'wireless-sgx-stuck-scanning-sim-swap-pixel-reset-network-settings'
---

I put a new SIM into my old Pixel 8 Pro and two wifi networks stopped working at once: Wireless@SGx, and my home wifi where I knew the password was right. Both just sat on "scanning" and never connected.

## The Fix

My Android phone's wifi was quietly stuck, which happened after a SIM swap or a restore. Resetting the network settings fixed both networks on the first try:

```
Settings > System > Reset options > Reset Wi-Fi, mobile & Bluetooth
```

It does come at a cost: it clears every saved wifi password and Bluetooth pairing, so you set those back up afterwards. For getting both networks back, that was a price worth paying.

## What I Tried

The SIM swap was the obvious suspect, so I started there and worked through everything I could think of:

- Checked the date and time, in case a wrong clock was breaking the secure login.
- Re-entered my Wireless@SG credentials to try Singtel & Simba, using Wireless@SGx's Android non-SIM instructions.
- Tried the SIM-based login with its various EAP options (AKA, AKA'), and toggled MAC randomization.
- Forgot both networks and reconnected from scratch.

Nothing changed, and none of it explained my home wifi, which has no SIM involved at all.

## What I Missed

The clue had been that "scanning" status all along. It shows up before any password or SIM identity gets checked, so the connection was failing before authentication even started, which is why two unrelated networks failed the same way. Then I tried another phone on the home wifi and it connected instantly, which meant the problem was my Pixel and not any network.
