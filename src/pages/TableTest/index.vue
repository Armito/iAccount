<script lang="ts" setup>
import { ref } from 'vue'
import SearchTable from '@/components/AComponents/SearchTable/index.vue'
import { SearchTableProps } from '@/components/AComponents/SearchTable/types'

const columns: Pickout<SearchTableProps, 'columns'> = [
    {
        title: 'name',
        key: 'name',
        dataIndex: 'name',
        value: 'armito',
        sorter: true,
        sortOrder: false,
        formItemProps: {
            type: 'text',
            label: 'name',
        },
    },
    {
        title: 'age',
        key: 'age',
        dataIndex: 'age',
        filter: true,
        filterOptionValues: [],
        filterOptions: [
            {
                label: 'Value1',
                value: 1,
            },
            {
                label: 'Value2',
                value: 2,
            },
        ],
        formItemProps: {
            type: 'password',
            label: 'age',
        },
    },
    {
        title: 'addr',
        dataIndex: 'addr',
        key: 'addr',
        formItemProps: {
            type: 'text',
            label: 'addr',
        },
    },
]

const data = Array(978)
    .fill('a')
    .map((_, index) => {
        return {
            name: index,
            age: (index % 2) + 1,
            addr: 'a' + index,
        }
    })

const pagination = ref<Pickout<SearchTableProps, 'pagination'>>({
    page: 1,
    pageSize: 10,
    pageSizes: [10, 20, 50, 100],
    showSizePicker: true,
    prefix: ({ itemCount }) => `Total is ${itemCount}.`,
})

const request: Pickout<SearchTableProps, 'request'> = (params) => {
    console.log(params)
    const { page } = params

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                data: data.slice(10 * page, 10 * (page + 1)),
                total: data.length,
            })
        }, 1000)
    })
}

const table = ref()
</script>

<template>
    <SearchTable
        ref="table"
        :columns="columns"
        :form-props="{
            inline: true,
            labelPlacement: 'left',
        }"
        :pagination="pagination"
        :request="request"
        :manual="true"
    />
</template>

<style lang="less" scoped></style>
