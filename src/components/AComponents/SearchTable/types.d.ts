import { FormProps, DataTableColumn, DataTableProps } from 'naive-ui'
import { AFormDataItemProps } from '../AFormDataItem/types'

export type SearchTableProps_formProps = FormProps
export type SearchTableProps_column<T = { [key: string]: unknown }> =
    DataTableColumn<T> & {
        dataIndex: string
        search?: boolean
        formItemProps: AFormDataItemProps
        value?: any
    }
export type SearchTableProps_loading = boolean
export type SearchTableProps_request = (
    params: { page: number; pageSize: number } & {
        [key: string]: unknown
    },
) => Promise<{ data: any[]; total: number }>
export type SearchTableProps_manual = boolean
export type SearchTableProps_pagination = Pickout<DataTableProps, 'pagination'>

export interface SearchTableProps
    extends Omit<DataTableProps, 'loading' | 'data' | 'remote' | 'columns'> {
    /** 搜索表单的form属性 */
    formProps?: SearchTableProps_formProps
    /** 接管columns */
    columns: SearchTableProps_column[]
    /** 外部loading */
    loading?: SearchTableProps_loading
    /** 数据请求 */
    request: SearchTableProps_request
    /** 是否关闭首次请求 */
    manual?: SearchTableProps_manual
    /** 接管pagination */
    pagination?: SearchTableProps_pagination
}
