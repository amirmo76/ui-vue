<!--
    Displays the selected value in the Select trigger.
    If no value is selected, it displays the placeholder text.
    It should be used within a <SelectTrigger> component.

    Example usage:

        <SelectTrigger>
            <SelectValue placeholder="Select an option" />
        </SelectTrigger>
-->

<template>
    <SelectValuePrimitive data-slot="select-value" v-bind="forwarded" />
</template>

<script lang="ts" setup>
import {
    SelectValue as SelectValuePrimitive,
    useForwardProps,
    type SelectValueProps,
} from "reka-ui"

const props = defineProps<SelectValueProps>()

const forwarded = useForwardProps(props)
</script>
