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

// props, attrs
export interface AFormItemRadioProps extends FormItemProps {
    value: any
    dataItemProps?: ARadioProps
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
            <slot v-bind="attrs" name="formItemFeedback">
                {{ attrs?.feedback }}
            </slot>
        </template>
    </NFormItem>
</template>

<style lang="scss" scoped></style>
