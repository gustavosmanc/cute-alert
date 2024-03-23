---
layout: default
title: TypeScript
nav_order: 5
permalink: /typescript/
---

# TypeScript
{: .fs-9 }

Cute Alert has built-in TypeScript support and provides a set of default exported types that you can import as named imports into your project.
{: .fs-6 .fw-300 }

---

## Usage

Simply import the types you need from `cute-alert` like:

```ts
import type {
  AlertOptions,
  ToastOptions,
  AlertResolveValue,
  ToastResolveValue,
  AlertResolve,
  ToastResolve
} from 'cute-alert'
```

## Declarations

```ts
declare const ALERT_RESOLVE_VALUES: {
  readonly PRIMARY_BUTTON_CLICKED: 'primaryButtonClicked'
  readonly SECONDARY_BUTTON_CLICKED: 'secondaryButtonClicked'
  readonly CLOSE: 'close'
}

export declare type AlertOptions = {
  type: 'error' | 'info' | 'question' | 'success' | 'warning'
  title?: string
  description?: string
  timer?: number
  primaryButtonText?: string
  secondaryButtonText?: string
  vibrationPattern?: number[]
  soundSrc?: string
  closeStyle?: 'default' | 'circle'
  imageSrc?: string
  imageSize?: number
}

export declare type AlertResolve = (value: AlertResolveValue) => void

export declare type AlertResolveValue =
  (typeof ALERT_RESOLVE_VALUES)[keyof typeof ALERT_RESOLVE_VALUES]

export declare const cuteAlert: ({
  type,
  title,
  description,
  timer,
  primaryButtonText,
  secondaryButtonText,
  vibrationPattern,
  soundSrc,
  closeStyle,
  imageSrc,
  imageSize
}: AlertOptions) => Promise<'primaryButtonClicked' | 'secondaryButtonClicked' | 'close'>

export declare const cuteToast: ({
  type,
  title,
  description,
  timer,
  vibrationPattern,
  soundSrc,
  imageSrc,
  imageSize
}: ToastOptions) => Promise<'close'>

declare const TOAST_RESOLVE_VALUES: {
  readonly CLOSE: 'close'
}

export declare type ToastOptions = {
  type: 'error' | 'info' | 'success' | 'warning'
  title?: string
  description?: string
  timer?: number
  vibrationPattern?: number[]
  soundSrc?: string
  imageSrc?: string
  imageSize?: number
}

export declare type ToastResolve = (value: ToastResolveValue) => void

export declare type ToastResolveValue =
  (typeof TOAST_RESOLVE_VALUES)[keyof typeof TOAST_RESOLVE_VALUES]
```
