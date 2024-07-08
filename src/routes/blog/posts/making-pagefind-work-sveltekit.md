---
title: 'Making Pagefind Work on Sveltekit'
description: "I got Pagefind to work on Sveltekit, couldn't find relevant guides, so I wrote this."
date: '2024-06-27'
date_updated: ''
tags:
  - SvelteKit
  - SvelteJS
  - Pagefind
  - search
published: true
---

I like [Pagefind](https://pagefind.app/docs/ui-usage/), there’s something about just having a simple js library that works instead of having to do tons of stuff backend for Meilisearch. Unlike for Astro, where [there’s a package that does everything](https://github.com/shishkin/astro-pagefind), there’s some config to do for Sveltekit and I didn’t find anything.

This is how I eventually got it to work.

1.  Use [Vite-plugin-pagefind](https://github.com/Hugos68/vite-plugin-pagefind) – check out the site for more documentation, but basically ensures that the pagefind files are available after build.

2.  Don’t overthink the pagefind.json you’ll need to create:

    ```js
    {
        "site": "build",
        "vite_plugin_pagefind": {
                "assets_dir": "static",
                "build_command": "npm run build",
                "dev_strategy": "eager"
        }
    }
    ```

3.  Add pagefind() to vite.config.js, I had success as the first entry.

    ```js
    import { sveltekit } from '@sveltejs/kit/vite';
    import { enhancedImages } from '@sveltejs/enhanced-img';
    import { defineConfig } from 'vite';
    import pagefind from 'vite-plugin-pagefind'; // [!code highlight]

    export default defineConfig({
    	plugins: [pagefind(), enhancedImages(), sveltekit()], // [!code highlight]
    });
    ```

4.  Add it to the route +page.svelte file,

    ```js
    <script>
        import { onMount } from 'svelte';
        onMount(async () => {
            const pagefind = await import('/pagefind/pagefind.js');
            pagefind.init();
            new PagefindUI({
                element: '#search',
                showSubResults: true,
                showImages: false,
                resetStyles: true,
                autofocus: true,
            });
        });
    </script>

    <svelte:head>
    <link href="/pagefind/pagefind-ui.css" rel="stylesheet" />
    </svelte:head>

    <div id="search"></div>
    ```

5.  Added the relevant pagefind-ui.js and pagefind-ui.css imports to app.html and app.css respectively. It worked even if I dumped everything into app.html, I just found it neater to separate them.

6.  Change handleHttpError to ‘warn’. Without doing this Cloudflare Pages was complaining about pagefind-ui.css being missing and this killed the build process. The package makes sure it’s there after build.

    ```js
    import adapter from '@sveltejs/adapter-static';
    import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
    /** @type {import('@sveltejs/kit').Config} */

    const config = {
    	kit: {
    		adapter: adapter(),
    		prerender: { handleHttpError: 'warn' },
    	},
    	preprocess: vitePreprocess(),
    };

    export default config;
    ```

7.  That's all, actually.
