<template>
    <SelectLabelPrimitive
        data-slot="select-label"
        v-bind="forwarded"
        :class="cn(baseClass, props.class)"
    >
        <slot />
    </SelectLabelPrimitive>
</template>

<script lang="ts" setup>
import {
    SelectLabel as SelectLabelPrimitive,
    useForwardProps,
    type SelectLabelProps,
} from "reka-ui"
import { type HTMLAttributes, computed } from "vue"
import cn from "~/utils/cn"

const props = defineProps<
    SelectLabelProps & {
        /** Additional class names to apply to the SelectLabel */
        class?: HTMLAttributes["class"]
    }
>()

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props
    return delegated
})

const forwarded = useForwardProps(delegatedProps)

const baseClass = "text-muted-foreground px-2 py-1.5 text-xs"
</script>
