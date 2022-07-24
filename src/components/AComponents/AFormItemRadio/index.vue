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
            <slot v-bind="props.formItemProps" name="formItemLabel">
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
                    <slot v-bind="option" name="dataItemLabel">
                        {{ option.label }}
                    </slot>
                </template>
            </ARadio>
        </template>

        <template #feedback>
            <slot v-bind="props.formItemProps" name="feedback">
                {{ props.formItemProps?.feedback }}
            </slot>
        </template>
    </NFormItem>
</template>

<style lang="scss" scoped></style>
