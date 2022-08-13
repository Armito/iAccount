<script lang="ts">
import { reactive, ref } from 'vue'
import { SearchTableProps } from '../index.vue'

export const useSearch = (columns: Pickout<SearchTableProps, 'columns'>) => {
    const formRef = ref()
    const initialModel = columns.reduce(
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
</script>
