import { ref, reactive, onMounted } from 'vue'
import { DataTableProps } from 'naive-ui'

interface UseASearchTableProps {
    /** 外部loading */
    loading?: boolean
    /** 接管pagination */
    pagination?: Pickout<DataTableProps, 'pagination'>
    /** 数据请求 */
    request: (
        params: { page: number; pageSize: number } & {
            [key: string]: unknown
        },
    ) => Promise<{ data: any[]; total: number }>
    /** 接管columns */
    columns: { dataIndex: string; value?: any }[]
}

const useLoading = () => {
    const loading = ref(false)

    return {
        loading,
    }
}

const usePagination = (props: UseASearchTableProps) => {
    const pagination = reactive({
        ...(props.pagination ? props.pagination : {}),
        page: props.pagination ? props.pagination.page || 1 : 1,
        pageCount: props.pagination ? props.pagination.pageCount || 1 : 1,
        pageSize: props.pagination ? props.pagination.pageSize || 10 : 10,
    })

    return {
        pagination,
    }
}

const useSearch = (props: UseASearchTableProps) => {
    const formRef = ref()
    const initialModel = props.columns.reduce(
        (pre, cur) => ({
            ...pre,
            [cur.dataIndex]: cur.value,
        }),
        {},
    )
    const model = reactive<{ [key: string]: unknown }>(initialModel)

    const clearModel = () => {
        for (const key in model) {
            model[key] = undefined
        }
    }

    return {
        formRef,
        model,
        clearModel,
    }
}

const useRequest = (props: UseASearchTableProps) => {
    const data = ref<any[]>([])
    const { loading } = useLoading()
    const { formRef, model, clearModel } = useSearch(props)
    const { pagination } = usePagination(props)

    const run = async () => {
        loading.value = true
        const result = await props.request({ ...model, ...pagination })
        loading.value = false
        data.value = result.data
        pagination.itemCount = result.total
        pagination.pageCount = Math.ceil(result.total / pagination.pageSize)
    }

    onMounted(() => {
        run()
    })

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

export const useASearchTable = (props: UseASearchTableProps) => {
    const {
        data,
        loading,
        formRef,
        model,
        pagination,
        onReset,
        onSearch,
        onUpdatePage,
        onUpdatePageSize,
    } = useRequest(props)

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
