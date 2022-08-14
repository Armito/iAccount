<script lang="ts" setup>
import { ref } from 'vue'
import { NButton, NSpace } from 'naive-ui'
import { GameControllerOutline } from '@vicons/ionicons5'
import CustomizedForm from '@/components/AComponents/ACustomizedForm/index.vue'
import { ACustomizedFormProps } from '@/components/AComponents/ACustomizedForm/types'
import { v4 as uuid } from 'uuid'
import moment from 'moment'

const formRef = ref()

const fields = ref<Pickout<ACustomizedFormProps, 'fields'>>([
    {
        id: uuid(),
        type: 'text',
        value: 'Atmito',
        required: true,
        label: 'NICKNAME',
        path: 'name',
    },
    {
        id: uuid(),
        type: 'radio',
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
        value: moment().valueOf(),
        path: 'dateTime',
        required: true,
        label: 'DATETIME',
        dataItemProps: {
            clearable: true,
        },
    },
    {
        id: uuid(),
        type: 'datetimerange',
        path: 'endTime',
        required: true,
        label: 'ENDTIME',
        dataItemProps: {
            clearable: true,
        },
    },
])
</script>

<template>
    <CustomizedForm
        ref="formRef"
        label-placement="left"
        label-align="right"
        label-width="100px"
        :fields="fields"
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
