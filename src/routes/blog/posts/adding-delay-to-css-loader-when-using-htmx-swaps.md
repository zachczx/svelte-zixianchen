---
title: 'Adding Delay to a CSS Loader When Using HTMX Swaps'
description: "I wanted to solve white flashes flickering when using HTMX's hx-indicator."
date: '2024-08-10'
tags:
  - HTMX
  - UX
  - loader
published: true
slug: adding-delay-to-css-loader-when-using-htmx-swaps
---

I've recently been learning Go and using it for a [webapp that searches Government abbreviations and acronyms](https://abbreviation.zixian.dev). It's been a great journey so far, notwithstanding the subpar dev experience and the Svelte/Vite withdrawals that pop up from time to time. The way that Go encourages me to think about code has been really helpful. Not least the emphasis on writing left-aligned happy path code and constantly thinking about error handling. I also like HTMX, so it's all good using it with Chi and Templ.

Specific to UX, it's a UX best practice to show a loading animation if something takes 1s or more. (It's [not always necessary](https://www.nngroup.com/articles/progress-indicators/), but I also find it more intuitive as a user myself.) So I usually add an animated loader.

## Problem: User Navigation Causes Flickering and White Flashes

Using HTMX's hx-indicator for a loading animation, however, annoyed me. I kept seeing flickering whenever I clicked something that did a hx-swap.

Hx-swap caused white flashes from very fast transitions. The hx-target element changed too quickly from Original Page > Loader > New Page, and this made it look like errors instead.

The obvious solution would be to set a delay, but unfortunately hx-indicator does not come in-built with a delay option.

## Solution: Adding Delay Via htmx:beforeRequest and htmx:afterRequest

After some digging, the [HTMX creator gave some tips to DIY a delay](https://www.reddit.com/r/htmx/comments/10qxzji/set_a_minimum_time_for_an_hxindicator_animation/):

- Catch the htmx:beforeRequest event and set a variable or attribute on the DOM element, and start a timer (setTimeout())
- When the timeout occurs, check if the variable is still set and, if so, show an indicator
- Catch the htmx:afterRequest event and unset the variable, and clear any indicator

With these tips, I wrote something simple (with Tailwind in mind, but equally applies to plain CSS). It's probably something anyone can too, though this might help someone new to HTMX.

```js
// Added Javascript

let timer = false;
const cssClassesFadeOut = ['opacity-25', 'transition', 'ease-out', 'duration-200'];
document.body.addEventListener('htmx:beforeRequest', () => {
	let loaderBefore = document.getElementById('loading-spinner');
	let contentOut = document.getElementsByClassName('loaded-content');
	for (let i = 0; i < contentOut.length; i++) {
		contentOut[i].classList.add('opacity-25');
	}
	timer = true;
	setTimeout(() => {
		if (timer) {
			loaderBefore.classList.remove('hidden');
			loaderBefore.classList.add('grid');
			for (let i = 0; i < contentOut.length; i++) {
				contentOut[i].classList.add(...cssClassesFadeOut);
			}
		}
	}, 1000); // Delay of 1s as recommended by Nielsen Norman Group
});

document.body.addEventListener('htmx:afterRequest', () => {
	let loaderAfter = document.getElementById('loading-spinner');
	timer = false;
	loaderAfter.classList.add('hidden');
	loaderAfter.classList.remove('grid');
});
```

```html
<!-- Content and Loader -->

<div class="relative">
	<div id="loading-spinner" class="absolute inset-x-1/2 inset-y-1/2 hidden">...</div>
	<ul id="list">
		<li class="loaded-content grid grid-cols-3">...</li>
	</ul>
</div>
```

```html
<!-- Triggering Element -->

<button hx-get="/" hx-trigger="click" hx-push-url="true" hx-target="#list" hx-swap="innerHTML transition:true">
	...
</button>
```

## What's Next?

Nothing actually. This has been straightforward.

Maybe I'll try writing an HTMX extension if I continue using Go and Templ.

I also ended up not using hx-indicator, though I'm sure I'll eventually find out if that's a good choice.
