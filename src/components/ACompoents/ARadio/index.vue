<script lang="ts" setup>
import { useAttrs, ref } from 'vue'
import { ElRadioGroup, RadioGroupProps, ElRadio } from 'element-plus'
import { ARadioItemProps } from './types'

const attrs = useAttrs()

interface ARadioProps extends Partial<Omit<RadioGroupProps, 'modelValue'>> {
    modelValue: Pickout<RadioGroupProps, 'modelValue'>
    options: ARadioItemProps[]
}
const props = defineProps<ARadioProps>()

interface ARadioEmits {
    (
        event: 'update:model-value',
        value: Pickout<ARadioProps, 'modelValue'>,
    ): void
}
const emits = defineEmits<ARadioEmits>()

const modelValue = ref(props.modelValue)
const onUpdateModalValue = (value: typeof props.modelValue) => {
    modelValue.value = value
    emits('update:model-value', modelValue.value)
}
</script>

<template>
    <el-radio-group
        v-bind="attrs"
        :model-value="modelValue"
        @update:model-value="onUpdateModalValue"
    >
        <el-radio
            v-for="option in props.options"
            v-bind="option"
            :key="option.label + ''"
        >
            {{ option.text }}
        </el-radio>
    </el-radio-group>
</template>

<style lang="scss" scoped></style>
