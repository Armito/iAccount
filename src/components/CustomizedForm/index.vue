<script lang="ts">
export default {
    name: 'CustomizedForm',
    inheritAttrs: false,
}
</script>

<script lang="ts" setup>
import { reactive, watch, useAttrs } from 'vue'
import { NForm, FormProps } from 'naive-ui'
import { AFormDataItem } from '@/components/AComponents'
import { CustomizedField } from './types'

// props
interface CustomizedFormProps {
    formProps?: FormProps
    fields: CustomizedField[]
}
const props = defineProps<CustomizedFormProps>()

// attrs
const attrs = useAttrs()

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

// expose
defineExpose({ model })
</script>

<template>
    <n-form
        v-bind="{ ...attrs, ...props.formProps }"
        ref="formRef"
        :model="model"
    >
        <AFormDataItem
            v-for="field in props.fields"
            v-bind="field"
            :key="field.id"
            v-model:value="model[field.key]"
            :type="field.type"
        />
    </n-form>
</template>

<style lang="scss" scoped></style>
