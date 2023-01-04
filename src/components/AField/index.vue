<template>
    <component :is="fieldType" v-model="value"></component>
</template>

<script lang="ts" setup name="AField">
import { toRef } from 'vue'
import { useAField } from './hooks'
import { useModelValue } from '@/hooks/useModelValue'
import { FieldType } from './types'

const props = defineProps<{
    fieldType: FieldType
    modelValue?: unknown
}>()

const emits = defineEmits<{
    (e: 'update:modelValue', payload: unknown): void
}>()

const { fieldType } = useAField(toRef(props, 'fieldType'))

const { value } = useModelValue({
    modelValue: toRef(props, 'modelValue'),
    emits,
})
</script>
