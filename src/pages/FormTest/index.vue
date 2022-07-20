<script lang="ts" setup>
import { ref } from 'vue'
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
    console.log(formRef.value.model)
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
</template>

<style lang="scss" scoped></style>
