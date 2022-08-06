<script lang="ts">
export default {
    name: 'AFormItemDatePicker',
    inheritAttrs: false,
}
</script>

<script lang="ts" setup>
import { useAttrs } from 'vue'
import {
    NFormItem,
    FormItemProps,
    NDatePicker,
    DatePickerProps,
    NIcon,
} from 'naive-ui'
import { DateIcon, ToIcon } from 'naive-ui/es/_internal/icons'

// props, attrs
export interface AFormItemRadioProps extends FormItemProps {
    value: any
    dataItemProps?: DatePickerProps
}
const props = defineProps<AFormItemRadioProps>()
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
            <slot v-bind="attrs" name="formItemLabel">
                {{ attrs?.label }}
            </slot>
        </template>

        <template #default>
            <NDatePicker
                v-bind="props.dataItemProps"
                :value="props.value"
                @update:value="onUpdateValue"
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
            </NDatePicker>
        </template>

        <template #feedback>
            <slot v-bind="attrs" name="formItemFeedback">
                {{ attrs?.feedback }}
            </slot>
        </template>
    </NFormItem>
</template>

<style lang="less" scoped></style>
