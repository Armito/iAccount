<script lang="ts">
import { DataTableProps, DataTableColumn } from 'naive-ui'
import { AFormDataItemProps } from '../AFormDataItem/index.vue'

export type Column<T = { [key: string]: unknown }> = DataTableColumn<T> & {
    dataIndex: string
    search?: boolean
    formItemProps: AFormDataItemProps
    value?: any
}
export type Pagination = Pickout<DataTableProps, 'pagination'>
export type RequestFn = (
    params: { page: number; pageSize: number } & {
        [key: string]: unknown
    },
) => Promise<{ data: any[]; total: number }>
</script>
