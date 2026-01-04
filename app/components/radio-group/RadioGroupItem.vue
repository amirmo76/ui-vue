<!--
    An individual radio button item.
    Does not include a label, should be used alongside a label.
    It's completely up to you how you want to layout the radio item and label.

    Example usage:

    <div class="flex items-center gap-2">
        <RadioGroupItem value="option1" id="r1" />
        <label for="r1">Option 1</label>
    </div>
-->

<template>
    <RadioGroupItemPrimitive
        data-slot="radio-group-item"
        v-bind="forwarded"
        :class="cn(baseClass, props.class)"
    >
        <RadioGroupIndicator
            data-slot="radio-group-indicator"
            class="flex items-center justify-center"
        >
            <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-2 text-current"
            >
                <circle cx="12" cy="12" r="12" />
            </svg>
        </RadioGroupIndicator>
    </RadioGroupItemPrimitive>
</template>

<script lang="ts" setup>
import {
    RadioGroupItem as RadioGroupItemPrimitive,
    type RadioGroupItemProps,
    type RadioGroupItemEmits,
    RadioGroupIndicator,
    useForwardPropsEmits,
} from "reka-ui"
import { type HTMLAttributes, computed } from "vue"
import cn from "~/utils/cn"

const props = defineProps<
    RadioGroupItemProps & {
        /** Additional class names to apply to the RadioGroupItem */
        class?: HTMLAttributes["class"]
    }
>()

const emits = defineEmits<RadioGroupItemEmits>()

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props
    return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)

const baseClass =
    "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50"
</script>
