---
title: 'Coolify Docker-Compose Build Failures - AlpineLinux CDN Temporary Error'
description: 'Docker-compose deployment kept failing for a Golang app.'
date: '2025-03-29'
date_updated: ''
tags:
  - Coolify
  - Oracle
  - OCI
  - Docker
published: true
slug: coolify-docker-compose-build-failures-alpinelinux-cdn-temporary-error
---

I've been writing a chatbot with an OpenRouter community Go client. I deployed it easily enough on Coolify alongside the other Go and NodeJS stuff. But it was a good chance to reacquaint myself with Oracle Cloud Infrastructure (OCI) and the Coolify instance I have there.

It was a pain. Deployment via Coolify's docker-compose kept failing right at the start for something that looked like a network issue:

```bash
> [app first  2/11] RUN apk add build-base:
0.173 fetch https://dl-cdn.alpinelinux.org/alpine/v3.21/main/aarch64/APKINDEX.tar.gz
5.178 WARNING: updating and opening https://dl-cdn.alpinelinux.org/alpine/v3.21/main: temporary error (try again later)
5.178 fetch https://dl-cdn.alpinelinux.org/alpine/v3.21/community/aarch64/APKINDEX.tar.gz
10.18 WARNING: updating and opening https://dl-cdn.alpinelinux.org/alpine/v3.21/community: temporary error (try again later)
10.18 ERROR: unable to select packages:
10.18   build-base (no such package):
10.18     required by: world[build-base]
---

failed to solve: process "/bin/sh -c apk add build-base" did not complete successfully: exit code: 1
exit status 1
Oops something is not okay, are you okay? 😢
failed to solve: process "/bin/sh -c apk add build-base" did not complete successfully: exit code: 1
exit status 1
```

## The Usual Suspects

- Definitely docker-compose deployments because I found Nixpacks deployments worked fine
- Wasn't sure if this was related to [dockerhub wrongfully banning pulls from IPV6 rate limiting](https://github.com/docker/hub-feedback/issues/2421)
- Wasn't sure if it was OCI's issue with ports [having to adjust the iptables before the VM is usable](https://www.reddit.com/r/oraclecloud/comments/r8lkf7/a_quick_tips_to_people_who_are_having_issue/)
- Curl from remote SSH terminal and from Coolify's terminal console successfully curl'ed to the cdn url with alpinelinux without fail.

Ugh.

## Solution (after way too long)

**Your docker-compose needs to explicitly state the network is host.** [Source](https://stackoverflow.com/questions/74288981/docker-build-error-https-dl-cdn-alpinelinux-org-alpine-v3-14-community-tempo):

```dockerfile
    build:
      context: .
      dockerfile: Dockerfile
      network: host
```

It's not the standard, but OCI users seem to need this for the build phase:

- Grabbing packages/dependencies
- There's an issue from within OCI

## The Caveat

However, this does compromise the security posture somewhat. This gives the build process access to my host network. So all network services. From reading around it seems like this might be an issue with malicious stuff potentially accessing sensitive network resources, but I'm not competent in this, so don't take this as good technical advice.

Caveat emptor!
