---
layout: default
title: Alerts
nav_order: 2
permalink: /alerts/
---

# Alerts
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Usage

```ts
import { cuteAlert } from 'cute-alert'

cuteAlert({
  type: 'success',
  title: 'Title',
  description: 'Description',
  timer: 5000,
  primaryButtonText: 'Confirm',
  secondaryButtonText: 'Cancel',
}).then((event) => {
  if (event === 'primaryButtonClicked') {
    console.log('primary button clicked')
  }
})
```

[Storybook](https://gustavosmanc.github.io/cute-alert/storybook/?path=/story/cutealert-alert--playground){: .btn }

{: .note }
`event` has the `AlertResolveValue` type, meaning it can have one of the following values: `primaryButtonClicked`, `secondaryButtonClicked` or `close`. For more information about types, check out the [Typescript page](https://gustavosmanc.github.io/cute-alert/docs/typescript/).

## Options

| Name                | Description                                                                  | Type                                                    | Default Value | Optional |
|:--------------------|:-----------------------------------------------------------------------------|:--------------------------------------------------------|:--------------|:---------|
| type                | Type of alert                                                                | `'error' | 'info' | 'question' | 'success' | 'warning'` |               | 🚫      |
| title               | Text to be displayed on title                                                | `string`                                                |               | ✅      |
| description         | Text to be displayed on description                                          | `string`                                                |               | ✅      |
| timer               | Timer to close the alert                                                     | `number`                                                |               | ✅      |
| primaryButtonText   | Text to be displayed on primary button                                       | `string`                                                |               | ✅      |
| secondaryButtonText | Text to be displayed on secondary button                                     | `string`                                                |               | ✅      |
| vibrationPattern    | Pattern to pulse the vibration hardware on the device when the alert pops up | `number | number[]`                                     |               | ✅      |
| soundSrc            | Sound source to play when the alert pops up                                  | `string`                                                |               | ✅      |
| closeStyle          | Style of alert's close button                                                | `'default' | 'circle'`                                  | `default`     | ✅      |
| imageSrc            | Image source (in case you wish to overwrite the default ones)                | `string`                                                |               | ✅      |
| imageSize           | Image size                                                                   | `number`                                                | `80`          | ✅      |

### Additional docs

* [Vibrate](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/vibrate)
* [Audio](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio)

{: .warning }
Vibration will not work on Safari as the `vibrate()` method is not compatible with it.

## CSS Variables

{: .note .my-6 }
`--cute-alert-primary` and `--cute-alert-primary-light` are set according to `--cute-alert-color-{type}` and `--cute-alert-color-{type}-light` respectively.

| CSS Variable                                     | Default Value                     |
|:-------------------------------------------------|:----------------------------------|
--cute-alert-overlay-color                         | `rgb(0, 0, 0, 0.3)`               |
--cute-alert-z-index                               | `10`                              |
--cute-alert-color-error                           | `#d85261`                         |
--cute-alert-color-error-light                     | `#e5a4b4`                         |
--cute-alert-color-success                         | `#2dd284`                         |
--cute-alert-color-success-light                   | `#6edaa4`                         |
--cute-alert-color-warning                         | `#fada5e`                         |
--cute-alert-color-warning-light                   | `#fcecae`                         |
--cute-alert-color-info                            | `#88cef7`                         |
--cute-alert-color-info-light                      | `#c3e6fb`                         |
--cute-alert-color-question                        | `#779ecb`                         |
--cute-alert-color-question-light                  | `#bacee4`                         |
--cute-alert-background-color                      | `#fff`                            |
--cute-alert-min-width                             | `unset`                           |
--cute-alert-width                                 | `unset`                           |
--cute-alert-max-width                             | `unset`                           |
--cute-alert-min-height                            | `unset`                           |
--cute-alert-height                                | `unset`                           |
--cute-alert-max-height                            | `unset`                           |
--cute-alert-box-shadow                            | `5px 5px 10px rgb(0, 0, 0, 0.2)`  |
--cute-alert-border-radius                         | `0.5rem`                          |
--cute-alert-header-background-color               | `var(--cute-alert-primary)`       |
--cute-alert-close-color-hover                     | `rgb(0, 0, 0, 0.5)`               |
--cute-alert-close-color-default                   | `rgb(0, 0, 0, 0.2)`               |
--cute-alert-close-background-color-circle         | `#e4eae7`                         |
--cute-alert-close-color-circle                    | `#222`                            |
--cute-alert-close-background-color-circle-hover   | `#fff`                            |
--cute-alert-body-background-color                 | `#fff`                            |
--cute-alert-title-font-family                     | `'Open Sans', sans-serif`         |
--cute-alert-title-font-weight                     | `700`                             |
--cute-alert-title-font-size                       | `1rem`                            |
--cute-alert-title-color                           | `#222`                            |
--cute-alert-description-font-size                 | `0.875rem`                        |
--cute-alert-description-color                     | `#666`                            |
--cute-alert-description-font-family               | `'Open Sans', sans-serif`         |
--cute-alert-description-font-weight               | `400`                             |
--cute-alert-primary-button-font-family            | `Open Sans', sans-serif`          |
--cute-alert-primary-button-font-weight            | `400`                             |
--cute-alert-primary-button-font-size              | `0.875rem`                        |
--cute-alert-primary-button-color                  | `#fff`                            |
--cute-alert-primary-button-background-color       | `var(--cute-alert-primary)`       |
--cute-alert-primary-button-border-radius          | `1rem`                            |
--cute-alert-primary-button-padding                | `0.5rem 2rem`                     |
--cute-alert-primary-button-background-color-hover | `var(--cute-alert-primary-light)` |
--cute-alert-secondary-button-font-family          | `'Open Sans', sans-serif`         |
--cute-alert-secondary-button-font-weight          | `400`                             |
--cute-alert-secondary-button-font-size            | `0.875rem`                        |
--cute-alert-secondary-button-background-color     | `#fff`                            |
--cute-alert-secondary-button-padding              | `0.5rem 2rem`                     |
--cute-alert-secondary-button-border-radius        | `1rem`                            |
--cute-alert-secondary-button-border-color         | `var(--cute-alert-primary)`       |
--cute-alert-secondary-button-color                | `var(--cute-alert-primary)`       |
--cute-alert-secondary-button-border-color-hover   | `var(--cute-alert-primary-light)` |
--cute-alert-secondary-button-color-hover          | `var(--cute-alert-primary-light)` |
--cute-alert-timer-background-color                | `var(--cute-alert-primary-light)` |
