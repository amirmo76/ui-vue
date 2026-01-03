<!--
    Select (Root)
        The logic provider for the Select component.
        Renders nothing.

        Pass your styles to the <SelectTrigger> component.

    Example usage:
    <Select>
        <SelectTrigger>...</SelectTrigger>
        <SelectContent>...</SelectContent>
    </Select>
-->

<template>
    <SelectRoot v-bind="forwarded">
        <slot />
    </SelectRoot>
</template>

<script lang="ts" setup>
import {
    SelectRoot,
    type SelectRootEmits,
    type SelectRootProps,
    useForwardPropsEmits,
} from "reka-ui"

const props = defineProps<SelectRootProps>()
const emits = defineEmits<SelectRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>
