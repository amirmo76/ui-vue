<template>
    <div class="flex flex-col items-center justify-center min-h-screen py-2">
        <div class="text-center mb-8">
            <h1 class="text-4xl font-bold mb-2">Welcome to UI-VUE!</h1>
            <p class="text-lg text-muted-foreground">
                A minimal, opinionated UI base for Vue & Nuxt 3. Copy, paste,
                and own your components.
            </p>
        </div>
        <div class="flex flex-col gap-4">
            <Button @click="toast">Show Toast</Button>
            <Select v-model="selectedTown">
                <SelectTrigger class="w-64"
                    ><SelectValue placeholder="Select your town..."
                /></SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="new-york">New York</SelectItem>
                        <SelectItem value="los-angeles">Los Angeles</SelectItem>
                        <SelectItem value="chicago" disabled
                            >Chicago</SelectItem
                        >
                        <SelectItem value="houston">Houston</SelectItem>
                    </SelectGroup>
                    <SelectGroup>
                        <SelectItem value="phoenix">Phoenix</SelectItem>
                        <SelectItem value="philadelphia"
                            >Philadelphia</SelectItem
                        >
                        <SelectItem value="san-antonio">San Antonio</SelectItem>
                        <SelectItem value="san-diego">San Diego</SelectItem>
                        <SelectItem value="dallas">Dallas</SelectItem>
                        <SelectItem value="san-jose">San Jose</SelectItem>
                    </SelectGroup>
                    <SelectGroup>
                        <SelectItem value="austin">Austin</SelectItem>
                        <SelectItem value="jacksonville"
                            >Jacksonville</SelectItem
                        >
                        <SelectItem value="fort-worth">Fort Worth</SelectItem>
                        <SelectItem value="columbus">Columbus</SelectItem>
                        <SelectItem value="charlotte">Charlotte</SelectItem>
                        <SelectItem value="san-francisco"
                            >San Francisco</SelectItem
                        >
                        <SelectItem value="indianapolis"
                            >Indianapolis</SelectItem
                        >
                        <SelectItem value="seattle">Seattle</SelectItem>
                        <SelectItem value="denver">Denver</SelectItem>
                        <SelectItem value="washington-dc"
                            >Washington D.C.</SelectItem
                        >
                        <SelectItem value="boston">Boston</SelectItem>
                        <SelectItem value="el-paso">El Paso</SelectItem>
                        <SelectItem value="nashville">Nashville</SelectItem>
                        <SelectItem value="detroit">Detroit</SelectItem>
                        <SelectItem value="memphis">Memphis</SelectItem>
                        <SelectItem value="portland">Portland</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    </div>
</template>

<script lang="ts" setup>
const store = inject(TOAST_STORE_KEY)
const selectedTown = ref<string | null>(null)

const toast = () =>
    store?.add(
        newToast("Hello World!", "You are using toast store.", "success")
    )

watch(
    selectedTown,
    (newVal) => {
        console.log("Selected town:", newVal)
    },
    { immediate: true }
)
</script>
