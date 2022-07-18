<!--
 * @Author: Armito 1656318310@qq.com
 * @Date: 2022-07-17 11:49:09
 * @LastEditors: Armito 1656318310@qq.com
 * @LastEditTime: 2022-07-17 18:03:30
 * @FilePath: \iAccount\src\components\CustomizedForm\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script lang="ts" setup>
import { reactive, watch, useSlots } from 'vue'
import { NForm, NFormItem } from 'naive-ui'
import {
    NInput,
    NRadioGroup,
    NRadio,
    NSpace,
    NDatePicker,
    NIcon,
} from 'naive-ui'
import { FormProps } from 'naive-ui'
import { DatePickerType } from 'naive-ui/es/date-picker/src/config'
import { AFormItemRadio } from '@/components/AComponents'
import { CustomizedField, CustomizedFieldType } from './types'

// props
interface CustomizedFormProps {
    formProps?: FormProps
    fields: CustomizedField[]
}
const props = defineProps<CustomizedFormProps>()

// emits
interface CustomizedFormEmits {
    (event: 'change', model: Record<string, any>): void
}
const emits = defineEmits<CustomizedFormEmits>()

// model
const initialModel = props.fields.reduce(
    (pre, cur) => ({
        ...pre,
        [cur.key]: cur.value,
    }),
    {},
)
const model = reactive<Record<string, any>>(initialModel)
watch(model, () => {
    emits('change', model)
})

// slots
const slots = useSlots()

// tools
const typeTransform = (type: CustomizedFieldType) => {
    return type.toLowerCase() as DatePickerType
}

// expose
defineExpose({ model })
</script>

<template>
    <n-form ref="formRef" :model="model" v-bind="props.formProps">
        <template v-for="field in props.fields" :key="field.id">
            <AFormItemRadio
                v-if="field.type === 'Radio'"
                v-model:value="model[field.key]"
                v-bind="field"
            >
                <template #formItemLabel="formItemProps">
                    <slot name="formItemLabel" v-bind="formItemProps"></slot>
                    <slot
                        v-if="!slots.formItemLabel"
                        name="formItemRadioLabel"
                        v-bind="formItemProps"
                    >
                        {{ formItemProps.label }}
                    </slot>
                </template>
            </AFormItemRadio>
        </template>
    </n-form>
</template>

<style lang="scss" scoped></style>
