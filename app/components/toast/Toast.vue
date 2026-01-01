<!--
    Toast component responsible for displaying individual toast notifications with animations and styling.
    This comoponent is used within the ToastContainer to render each toast notification.
-->

<template>
    <div
        data-slot="toast"
        ref="toast"
        class="absolute group p-4 rounded-xl border border-border/50 dark:border-border/60 bg-muted/75 backdrop-blur-sm text-foreground/90 shadow-lg shadow-black/5 dark:shadow-black/20 w-full text-sm flex gap-3 items-center transition-all right-0 top-0 duration-300 ease-out"
        :class="{
            'animate-toast-in': !isExiting,
            'animate-toast-out': isExiting,
        }"
        :style="{
            transform: `translateY(${y}px) scale(${scale})`,
            zIndex: idx,
        }"
    >
        <div class="flex items-center shrink-0">
            <ToastIcon :variant="toast.variant" />
        </div>
        <div class="flex flex-col flex-1 gap-1">
            <h4 class="font-semibold">{{ toast.title }}</h4>
            <p v-if="toast.description">{{ toast.description }}</p>
        </div>
    </div>
</template>

<script lang="ts" setup>
const toastStore = inject<ToastStore>(TOAST_STORE_KEY)
const { toast, len, idx } = defineProps<{
    /**
     * The toast data to display
     */
    toast: Toast
    /**
     * Total number of toasts in the stack
     */
    len: number
    /**
     * Index of this toast in the stack
     */
    idx: number
}>()
const toastRef = useTemplateRef("toast")
const isExiting = ref(false)

// calculate vertical position based on index
// and total length of toasts
// older toasts are pushed down
let y = computed(() => {
    const multiplier = len - 1 - idx
    return (multiplier >= 0 ? multiplier : 0) * 20
})

// calculate scale based on index and toatl length of toasts
// older toasts are slightly smaller
let scale = computed(() => {
    const multiplier = len - 1 - idx
    return 1.0 - (multiplier >= 0 ? multiplier : 0) * 0.05
})

onMounted(() => {
    setTimeout(() => {
        if (toastStore) isExiting.value = true
    }, toast.duration)
})

onMounted(() => {
    toastRef.value?.addEventListener("animationend", (e) => {
        if (e.animationName.startsWith("toast-out"))
            toastStore?.remove(toast.id)
    })
})
</script>

<style scoped>
@keyframes toast-in {
    0% {
        opacity: 0;
        transform: translateY(-100%);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes toast-out {
    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}

.animate-toast-in {
    animation: toast-in 300ms cubic-bezier(0.16, 1, 0.3, 1);
}

.animate-toast-out {
    animation: toast-out 300ms cubic-bezier(0.16, 1, 0.3, 1);
}
</style>
