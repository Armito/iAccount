<script lang="ts">
import { reactive } from 'vue'
import { SearchTableProps } from '../index.vue'

export const usePagination = (
    initialPagination: Pickout<SearchTableProps, 'pagination'>,
) => {
    return {
        pagination: reactive({
            ...(initialPagination ? initialPagination : {}),
            page: initialPagination ? initialPagination.page || 1 : 1,
            pageCount: initialPagination ? initialPagination.pageCount || 1 : 1,
            pageSize: initialPagination ? initialPagination.pageSize || 10 : 10,
        }),
    }
}
</script>
