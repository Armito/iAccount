import { ref } from 'vue'
import { DataTableProps } from 'naive-ui'
import { SearchTableProps } from '../types'
import { useSearch } from './useSearch'
import { usePagination } from './usePagination'
import { useRequest } from './useRequest'

type UseSearchTableProps = Pick<
    SearchTableProps,
    'loading' | 'columns' | 'pagination' | 'request' | 'manual'
>

export const useSearchTable = (props: UseSearchTableProps) => {
    const { formRef, model, clearModel } = useSearch(props.columns)
    const { pagination } = usePagination(props.pagination)
    const { loading, request } = useRequest(props.request)

    const data = ref<any[]>([])

    const run = async () => {
        try {
            const { data: _data, total } = await request({
                ...model,
                page: pagination.page,
                pageSize: pagination.pageSize,
            })
            data.value = _data
            pagination.itemCount = total
            pagination.pageCount = Math.ceil(total / pagination.pageSize)
        } catch (e) {
            console.error()
        }
    }

    !props.manual && run()

    const onReset = () => {
        clearModel()
        pagination.page = 1
        run()
    }

    const onSearch = () => {
        run()
    }

    const onUpdatePage: Pickout<DataTableProps, 'onPageChange'> = (page) => {
        pagination.page = page
        run()
    }

    const onUpdatePageSize: Pickout<DataTableProps, 'onUpdatePageSize'> = (
        pageSize,
    ) => {
        pagination.page = 1
        pagination.pageSize = pageSize
        run()
    }

    return {
        data,
        loading,
        formRef,
        model,
        pagination,
        onReset,
        onSearch,
        onUpdatePage,
        onUpdatePageSize,
    }
}
