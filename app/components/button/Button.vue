<!--
    Primitive Button Component. With variants for different styles and sizes.
    Variants are managed using class-variance-authority (CVA).

    Examples:

    Basic usage
    <Button>Click me</Button>

    With variant
    <Button variant="destructive">Delete</Button>

    With size
    <Button size="lg">Large Button</Button>

    Icon button
    <Button variant="ghost" size="icon">
        <SomeICon />
    </Button>
-->
<template>
    <button :class="cn(buttonVariants({ variant, size }), props.class)">
        <slot />
    </button>
</template>

<script lang="ts" setup>
import { type VariantProps, cva } from "class-variance-authority"
import type { HTMLAttributes } from "vue"

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
    {
        variants: {
            /**
             * Visual style variants
             * @default "default"
             */
            variant: {
                /** Primary brand button with solid background */
                default:
                    "bg-primary text-primary-foreground hover:bg-primary/90",
                /** Destructive action button (e.g., delete, remove) */
                destructive:
                    "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
                /** Outlined button with border and transparent background */
                outline:
                    "border border-border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
                /** secondary button with less emphasis */
                secondary:
                    "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                /** ghost button with no background or border */
                ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
                /** inline link styled button */
                link: "text-primary underline-offset-4 hover:underline",
            },
            /**
             * Button size variants
             * @default "default"
             */
            size: {
                default: "h-9 px-4 py-2 has-[>svg]:px-3",
                sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
                lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
                xl: "h-12 px-8 rounded-md has-[>svg]:px-4",
                icon: "size-9",
                "icon-sm": "size-8",
                "icon-lg": "size-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

type ButtonVariants = VariantProps<typeof buttonVariants>

const props = defineProps<{
    /**
     * Visual style variant
     * @default "default"
     */
    variant?: ButtonVariants["variant"]
    /**
     * Size variant
     * @default "default"
     */
    size?: ButtonVariants["size"]
    /**
     * Additional classes to apply to the button
     */
    class?: HTMLAttributes["class"]
}>()
</script>
