import { TableV2Props, PaginationProps } from 'element-plus'

export interface ATableProps extends Partial<TableV2Props> {
    /** 数据来源 */
    request: (params?: {
        currentPage?: number
        pageSize?: number
        [key: string]: any
    }) => Promise<{ data: any[]; total: number }>
    /** 是否初次执行request方法 */
    manual?: boolean
    /** 分页器配置 */
    paginationProps?: Partial<
        Omit<PaginationProps, 'total' | 'pageSize' | 'currentPage'>
    >
}
