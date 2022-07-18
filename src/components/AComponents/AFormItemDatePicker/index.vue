<!--
 * @Author: Armito 1656318310@qq.com
 * @Date: 2022-07-18 20:08:21
 * @LastEditors: Armito 1656318310@qq.com
 * @LastEditTime: 2022-07-18 22:41:34
 * @FilePath: \iAccount\src\components\AComponents\AFormItemRadio\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
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

// props
interface AFormItemRadioProps {
    value: any
    formItemProps?: FormItemProps
    dataItemProps?: DatePickerProps
}
const props = defineProps<AFormItemRadioProps>()

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
    <NFormItem v-bind="{ ...attrs, ...props.formItemProps }">
        <template #label>
            <slot name="formItemLabel" v-bind="props.formItemProps">
                {{ props.formItemProps?.label }}
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
            <slot name="feedback" v-bind="props.formItemProps">
                {{ props.formItemProps?.feedback }}
            </slot>
        </template>
    </NFormItem>
</template>

<style lang="scss" scoped></style>
