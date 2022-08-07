<script lang="ts">
export default {
    name: 'CustomizedForm',
    inheritAttrs: false,
}
</script>

<script lang="ts" setup>
import { reactive, watch, useAttrs } from 'vue'
import { NForm, FormProps, NInputNumber, NFormItem, NButton } from 'naive-ui'
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
const model = reactive<Record<string, any>>({ ...initialModel, age: 18 })
watch(model, () => {
    emits('change', model)
})

const onReset = () => {
    for (const key in model) {
        model[key] = undefined
    }
}

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
        />

        <AFormDataItem
            type="custom"
            path="endTime"
            :required="true"
            label="ENDTIME"
        >
            <NInputNumber v-model:value="model.age" />
        </AFormDataItem>

        <n-form-item>
            <n-button attr-type="reset" @click="onReset"> 重置 </n-button>
        </n-form-item>
    </n-form>
</template>

<style lang="less" scoped></style>
