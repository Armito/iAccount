<script lang="ts">
export default {
    name: 'ATable',
    inheritAttrs: false,
}
</script>

<script lang="ts" setup>
import { useAttrs, ref, watch, reactive, onBeforeMount } from 'vue'
import { TableV2Props, PaginationProps } from 'element-plus'

const attrs = useAttrs()

interface ATableProps extends Partial<Omit<TableV2Props, 'data'>> {
    /** 数据来源 */
    request: (params?: {
        currentPage?: number
        pageSize?: number
        [key: string]: any
    }) => Promise<{ data: any[]; total: number }>
    /** 是否初次执行request方法 */
    manual?: boolean
    /** 分页器配置 */
    paginationProps?: Partial<Omit<PaginationProps, 'total'>>
}
const props = defineProps<ATableProps>()

const loading = ref<boolean>(false)
const data = ref<any[]>([])
const total = ref<number>(0)
const sendRequest = async ({
    currentPage,
    pageSize,
}: {
    currentPage: number
    pageSize: number
}) => {
    try {
        loading.value = true
        const { data: _data, total: _total } = await props.request({
            currentPage,
            pageSize,
        })
        data.value = _data
        total.value = _total
    } catch (e) {
    } finally {
        loading.value = false
    }
}
onBeforeMount(() => {
    !props.manual &&
        sendRequest({ currentPage: 1, pageSize: 20, ...props.paginationProps })
})

const pagination = reactive<
    WritableAndPartial<Omit<PaginationProps, 'currentPage' | 'pageSize'>> & {
        currentPage: number
        pageSize: number
    }
>({
    layout: 'total, prev, pager, next, sizes',
    currentPage: 1,
    pageSize: 20,
    ...props.paginationProps,
})
const onSizeChange = () => {
    pagination.currentPage = 1
}
watch(pagination, () => {
    sendRequest(pagination)
})
</script>

<template>
    <el-auto-resizer v-loading="loading">
        <template #default="{ height, width }">
            <el-table-v2 v-bind="{ ...attrs, ...props, width, height, data }" />
        </template>
    </el-auto-resizer>
    <el-pagination
        v-bind="pagination"
        v-model:currentPage="pagination.currentPage"
        v-model:page-size="pagination.pageSize"
        :total="total"
        @size-change="onSizeChange"
    />
</template>

<style lang="less" scoped>
.el-pagination {
    margin-top: 20px;
    justify-content: flex-end;
}
</style>
