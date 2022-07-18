<script lang="ts">
export default {
    name: 'AFormItemRadio',
    inheritAttrs: false,
}
</script>

<script lang="ts" setup>
import { useAttrs } from 'vue'
import { NFormItem, FormItemProps } from 'naive-ui'
import ARadio, { ARadioProps } from '../ARadio/index.vue'

// props
interface AFormItemRadioProps {
    value: any
    formItemProps?: FormItemProps
    dataItemProps?: ARadioProps
}
const props = defineProps<AFormItemRadioProps>()

// attr
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
    <NFormItem v-bind="{ ...props.formItemProps, ...attrs }">
        <template #label>
            <slot name="formItemLabel" v-bind="props.formItemProps">
                {{ props.formItemProps?.label }}
            </slot>
        </template>

        <template #default>
            <ARadio
                v-bind="props.dataItemProps"
                :value="props.value"
                @update:value="onUpdateValue"
            >
                <template #label="option">
                    <slot name="dataItemLabel" v-bind="option">
                        {{ option.label }}
                    </slot>
                </template>
            </ARadio>
        </template>

        <template #feedback>
            <slot name="feedback" v-bind="props.formItemProps">
                {{ props.formItemProps?.feedback }}
            </slot>
        </template>
    </NFormItem>
</template>

<style lang="scss" scoped></style>
