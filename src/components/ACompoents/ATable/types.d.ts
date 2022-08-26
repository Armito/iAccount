import { TableV2Props } from 'element-plus'

export interface ATableProps extends Partial<TableV2Props> {
    loading?: boolean
    request: () => Promise<{ data: any[]; total: number }>
    manual?: boolean
}
