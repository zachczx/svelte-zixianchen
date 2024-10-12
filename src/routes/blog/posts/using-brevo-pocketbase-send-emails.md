---
title: 'Using Brevo for PocketBase to Send Emails'
description: 'I got Brevo, which is an SMTP SaaS provider, to work for PocketBase emails.'
date: '2024-10-12'
date_updated: ''
tags:
  - Brevo
  - SMTP
  - PocketBase
  - email
published: true
slug: using-brevo-pocketbase-send-emails
---

I'm using PocketBase as a Backend-as-a-Service (BaaS). So far I didn't use any of the email-related features, e.g. email verification, forgot my password, email change confirmation. But I decided to try implementing email change confirmation, and needed a way to let PocketBase send emails.

## The Good Ol' Days

I'm old enough to remember the Wild West days of using PHP's mail() function or Wordpress' wp_mail() on a shared host and absolutely winging it (it worked well enough in those days).

## Using Brevo

But it's 2024, things don't work that way anymore. I dug around and found Brevo, though any SMTP SaaS provider would work equally (or even better, given that I'm on a shared IP.)

1. Create an account on [Brevo](https://www.brevo.com/)

2. Verify your domain (you’ll need to go to your registrar and add DKIM and DMARC TXT records to your DNS records)

3. Since I'm using Cloudflare as my registrar, I went to their DNS > Records section to manually add the records that Brevo wanted. (No way I'd do it have Brevo automatically, which they suggested.)

4. Add a sender from your domain (by default Brevo uses your personal email that you signed up with, which I didn’t want, because I wanted to use my own domain)

5. Generate a new SMTP key in Brevo

   ```text
   Dropdown at top right > SMTP & API > Your SMTP Settings
   ```

6. Make sure your PocketBase config is alright. The application URL needs to be the URL of PocketBase, not the actual app. E.g. I host my PocketBase instance on https://pocketbase.yourwebsite.com, so use that instead of https://yourwebsite.com

   ```text
   PocketBase > Settings > Application
   Application URL: <<as above>>
   ```

7. Add the SMTP settings to PocketBase.

   ```text
   PocketBase > Settings > Mail Settings

   Sender name: <<I use No-Reply>>
   Sender address: <<can be anything>> (I use no-reply@mydomain.com)

   SMTP server host: smtp-relay.brevo.com
   Port: 587
   Username: <<paste from 'Login' field>>
   Password: <<your SMTP key value>>
   ```

## Main Problem - Shared IP causing spam filters to filter my emails

Unfortunately it looks like Brevo’s use of shared IP just gets my emails flagged out as suspicious – Gmail labels it “This message seems dangerous”. This is almost certainly because their algorithm looks out for emails where the sender IP is different from the domain name being used.

![Feels bad man](/src/lib/assets/blog/suspicious-screenshot.webp)_Feels bad seeing my emails flagged out as dangerous._

## Minor mistake during testing - Don't make it too

I also made some mistakes like testing with an email address that already existed in another user.

- Kept getting 400 errors but didn’t understand why. I was just relying on the sanitized error message “Something went wrong while processing your request.”
- Solved it when I dug deeper into the errors that returned from a try/catch, and it turns out err.data contained the real errors - 'User email already exists or it is invalid.'
- So this was a good reminder that it's always best practice to dig deeper into PocketBase's real error messaging.
