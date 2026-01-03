<!--
    An individual option within the Select dropdown.
    Handles selection state, styling, and the checkmark indicator.
    Should be used within a <SelectContent> component.

    Example usage:

    <SelectItem value="dark">Dark Mode</SelectItem>
-->

<template>
    <SelectItem
        data-slot="select-item"
        :class="cn(baseClass, props.class)"
        v-bind="forwarded"
    >
        <span
            data-slot="select-item-indicator"
            class="pointer-events-none absolute right-2 flex size-4 items-center justify-center"
        >
            <SelectItemIndicator asChild>
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
                    class="icon icon-tabler icons-tabler-outline icon-tabler-check size-4"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l5 5l10 -10" />
                </svg>
            </SelectItemIndicator>
        </span>
        <SelectItemText
            data-slot="select-item-text"
            class="flex flex-1 gap-2 shrink-0 whitespace-nowrap"
        >
            <slot />
        </SelectItemText>
    </SelectItem>
</template>

<script lang="ts" setup>
import {
    SelectItem,
    type SelectItemProps,
    SelectItemIndicator,
    SelectItemText,
    useForwardProps,
} from "reka-ui"
import { type HTMLAttributes, computed } from "vue"
import cn from "~/utils/cn"

const props = defineProps<
    SelectItemProps & {
        /** Additional class names to apply to the SelectItem */
        class?: HTMLAttributes["class"]
    }
>()

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props
    return delegated
})

const forwarded = useForwardProps(delegatedProps)

const baseClass =
    "focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2 relative flex w-full cursor-default items-center outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0"
</script>
