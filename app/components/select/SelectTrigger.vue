<!--
    Select Trigger (Root)
        The button which opens the Select dropdown.
        Renders a Button with a chevron icon.

    Example usage:

    <SelectTrigger>
        <SelectValue />
    </SelectTrigger>
-->

<template>
    <SelectTrigger
        data-slot="select-trigger"
        :data-size="props.size"
        :class="cn(baseClass, props.class)"
        v-bind="forwarded"
    >
        <slot />
        <SelectIcon asChild>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 9l6 6l6 -6" />
            </svg>
        </SelectIcon>
    </SelectTrigger>
</template>

<script lang="ts" setup>
import {
    SelectTrigger,
    type SelectTriggerProps,
    SelectIcon,
    useForwardProps,
} from "reka-ui"
import { type HTMLAttributes, computed } from "vue"
import cn from "~/utils/cn"

const props = withDefaults(
    defineProps<
        SelectTriggerProps & {
            /** Custom class names to apply to the trigger */
            class?: HTMLAttributes["class"]
            /** The size of the trigger button */
            size?: "default" | "sm"
        }
    >(),
    {
        size: "default",
    }
)

// strip out props that are not meant to be forwarded
const delegatedProps = computed(() => {
    const { class: _, size: __, ...delegated } = props
    return delegated
})

// forward only the delegated props to the SelectTrigger
const forwarded = useForwardProps(delegatedProps)

const baseClass =
    "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
</script>
