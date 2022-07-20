<script lang="ts">
export default {
    name: 'AFormDataItem',
    inheritAttrs: false,
}
</script>

<script lang="ts" setup>
import { useAttrs } from 'vue'
import { NFormItem, FormItemProps } from 'naive-ui'
import { NInput } from 'naive-ui'
import ARadio from '../ARadio/index.vue'
import { NDatePicker } from 'naive-ui'
import { DatePickerType } from 'naive-ui/es/date-picker/src/config'

// props
export type ItemType =
    | 'custom'
    | 'text'
    | 'textarea'
    | 'password'
    | 'radio'
    | DatePickerType
export interface AFormDataItemProps extends FormItemProps {
    type: ItemType
    value?: any
    dataItemProps?: Record<string, unknown>
}
const props = defineProps<AFormDataItemProps>()

// attrs
const attrs = useAttrs()

// emits
interface AFormItemRadioEmits {
    (event: 'update:value', payload: any): void
}
const emits = defineEmits<AFormItemRadioEmits>()

// value
const onUpdateValue = (value: any) => {
    emits('update:value', value)
}
</script>

<template>
    <NFormItem v-bind="attrs">
        <template #label>
            <slot name="formItemLabel" v-bind="attrs">
                {{ attrs?.label }}
            </slot>
        </template>

        <template #default>
            <slot
                v-if="props.type === 'custom'"
                name="default"
                v-bind="props.dataItemProps"
            ></slot>

            <NInput
                v-if="
                    props.type === 'text' ||
                    props.type === 'textarea' ||
                    props.type === 'password'
                "
                v-bind="props.dataItemProps"
                :type="props.type"
                :value="props.value"
                @update:value="onUpdateValue"
            />

            <ARadio
                v-if="props.type === 'radio'"
                v-bind="props.dataItemProps"
                :value="props.value"
                @update:value="onUpdateValue"
            />

            <NDatePicker
                v-if="
                    props.type === 'date' ||
                    props.type === 'daterange' ||
                    props.type === 'datetime' ||
                    props.type === 'datetimerange' ||
                    props.type === 'month' ||
                    props.type === 'year' ||
                    props.type === 'quarter' ||
                    props.type === 'monthrange' ||
                    props.type === 'yearrange' ||
                    props.type === 'quarterrange'
                "
                v-bind="props.dataItemProps"
                :type="props.type"
                :value="props.value"
                @update:value="onUpdateValue"
            />
        </template>

        <template #feedback>
            <slot name="feedback" v-bind="attrs">
                {{ attrs?.feedback }}
            </slot>
        </template>
    </NFormItem>
</template>

<style lang="scss" scoped></style>
