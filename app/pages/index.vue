<template>
    <div class="flex flex-col items-center justify-center min-h-screen py-2">
        <div class="text-center mb-8">
            <h1 class="text-4xl font-bold mb-2">Welcome to UI-VUE!</h1>
            <p class="text-lg text-muted-foreground">
                A minimal, opinionated UI base for Vue & Nuxt 3. Copy, paste,
                and own your components.
            </p>
        </div>
        <Button @click="toast">Show Toast</Button>
    </div>
</template>

<script lang="ts" setup>
const store = inject(TOAST_STORE_KEY)

const toast = () =>
    store?.add(
        newToast("Hello World!", "You are using toast store.", "success")
    )
</script>
