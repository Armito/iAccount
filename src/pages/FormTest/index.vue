<!--
 * @Author: Armito 1656318310@qq.com
 * @Date: 2022-07-16 11:32:37
 * @LastEditors: Armito 1656318310@qq.com
 * @LastEditTime: 2022-07-17 11:15:55
 * @FilePath: \iAccount\src\pages\FormTest\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script lang="ts" setup>
import { ref } from 'vue'
import ACustomizedForm from '@/components/ACustomizedForm/index.vue'
import {
    CustomizedField,
    CustomizedFieldType,
} from '@/components/ACustomizedForm/types'
import { v4 as uuid } from 'uuid'

const formRef = ref()

const customizedFields = ref<CustomizedField[]>([
    {
        id: uuid(),
        key: 'name',
        label: 'NICKNAME',
        type: CustomizedFieldType.Text,
        value: 'Atmito',
        formItemProps: {
            required: true,
        },
        dataItemProps: {
            clearable: true,
        },
    },
    {
        id: uuid(),
        key: 'addr',
        label: 'ADDR',
        type: CustomizedFieldType.Text,
        value: '武汉市洪山区',
    },
])

const onFormModelChange = (model: Record<string, unknown>) => {
    console.log(model)
    // console.log(formRef.value.model)
}
</script>

<template>
    <ACustomizedForm
        ref="formRef"
        :customized-form-props="{ labelPosition: 'top' }"
        :customized-fields="customizedFields"
        @onFormModelChange="onFormModelChange"
    />
</template>

<style lang="scss" scoped></style>
