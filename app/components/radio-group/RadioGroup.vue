<!--
    A set of interactive radio buttons where only one can be checked at a time.
    This is the root container that manages the state of the radio items.

    Example usage:
    TODO: add example usage
-->
<template>
    <RadioGroupRoot
        data-slot="radio-group"
        v-bind="forwarded"
        :class="cn(baseClass, props.class)"
    >
        <slot />
    </RadioGroupRoot>
</template>

<script lang="ts" setup>
import {
    RadioGroupRoot,
    useForwardPropsEmits,
    type RadioGroupRootEmits,
    type RadioGroupRootProps,
} from "reka-ui"
import { type HTMLAttributes, computed } from "vue"
import cn from "~/utils/cn"

const props = defineProps<
    RadioGroupRootProps & {
        /** Additional class names to apply to the RadioGroup */
        class?: HTMLAttributes["class"]
    }
>()

const emits = defineEmits<RadioGroupRootEmits>()

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props
    return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)

const baseClass = "grid gap-3"
</script>
