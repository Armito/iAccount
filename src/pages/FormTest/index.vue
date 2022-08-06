<script lang="ts" setup>
import { ref } from 'vue'
import { NButton, NSpace } from 'naive-ui'
import { GameControllerOutline } from '@vicons/ionicons5'
import CustomizedForm from '@/components/CustomizedForm/index.vue'
import { CustomizedField } from '@/components/CustomizedForm/types'
import { v4 as uuid } from 'uuid'
import moment from 'moment'

const formRef = ref()

const fields = ref<CustomizedField[]>([
    {
        id: uuid(),
        type: 'text',
        key: 'name',
        value: 'Atmito',
        required: true,
        label: 'NICKNAME',
        path: 'name',
        dataItemProps: {
            clearable: true,
        },
    },
    {
        id: uuid(),
        type: 'radio',
        key: 'gender',
        value: 2,
        label: 'GENDER',
        path: 'gender',
        required: true,
        dataItemProps: {
            size: 'large',
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
    {
        id: uuid(),
        type: 'date',
        key: 'dateTime',
        value: moment().valueOf(),
        path: 'dateTime',
        required: true,
        label: 'DATETIME',
        dataItemProps: {
            type: 'date',
            clearable: true,
        },
    },
    {
        id: uuid(),
        key: 'endTime',
        type: 'datetimerange',
        path: 'endTime',
        required: true,
        label: 'ENDTIME',
        dataItemProps: {
            clearable: true,
            type: 'datetimerange',
        },
    },
])

const onFormModelChange = (model: Record<string, any>) => {
    console.log(model)
    // console.log(formRef.value.model)
}
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
    />

    <n-space>
        <n-button>Default</n-button>
        <n-button type="tertiary"> Tertiary </n-button>
        <n-button type="primary"> Primary </n-button>
        <n-button type="info"> Info </n-button>
        <n-button type="success"> Success </n-button>
        <n-button type="warning"> Warning </n-button>
        <n-button type="error"> Error </n-button>
    </n-space>
</template>

<style lang="less" scoped></style>
