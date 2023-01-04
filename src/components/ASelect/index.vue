<template>
    <el-select v-model="value">
        <el-option v-for="o in options" :key="o.value" v-bind="o" />
    </el-select>
</template>

<script lang="ts" setup>
import { toRef } from 'vue'
import { useOptions } from './hooks'
import { useModelValue } from '@/hooks/useModelValue'

const props = withDefaults(
    defineProps<{
        options: {
            value?: string | number | boolean | object
            label?: string | number
            disabled?: boolean
            [key: string]: unknown
        }[]
        optionMap?: {
            value?: string
            label?: string
            disabled?: string
        }
        modelValue?: unknown
    }>(),
    {
        options: () => [],
        optionMap: () => ({}),
    },
)

const emits = defineEmits<{
    (e: 'update:modelValue', payload?: unknown): void
}>()

const { options } = useOptions({
    options: toRef(props, 'options'),
    optionMap: toRef(props, 'optionMap'),
})

const { value } = useModelValue({
    emits,
    modelValue: toRef(props, 'modelValue'),
})
</script>
