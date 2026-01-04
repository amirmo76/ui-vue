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
                        <SelectLabel>Popular Cities</SelectLabel>
                        <SelectItem value="new-york">New York</SelectItem>
                        <SelectItem value="los-angeles">Los Angeles</SelectItem>
                        <SelectItem value="chicago" disabled
                            >Chicago</SelectItem
                        >
                        <SelectItem value="houston">Houston</SelectItem>
                    </SelectGroup>
                    <SelectSeparator />
                    <SelectGroup>
                        <SelectLabel>All Cities</SelectLabel>
                        <SelectItem value="phoenix">Phoenix</SelectItem>
                        <SelectItem value="philadelphia"
                            >Philadelphia</SelectItem
                        >
                        <SelectItem value="san-antonio">San Antonio</SelectItem>
                        <SelectItem value="san-diego">San Diego</SelectItem>
                        <SelectItem value="dallas">Dallas</SelectItem>
                        <SelectItem value="san-jose">San Jose</SelectItem>
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
            <Textarea placeholder="text" rows="10" v-model="textareaMessage" />
            <RadioGroup class="w-full">
                <div class="flex items-center gap-2">
                    <RadioGroupItem value="a" id="r1" />
                    <label for="r1">Option A</label>
                </div>
                <div class="flex items-center gap-2">
                    <RadioGroupItem value="b" id="r2" />
                    <label for="r2">Option B</label>
                </div>
                <div class="flex items-center gap-2">
                    <RadioGroupItem value="c" id="r3" />
                    <label for="r3">Option C</label>
                </div>
                <label
                    for="r4"
                    class="border-border has-data-[state=checked]:border-primary/20 has-data-[state=checked]:bg-accent flex cursor-pointer flex-col gap-1 rounded-xl border p-4 shadow-sm hover:bg-accent/50"
                >
                    <div class="flex items-center justify-between">
                        <span class="font-semibold">Option D</span>
                        <RadioGroupItem id="r4" value="d" />
                    </div>
                    <p class="text-muted-foreground text-sm">
                        An item with custom layout.
                    </p>
                </label>
            </RadioGroup>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Button from "~/components/button/Button.vue"
import RadioGroup from "~/components/radio-group/RadioGroup.vue"
import RadioGroupItem from "~/components/radio-group/RadioGroupItem.vue"
import Select from "~/components/select/Select.vue"
import SelectContent from "~/components/select/SelectContent.vue"
import SelectGroup from "~/components/select/SelectGroup.vue"
import SelectItem from "~/components/select/SelectItem.vue"
import SelectLabel from "~/components/select/SelectLabel.vue"
import SelectSeparator from "~/components/select/SelectSeparator.vue"
import SelectTrigger from "~/components/select/SelectTrigger.vue"
import SelectValue from "~/components/select/SelectValue.vue"
import Textarea from "~/components/textarea/Textarea.vue"

const store = inject(TOAST_STORE_KEY)
const selectedTown = ref<string | null>(null)
const textareaMessage = ref<string>("")

const toast = () =>
    store?.add(
        newToast("Hello World!", "You are using toast store.", "success")
    )
</script>
