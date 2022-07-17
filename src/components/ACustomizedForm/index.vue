<!--
 * @Author: Armito 1656318310@qq.com
 * @Date: 2022-07-16 11:20:32
 * @LastEditors: Armito 1656318310@qq.com
 * @LastEditTime: 2022-07-17 11:10:59
 * @FilePath: \iAccount\src\components\ACustomizedForm\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script lang="ts" setup>
import { reactive, watch } from 'vue'
import { ElForm, ElFormItem, ElInput } from 'element-plus'
import { FormProps } from 'element-plus/es/components/form/src/form'
import { CustomizedField, CustomizedFieldType } from './types'

// props
interface ACustomizedFormProps {
    customizedFields: CustomizedField[]
    customizedFormProps?: Partial<FormProps>
}
const formProps = defineProps<ACustomizedFormProps>()

// emits
interface ACustomizedFormEmits {
    (event: 'onFormModelChange', model: Record<string, any>): void
}
const formEmits = defineEmits<ACustomizedFormEmits>()

// model
const initialModel = formProps.customizedFields.reduce(
    (pre, cur) => ({
        ...pre,
        [cur.key]: cur.value,
    }),
    {},
)
const model = reactive<Record<string, any>>(initialModel)
watch(model, () => {
    formEmits('onFormModelChange', model)
})
defineExpose({
    model,
})
</script>

<template>
    <el-form v-bind="formProps.customizedFormProps" :model="model">
        <template v-for="field in formProps.customizedFields" :key="field.id">
            <el-form-item
                v-if="field.type === CustomizedFieldType.Text"
                v-bind="{
                    ...field.formItemProps,
                    label: field.label,
                    prop: field.key,
                }"
            >
                <el-input
                    v-model="model[field.key]"
                    v-bind="field.dataItemProps"
                />
            </el-form-item>
        </template>
    </el-form>
</template>

<style lang="scss" scoped></style>
