<!--
 * @Author: Armito 1656318310@qq.com
 * @Date: 2022-07-16 11:27:07
 * @LastEditors: Armito 1656318310@qq.com
 * @LastEditTime: 2022-07-17 10:52:27
 * @FilePath: \iAccount\src\components\ACustomizedForm\components\AFormItemInput\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script lang="ts" setup>
import { ElFormItem, ElInput } from 'element-plus'
import { FormItemProps } from 'element-plus/es/components/form/src/form-item'
import { InputProps } from 'element-plus/es/components/input/src/input'

// props
interface AFormItemInputProps {
    modelValue?: string
    formItemProps?: Partial<FormItemProps>
    inputProps?: Partial<InputProps>
}
const aFormItemInputProps = defineProps<AFormItemInputProps>()

// emits
interface AFormItemInputEmits {
    (event: 'change'): void
    (event: 'update:modelValue', value: string): void
}
const aFormItemInputEmits = defineEmits<AFormItemInputEmits>()

// other
const onInput = (value: string) => {
    aFormItemInputEmits('update:modelValue', value)
}
</script>

<template>
    <el-form-item v-bind="aFormItemInputProps.formItemProps">
        <el-input
            v-bind="aFormItemInputProps.inputProps"
            :model-value="aFormItemInputProps.modelValue"
            @input="onInput"
        />
    </el-form-item>
</template>

<style lang="scss" scoped></style>
