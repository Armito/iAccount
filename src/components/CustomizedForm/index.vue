<!--
 * @Author: Armito 1656318310@qq.com
 * @Date: 2022-07-17 11:49:09
 * @LastEditors: Armito 1656318310@qq.com
 * @LastEditTime: 2022-07-18 22:28:10
 * @FilePath: \iAccount\src\components\CustomizedForm\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script lang="ts" setup>
import { reactive, watch, useSlots } from 'vue'
import { NForm, FormProps, NIcon } from 'naive-ui'
import { AFormItemDatePicker, AFormItemRadio } from '@/components/AComponents'
import { DateIcon, ToIcon } from 'naive-ui/es/_internal/icons'
import { CustomizedField } from './types'

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

// expose
defineExpose({ model })
</script>

<template>
    <n-form v-bind="props.formProps" ref="formRef" :model="model">
        <template v-for="field in props.fields" :key="field.id">
            <AFormItemDatePicker
                v-if="field.type === 'Date' || field.type === 'Datetime'"
                v-bind="field"
                v-model:value="model[field.key]"
            >
                <template #separator>
                    <slot name="separator">
                        <NIcon :component="ToIcon" size="16" />
                    </slot>
                </template>

                <template #date-icon>
                    <slot name="date-icon">
                        <NIcon :component="DateIcon" size="16" />
                    </slot>
                </template>
            </AFormItemDatePicker>

            <AFormItemRadio
                v-if="field.type === 'Radio'"
                v-bind="field"
                v-model:value="model[field.key]"
            >
                <template #formItemLabel="formItemProps">
                    <slot v-bind="formItemProps" name="formItemLabel"></slot>
                    <slot
                        v-if="!slots.formItemLabel"
                        v-bind="formItemProps"
                        name="formItemRadioLabel"
                    >
                        {{ formItemProps.label }}
                    </slot>
                </template>

                <template #dataItemLabel="option">
                    <slot v-bind="option" name="dataItemLabel">
                        {{ option.label }}
                    </slot>
                </template>

                <template #feedback="formItemProps">
                    <slot v-bind="formItemProps" name="dataItemLabel">
                        {{ formItemProps.feedback }}
                    </slot>
                </template>
            </AFormItemRadio>
        </template>
    </n-form>
</template>

<style lang="scss" scoped></style>
