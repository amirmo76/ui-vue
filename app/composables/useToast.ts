import { provide, reactive } from "vue"
import { v4 as uuidv4 } from "uuid"
import type { Toast } from "~~/shared/types/toast"

/**
 * Creates and initializes a toast notification store.
 *
 * This composable function creates a reactive store for managing toast notifications
 * . It maintains a list of active toasts and provides methods
 * to add and remove them. The store is provided to child components via Vue's
 * provide/inject mechanism.
 *
 * @param storeKey - A unique symbol used as the injection key for the toast store
 * @returns A reactive store object containing the toasts array and methods
 *
 * @example
 * // In a parent component like a layout or App.vue
 * useToastStore();
 *
 * // In a child component
 * const toastStore = inject<ToastStore>(toastSymbol);
 * toastStore.remove(toastId);
 */
export const useToastStore = (storeKey: Symbol): ToastStore => {
    const toasts = reactive<Toast[]>([])

    /**
     * Removes a toast notification by its ID.
     *
     * @param {string} id - The unique identifier of the toast to remove
     */
    const remove = (id: string) => {
        const index = toasts.findIndex((t) => t.id === id)
        if (index > -1) toasts.splice(index, 1)
    }

    /**
     * Adds a new toast notification to the store.
     *
     * Maintains a maximum of 3 toasts by removing the oldest toast
     * when the limit is exceeded.
     *
     * @param toast - The toast object to add to the store
     */
    const add = (toast: Toast) => {
        toasts.push(toast)
        if (toasts.length > 3) {
            toasts.shift()
        }
    }

    const store = reactive<ToastStore>({
        toasts,
        add,
        remove,
    })
    provide(storeKey, store)
    return store
}

/**
 * Creates a new toast notification object.
 *
 * Factory function that generates a toast object with a unique ID and
 * default settings. All toasts have a default duration of 3000ms (3 seconds).
 *
 * @param title - The main heading text of the toast
 * @param [description] - Optional detailed description text
 * @param [variant='default'] - The visual style variant of the toast
 * @returns A fully formed toast object ready to be added to the store
 *
 * @example
 * // Create a success toast
 * const toast = newToast('Upload Complete', 'Your file was uploaded successfully', 'destructive');
 *
 * @example
 * // Create a simple toast with just a title
 * const toast = newToast('Hello World');
 */
export const newToast = (
    title: string,
    description?: string,
    variant: ToastVariant = "default"
): Toast => {
    return {
        id: uuidv4(),
        title,
        description,
        duration: 3000,
        variant,
    }
}
