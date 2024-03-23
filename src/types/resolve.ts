import { ALERT_RESOLVE_VALUES, TOAST_RESOLVE_VALUES } from '@/constants/resolve'

export type AlertResolveValue = (typeof ALERT_RESOLVE_VALUES)[keyof typeof ALERT_RESOLVE_VALUES]
export type ToastResolveValue = (typeof TOAST_RESOLVE_VALUES)[keyof typeof TOAST_RESOLVE_VALUES]

export type AlertResolve = (value: AlertResolveValue) => void
export type ToastResolve = (value: ToastResolveValue) => void
