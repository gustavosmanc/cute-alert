---
layout: home
title: Home
nav_order: 1
permalink: /
---

# Cute Alert
{: .fs-9 }

Simple open source JavaScript library that aims to provide beautiful alerts and toasts to your website.
{: .fs-6 .fw-300 }

[Storybook](https://gustavosmanc.github.io/cute-alert/storybook/){: .btn .btn-primary fs-5 .mb-4 .mb-md-0 .mr-2 }
[View it on GitHub](https://github.com/gustavosmanc/cute-alert/){: .btn fs-5 .mb-4 .mb-md-0 }

---

## Getting started

### Installation

```bash
npm install cute-alert
```

### Alerts

```ts
import { cuteAlert } from 'cute-alert'

cuteAlert({
  type: 'success',
  title: 'Title',
  description: 'Description',
  timer: 5000,
  primaryButtonText: 'Confirm',
  secondaryButtonText: 'Cancel'
})
```

> Check out the [Alerts page](https://gustavosmanc.github.io/cute-alert/docs/alerts/) for more detailed instructions.

### Toasts

```ts
import { cuteToast } from 'cute-alert'

cuteToast({
  type: 'success',
  title: 'Title',
  description: 'Description',
  timer: 5000
})
```

> Check out the [Toasts page](https://gustavosmanc.github.io/cute-alert/docs/toasts/) for more detailed instructions.

### Contributing

If you wish to contribute with Cute Alert, you can learn more about how to do so in [our GitHub repository](https://github.com/gustavosmanc/cute-alert?tab=readme-ov-file#contributing).

### License

Cute Alert is distributed by an [MIT license](https://github.com/gustavosmanc/cute-alert/blob/master/LICENSE).
