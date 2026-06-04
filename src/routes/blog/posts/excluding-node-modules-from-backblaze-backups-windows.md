---
title: 'Excluding node_modules From Backblaze Backups on Windows'
description: 'I had been excluding node_modules and other dev folders from Backblaze on Windows all wrong, with forward slashes and a rule anchored to the user folder that never matched my projects. Here is the working set of exclusion rules I settled on for my SvelteKit, Node, and Go projects.'
date: '2026-06-04'
date_updated: ''
category: 'Tech'
tags:
  - Backblaze
  - backup
  - Windows
  - node_modules
published: true
slug: 'excluding-node-modules-from-backblaze-backups-windows'
---

I had to re-push my Backblaze backup recently because of a frozen state with a PEK, so I relooked at my setup. I realized that I was doing my exclusions all wrong.

My first rule used forward slashes like `/node_modules/`, which is the instinct, but Windows paths use backslashes so it never matched. Then I copied the node_modules rule from a helpful post by Kicken ([aoeex.com/phile/backblaze-custom-exclusions](https://aoeex.com/phile/backblaze-custom-exclusions/)) as-is, but it anchors to the user folder with `skipFirstCharThenStartsWith=":\Users\"` and my projects sit on a separate drive, so it matched nothing either.

## Environment

I work mainly on my Windows desktop, mostly not WSL, which is why every path uses backslashes. My stack is mostly SvelteKit with Node and pnpm, plus Go.

## The rules that worked

This is the set I ended up with:

```xml
<excludefname_rule plat="win" osVers="*" ruleIsOptional="t" skipFirstCharThenStartsWith="*" contains_1="\.git\" contains_2="*" doesNotContain="*" endsWith="*" hasFileExtension="*" />
<excludefname_rule plat="win" osVers="*" ruleIsOptional="t" skipFirstCharThenStartsWith="*" contains_1="\.svelte-kit\" contains_2="*" doesNotContain="*" endsWith="*" hasFileExtension="*" />

<excludefname_rule plat="win" osVers="*" ruleIsOptional="t" skipFirstCharThenStartsWith="*" contains_1="\node_modules\" contains_2="*" doesNotContain="*" endsWith="*" hasFileExtension="*" />

<excludefname_rule plat="win" osVers="*" ruleIsOptional="t" skipFirstCharThenStartsWith="*" contains_1="\go-build\" contains_2="*" doesNotContain="*" endsWith="*" hasFileExtension="*" />
<excludefname_rule plat="win" osVers="*" ruleIsOptional="t" skipFirstCharThenStartsWith="*" contains_1="\gopls\" contains_2="*" doesNotContain="*" endsWith="*" hasFileExtension="*" />
<excludefname_rule plat="win" osVers="*" ruleIsOptional="t" skipFirstCharThenStartsWith="*" contains_1="\go\pkg\mod\" contains_2="*" doesNotContain="*" endsWith="*" hasFileExtension="*" />

<excludefname_rule plat="win" osVers="*" ruleIsOptional="t" skipFirstCharThenStartsWith="*" contains_1="\.pnpm-store\" contains_2="*" doesNotContain="*" endsWith="*" hasFileExtension="*" />

```

All of these go into:

```text
C:\ProgramData\Backblaze\bzdata\bzexcluderules_editable.xml
```

## Checking it actually worked

Backblaze's "Producing file lists" step is where it applies your exclusions to build the to-do list, so `bz_todo_*` under `C:\ProgramData\Backblaze\bzdata\bzbackup\bzdatacenter` is the result of your rules, and `bz_done_*` is what's already been sent. Search the latest `bz_todo` for a folder you excluded, and if it's gone, the rule took. Don't be like me and assume it did.

Brian from Backblaze explains the file-list step in this [r/backblaze thread](https://www.reddit.com/r/backblaze/comments/1f0itk7/stuck_on_producing_file_lists_what_should_i_do/).

Writing this down because I'll set Backblaze up again on another machine at some point and I don't want to relearn the backslash and `:\Users\` lessons a third time. If your projects don't sit under `C:\Users`, drop the anchor and match the folder name on its own.
