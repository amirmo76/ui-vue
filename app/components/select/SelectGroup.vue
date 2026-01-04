<!--
    A group set of items inside select content.
    Often used with a label.

    Example usage:

    <SelectContent>
        <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
        </SelectGroup>
    </SelectContent>
-->

<template>
    <SelectGroupPrimitive
        data-slot="select-group"
        :class="cn(baseClass, props.class)"
        v-bind="delegatedProps"
    >
        <slot />
    </SelectGroupPrimitive>
</template>

<script lang="ts" setup>
import {
    SelectGroup as SelectGroupPrimitive,
    type SelectGroupProps,
} from "reka-ui"
import { type HTMLAttributes, computed } from "vue"
import cn from "~/utils/cn"

const props = defineProps<
    SelectGroupProps & {
        /** Additional class names to apply to the SelectGroup */
        class?: HTMLAttributes["class"]
    }
>()

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props
    return delegated
})

const baseClass = "w-full"
</script>
