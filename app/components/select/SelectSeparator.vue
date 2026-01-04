<!--
    A visual separator between groups of items in the Select content.

    Example usage:

    ...
    <SelectGroup>
        <SelectLabel>Fruits</SelectLabel>
        <SelectItem value="apple">Apple</SelectItem>
    </SelectGroup>

    <SelectSeparator />

    <SelectGroup>
        <SelectLabel>Vegetables</SelectLabel>
        <SelectItem value="carrot">Carrot</SelectItem>
    </SelectGroup>
    ...
-->
<template>
    <SelectSeparatorPrimitive
        data-slot="select-seperator"
        v-bind="forwarded"
        :class="cn(baseClass, props.class)"
    >
        <slot />
    </SelectSeparatorPrimitive>
</template>

<script lang="ts" setup>
import {
    useForwardProps,
    type SelectSeparatorProps,
    SelectSeparator as SelectSeparatorPrimitive,
} from "reka-ui"
import { type HTMLAttributes, computed } from "vue"
import cn from "~/utils/cn"

const props = defineProps<
    SelectSeparatorProps & {
        /** Additional class names to apply to the SelectLabel */
        class?: HTMLAttributes["class"]
    }
>()

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props
    return delegated
})

const forwarded = useForwardProps(delegatedProps)

const baseClass = "bg-border pointer-events-none -mx-1 my-1 h-px"
</script>
