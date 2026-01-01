<!--
    The toast container component is responsible for rendering and positioning toast notifications on the screen.

    This component listens to the toast store and renders each toast using the Toast component.

    Use this once in your application layout to display toasts added to the toast store.
-->
<template>
    <div
        data-slot="toast-container"
        class="fixed top-4 right-1/2 translate-x-1/2 z-100 w-2xs md:w-sm"
    >
        <Toast
            v-for="(toast, idx) in toastStore.toasts"
            :toast="toast"
            :len="toastStore.toasts.length"
            :idx="idx"
            :key="toast.id"
        />
    </div>
</template>

<script lang="ts" setup>
const toastStore = inject<ToastStore>(TOAST_STORE_KEY)

if (!toastStore) {
    throw new Error(
        "ToastContainer must be used within a ToastStore context. useToast composable must be used to provide the store."
    )
}
</script>
