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
    <SelectGroup
        data-slot="select-group"
        :class="cn(baseClass, props.class)"
        v-bind="delegatedProps"
    >
        <slot />
    </SelectGroup>
</template>

<script lang="ts" setup>
import { SelectGroup, type SelectGroupProps } from "reka-ui"
import { type HTMLAttributes, computed } from "vue"
import cn from "~/utils/cn"

const props = defineProps<
    SelectGroupProps & { class?: HTMLAttributes["class"] }
>()

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props
    return delegated
})

const baseClass = "scroll-my-1 p-1"
</script>
