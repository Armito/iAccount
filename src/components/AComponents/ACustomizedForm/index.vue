<script lang="ts">
export default {
    name: 'ACustomizedForm',
    inheritAttrs: false,
}
</script>

<script lang="ts" setup>
import { reactive, useAttrs } from 'vue'
import { NForm, FormProps, NFormItem, NSpace, NButton } from 'naive-ui'
import AFormDataItem from '../AFormDataItem/index.vue'
import { ACustomizedFormProps_field } from './types'

// attrs
const attrs = useAttrs()

// props
interface ACustomizedFormProps extends FormProps {
    fields: ACustomizedFormProps_field[]
}
const props = defineProps<ACustomizedFormProps>()

// emits
interface ACustomizedFormEmits {
    (event: 'change', model: Record<string, any>): void
}
const emits = defineEmits<ACustomizedFormEmits>()

// model
const initialModel: Record<string, any> = props.fields.reduce(
    (pre, cur) => ({
        ...pre,
        [cur.path]: cur.value,
    }),
    {},
)
const model = reactive<Record<string, any>>({ ...initialModel })
const onSave = () => {
    console.log(model)
}
const onReset = () => {
    for (const key in model) {
        model[key] = initialModel[key]
    }
    console.log(model)
}

// expose
defineExpose({ model })
</script>

<template>
    <n-form
        v-bind="attrs"
        ref="formRef"
        :model="model"
        @reset.prevent="onReset"
        @submit.prevent="onSave"
    >
        <AFormDataItem
            v-for="field in props.fields"
            v-bind="field"
            :key="field.id"
            v-model:value="model[field.path]"
        />

        <n-form-item>
            <n-space>
                <n-button attr-type="submit"> 保存 </n-button>
                <n-button attr-type="reset"> 重置 </n-button>
            </n-space>
        </n-form-item>
    </n-form>
</template>

<style lang="less" scoped></style>
