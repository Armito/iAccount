<!--
 * @Author: Armito 1656318310@qq.com
 * @Date: 2022-07-16 11:32:37
 * @LastEditors: Armito 1656318310@qq.com
 * @LastEditTime: 2022-07-17 19:23:51
 * @FilePath: \iAccount\src\pages\FormTest\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script lang="ts" setup>
import { ref, watch } from 'vue'
import {
    NInput,
    NRadioGroup,
    NRadio,
    NSpace,
    NDatePicker,
    NIcon,
} from 'naive-ui'
import { GameControllerOutline } from '@vicons/ionicons5'
import CustomizedForm from '@/components/CustomizedForm/index.vue'
import { CustomizedField } from '@/components/CustomizedForm/types'
import { ARadio } from '@/components/AComponents'
import { v4 as uuid } from 'uuid'

const formRef = ref()

const fields = ref<CustomizedField[]>([
    // {
    //     id: uuid(),
    //     key: 'name',
    //     label: 'NICKNAME',
    //     type: 'Text',
    //     value: 'Atmito',
    //     formItemProps: {
    //         required: true,
    //     },
    //     dataItemProps: {
    //         clearable: true,
    //     },
    // },
    {
        id: uuid(),
        type: 'Radio',
        key: 'gender',
        // value: 1,
        formItemProps: {
            label: 'GENDER',
            path: 'gender',
        },
        dataItemProps: {
            size: 'large',
            defaultValue: 2,
            options: [
                {
                    value: 1,
                    label: 'Male',
                },
                {
                    value: 2,
                    label: 'Female',
                    disabled: true,
                },
                {
                    value: 3,
                    label: 'Unknown',
                },
            ],
        },
    },
    // {
    //     id: uuid(),
    //     key: 'dateTime',
    //     label: 'DATETIME',
    //     type: 'Date',
    //     // value: 'Atmito',
    //     // formItemProps: {
    //     //     required: true,
    //     // },
    //     // dataItemProps: {
    //     //     clearable: true,
    //     // },
    // },
    // {
    //     id: uuid(),
    //     key: 'endTime',
    //     label: 'ENDTIME',
    //     type: 'Datetime',
    //     // value: 'Atmito',
    //     // formItemProps: {
    //     //     required: true,
    //     // },
    //     // dataItemProps: {
    //     //     clearable: true,
    //     // },
    // },
])

const onFormModelChange = (model: Record<string, any>) => {
    console.log(model)
    console.log(formRef.value.model)
}

const gender = ref(1)
watch(gender, () => {
    console.log(gender.value)
})
</script>

<template>
    <CustomizedForm
        ref="formRef"
        :form-props="{
            labelPlacement: 'left',
            labelAlign: 'right',
            labelWidth: '100px',
        }"
        :fields="fields"
        @change="onFormModelChange"
    >
        <template #formItemLabel="{ label }">
            <div
                :style="{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                }"
            >
                <NIcon :component="GameControllerOutline" size="14" />
                &nbsp;
                <label>{{ label }}</label>
            </div>
        </template>
    </CustomizedForm>
</template>

<style lang="scss" scoped></style>
