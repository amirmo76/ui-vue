<!--
    A multi-line text input control.
    Wraps the native <textarea>.

    Example usage:
        <Textarea v-model="message" placeholder="Type your message here." rows="5" />
        // or
        <Textarea :model-value="message" @update:movel-value="handleUpdate"  />
-->

<template>
    <textarea
        data-slot="textarea"
        v-bind="delegatedProps"
        :class="cn(baseClass, props.class)"
        :modelValue="props.modelValue"
        @input="onInput"
    />
</template>

<script lang="ts" setup>
import { type HTMLAttributes, type TextareaHTMLAttributes, computed } from "vue"
import cn from "~/utils/cn"

// Extend native attributes for type safety.
// We omit 'value'. So the user can only set the value via v-model or model-value.
// This way the user won't be able to provide a seperate value and break the functionality.
const props = defineProps<
    /* @vue-ignore */
    Omit<TextareaHTMLAttributes, "value"> & {
        /** Additional class names to apply to the Textarea */
        class?: HTMLAttributes["class"]
        /** The value of the textarea */
        modelValue?: string
    }
>()

const emits = defineEmits<{
    // This emit gets v-model to work correctly
    (e: "update:modelValue", value: string): void
}>()

// strip out class and modelValue from props to avoid passing them to the textarea element
// since we handle them separately
const delegatedProps = computed(() => {
    const { class: _, modelValue: __, ...delegated } = props
    return delegated
})

const baseClass =
    "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"

// Simply cast the target, extract the value and fire the emit
const onInput = (event: Event) => {
    const el = event.target as HTMLTextAreaElement
    emits("update:modelValue", el.value)
}
</script>
