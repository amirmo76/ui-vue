<!--
    Displays different icons based on the toast variant.
    This component is used within the Toast component to visually indicate the type of toast notification (success, destructive, warning).
-->

<template>
    <svg
        v-if="props.variant === 'success'"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        color="currentColor"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
    >
        <path
            d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
        />
        <path d="M8 12.5L10.5 15L16 9" />
    </svg>
    <svg
        v-else-if="props.variant === 'destructive'"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        color="currentColor"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
    >
        <path
            d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
        />
        <path d="M14.9994 15L9 9M9.00064 15L15 9" />
    </svg>
    <svg
        v-else-if="props.variant === 'warning'"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        color="currentColor"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
    >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8V12.5" />
        <path d="M12 15.9883V15.9983" />
    </svg>
</template>

<script lang="ts" setup>
const props = withDefaults(
    defineProps<{
        /**
         * The variant of the toast to determine which icon to show
         * @default "default"
         */
        variant: ToastVariant
    }>(),
    {
        variant: "default",
    }
)
</script>
