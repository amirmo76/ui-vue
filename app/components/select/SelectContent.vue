<!--
    The content popped out when the Select is open.
    Renders in a portal and handles viewport positioning.
    Included scroll buttons for long lists.

    Should be used within a <Select> component.

    Example usage:

    <Select>
        <SelectTrigger>...</SelectTrigger>
        <SelectContent>
            <SelectItem>...</SelectItem>
        </SelectContent>
    </Select>
-->

<template>
    <SelectPortal>
        <SelectContent
            data-slot="select-content"
            v-bind="forwarded"
            :class="
                cn(
                    baseClass,
                    props.position === 'popper' && popperClass,
                    props.class
                )
            "
        >
            <SelectScrollUpButton
                data-slot="select-scroll-up-button"
                class="flex cursor-default items-center justify-center py-1"
            >
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
                    class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-up size-4"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M6 15l6 -6l6 6" />
                </svg>
            </SelectScrollUpButton>

            <SelectViewport
                :class="
                    props.position === 'popper' &&
                    'h-(--reka-select-trigger-height) w-full min-w-(--reka-select-trigger-width) scroll-my-1'
                "
            >
                <slot />
            </SelectViewport>

            <SelectScrollDownButton
                data-slot="select-scroll-down-button"
                class="flex cursor-default items-center justify-center py-1"
            >
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
                    class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down size-4"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M6 9l6 6l6 -6" />
                </svg>
            </SelectScrollDownButton>
        </SelectContent>
    </SelectPortal>
</template>

<script lang="ts" setup>
import {
    SelectPortal,
    SelectContent,
    SelectScrollUpButton,
    SelectScrollDownButton,
    SelectViewport,
    type SelectContentEmits,
    type SelectContentProps,
    useForwardPropsEmits,
} from "reka-ui"
import { type HTMLAttributes, computed } from "vue"
import cn from "~/utils/cn"

const props = defineProps<
    SelectContentProps & {
        /** Additional class names to apply to the content */
        class?: HTMLAttributes["class"]
    }
>()

const emits = defineEmits<SelectContentEmits>()

// delegate all props except class, set defaults for align and position
const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props
    delegated.align = delegated.align ?? "center"
    delegated.position = delegated.position ?? "item-aligned"
    return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)

const baseClass =
    "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--reka-select-content-available-height) min-w-[8rem] origin-(--reka-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border border-border shadow-md"

const popperClass =
    "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1"
</script>
