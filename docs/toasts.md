---
layout: default
title: Toasts
nav_order: 3
permalink: /toasts/
---

# Toasts
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Usage

```ts
import { cuteToast } from 'cute-alert'

cuteToast({
  type: 'success',
  title: 'Title',
  description: 'Description',
  timer: 5000
}).then((event) => {
  if (event === 'close') {
    console.log('toast closed')
  }
})
```

[Storybook](https://gustavosmanc.github.io/cute-alert/storybook/?path=/story/cutealert-toast--playground){: .btn }

{: .note }
`event` has the `AlertToastValue` type and at the moment, its value will always be `close`. For more information about types, check out the [Typescript page](https://gustavosmanc.github.io/cute-alert/docs/typescript/).

## Options

| Name                | Description                                                                  | Type                                       | Default Value | Optional |
|:--------------------|:-----------------------------------------------------------------------------|:-------------------------------------------|:--------------|:---------|
| type                | Type of toast                                                                | `'error' | 'info' | 'success' | 'warning'` |               | 🚫      |
| title               | Text to be displayed on title                                                | `string`                                   |               | ✅      |
| description         | Text to be displayed on description                                          | `string`                                   |               | ✅      |
| timer               | Timer to close the toast                                                     | `number`                                   |               | ✅      |
| vibrationPattern    | Pattern to pulse the vibration hardware on the device when the toast pops up | `number | number[]`                        |               | ✅      |
| soundSrc            | Sound source to play when the toast pops up                                  | `string`                                   |               | ✅      |
| imageSrc            | Image source (in case you wish to overwrite the default ones)                | `string`                                   |               | ✅      |
| imageSize           | Image size                                                                   | `number`                                   | `80`          | ✅      |

### Additional docs

* [Vibrate](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/vibrate)
* [Audio](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio)

{: .warning }
Vibration will not work on Safari as the `vibrate()` method is not compatible with it.

## CSS Variables

{: .note .my-6 }
`--cute-toast-primary` and `--cute-toast-primary-light` are set according to `--cute-toast-color-{type}` and `--cute-toast-color-{type}-light` respectively.

| CSS Variable                       | Default Value                     |
|:-----------------------------------|:----------------------------------|
--cute-toast-z-index                 | `10`                              |
--cute-toast-gap                     | `0.75rem`                         |
--cute-toast-border-radius           | `0.25rem`                         |
--cute-toast-box-shadow              | `0 0 20px rgb(0, 0, 0, 0.2)`      |
--cute-toast-background-color        | `var(--cute-toast-primary)`       |
--cute-toast-color-error             | `#d85261`                         |
--cute-toast-color-error-light       | `#e5a4b4`                         |
--cute-toast-color-success           | `#2dd284`                         |
--cute-toast-color-success-light     | `#6edaa4`                         |
--cute-toast-color-warning           | `#fada5e`                         |
--cute-toast-color-warning-light     | `#fcecae`                         |
--cute-toast-color-info              | `#88cef7`                         |
--cute-toast-color-info-light        | `#c3e6fb`                         |
--cute-toast-padding                 | `0.75rem 1rem`                    |
--cute-toast-width                   | `100%`                            |
--cute-toast-content-margin          | `0 1.5rem 0 1rem`                 |
--cute-toast-title-font-size         | `1rem`                            |
--cute-toast-title-font-family       | `'Open Sans', sans-serif`         |
--cute-toast-title-font-weight       | `700`                             |
--cute-toast-title-color             | `#fff`                            |
--cute-toast-description-font-size   | `0.875rem`                        |
--cute-toast-description-font-family | `'Open Sans', sans-serif`         |
--cute-toast-description-font-weight | `600`                             |
--cute-toast-description-color       | `#fff`                            |
--cute-toast-close-color             | `rgb(0, 0, 0, 0.2)`               |
--cute-toast-close-color-hover       | `rgb(0, 0, 0, 0.5)`               |
--cute-toast-timer-background-color  | `var(--cute-toast-primary-light)` |
