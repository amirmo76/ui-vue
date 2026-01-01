import type { InjectionKey } from "vue"

/**
 * Available visual variants for toast notifications.
 */
export type ToastVariant = "default" | "success" | "destructive" | "warning"

/**
 * Represents a toast notification object.
 */
export interface Toast {
    /** Unique identifier for the toast */
    id: string
    /** The main heading text displayed in the toast */
    title: string
    /** Optional detailed description or message */
    description?: string
    /** The visual style variant of the toast */
    variant: ToastVariant
    /** How long the toast should be displayed in milliseconds */
    duration: number
}

/**
 * Interface for the toast notification store.
 *
 * Defines the structure of the reactive store used to manage toast notifications
 * throughout the application.
 */
export interface ToastStore {
    /** Array of currently active toast notifications */
    toasts: Toast[]
    /** Method to add a new toast to the store */
    add: (toast: Toast) => void
    /** Method to remove a toast from the store by its ID */
    remove: (id: string) => void
}

/**
 * Unique symbol used as the injection key for the toast store.
 *
 * This symbol is used with Vue's provide/inject API to share the toast store
 * across the component tree while avoiding naming collisions.
 */
export const TOAST_STORE_KEY: InjectionKey<ToastStore> = Symbol("toastStore")
