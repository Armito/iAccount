<script lang="ts">
export default {
    name: 'AFormItem',
    inheritAttrs: false,
}
</script>

<script lang="ts" setup>
import { useAttrs, ref } from 'vue'
import { ElFormItem, FormItemProps } from 'element-plus'
import { ElInput, InputProps } from 'element-plus'
import { ARadio } from '../index'
import { ARadioProps } from '../types'
import {
    AFormItemProps_type,
    AFormItemProps_modelValue,
    AFormItemProps_fieldProps,
} from './types'

const attrs = useAttrs()

interface AFormItemProps extends Partial<FormItemProps> {
    type: AFormItemProps_type
    modelValue?: AFormItemProps_modelValue
    fieldProps: AFormItemProps_fieldProps
}
const props = defineProps<AFormItemProps>()

interface AFormItemEmits {
    (
        event: 'update:model-value',
        value: Pickout<AFormItemProps, 'modelValue'>,
    ): void
}
const emits = defineEmits<AFormItemEmits>()

const modelValue = ref(props.modelValue)
const onUpdateModalValue = (value: typeof props.modelValue) => {
    modelValue.value = value
    emits('update:model-value', value)
}
</script>

<template>
    <el-form-item v-bind="attrs">
        <template #label>
            <slot name="label" v-bind="{ ...attrs, ...props }" />
        </template>

        <el-input
            v-if="
                props.type === 'text' ||
                props.type === 'textarea' ||
                props.type === 'password'
            "
            v-bind="(props.fieldProps as InputProps)"
            :type="props.type"
            :model-value="modelValue"
            @update:model-value="onUpdateModalValue"
        />

        <a-radio
            v-if="props.type === 'radio'"
            v-bind="(props.fieldProps as ARadioProps)"
            :model-value="modelValue"
            @update:model-value="onUpdateModalValue"
        />
    </el-form-item>
</template>

<style lang="scss" scoped></style>
