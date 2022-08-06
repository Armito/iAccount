<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { DataTableColumns } from 'naive-ui'
import SearchTable from '@/components/AComponents/ASearchTable/index.vue'
import { sleep } from '@/utils/tools'

const columns: DataTableColumns<any> = [
    {
        title: 'column1',
        key: 'column1',
        sorter: true,
        sortOrder: false,
    },
    {
        title: 'column2',
        key: 'column2',
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
    },
    {
        title: 'Column3',
        key: 'column3',
    },
]

const data = Array(978).map((_, index) => {
    return {
        column1: index,
        column2: (index % 2) + 1,
        column3: 'a' + index,
    }
})

// const handleSorterChange = () => {}
// const handleFiltersChange = () => {}
// const handlePageChange = () => {}

const pagination = reactive({
    page: 1,
    pageCount: 1,
    pageSize: 10,
    prefix({ itemCount }: { itemCount: number | undefined }) {
        return `Total is ${itemCount}.`
    },
})

const request = () => {
    sleep(2000)
    return Promise.resolve({
        data: data.splice(0, 10),
        total: data.length,
    })
}

const dataRef = ref([])

// @update:sorter="handleSorterChange"
//             @update:filters="handleFiltersChange"
//             @update:page="handlePageChange"
</script>

<template>
    <Suspense>
        <SearchTable
            ref="table"
            remote
            :columns="columns"
            :pagination="pagination"
            :request="request"
        />
        <template #fallback
            >loadingloadingloadingloadingloadingloadingloadingloading</template
        >
    </Suspense>
</template>

<style lang="less" scoped></style>
