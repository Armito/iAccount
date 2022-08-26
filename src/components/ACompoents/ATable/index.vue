<script lang="ts">
export default {
    name: 'ATable',
    inheritAttrs: false,
}
</script>

<script lang="ts" setup>
import { useAttrs, ref, watch } from 'vue'
import { TableV2Props, PaginationProps } from 'element-plus'

const attrs = useAttrs()

interface ATableProps extends Partial<Omit<TableV2Props, 'data'>> {
    loading?: boolean
    request: (params?: {
        currentPage?: number
        pageSize?: number
        [key: string]: any
    }) => Promise<{ data: any[]; total: number }>
    manual?: boolean
    paginationProps?: Partial<Omit<PaginationProps, 'total' | 'pageSize'>>
}
const props = defineProps<ATableProps>()

const loading = ref<boolean>(false)
const data = ref<any[]>([])
const total = ref<number>(0)
const pagination = ref<Partial<Omit<PaginationProps, 'total'>>>({
    layout: 'prev, pager, next, total',
    currentPage: 1,
    pageSize: 20,
    ...props.paginationProps,
})

const sendRequest = async () => {
    try {
        loading.value = true
        const { data: _data, total: _total } = await props.request({
            currentPage: pagination.value?.currentPage,
            pageSize: pagination.value?.pageSize,
        })
        data.value = _data
        total.value = _total
    } catch (e) {
    } finally {
        loading.value = false
    }
}

!props.manual && sendRequest()

const onSizeChange = (size: number) => {
    pagination.value = {
        ...pagination.value,
        pageSize: size,
    }
}
const onPageChange = (page: number) => {
    pagination.value = {
        ...pagination.value,
        currentPage: page,
    }
}

watch(pagination, () => {
    sendRequest()
})
</script>

<template>
    <el-auto-resizer v-loading="!!props.loading || loading">
        <template #default="{ height, width }">
            <el-table-v2 v-bind="{ ...attrs, ...props, width, height, data }" />
        </template>
    </el-auto-resizer>
    <el-pagination v-bind="pagination" :total="total" />
</template>

<style lang="less" scoped>
.el-pagination {
    margin-top: 20px;
    justify-content: flex-end;
}
</style>
