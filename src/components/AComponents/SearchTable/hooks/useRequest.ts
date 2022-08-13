import { ref } from 'vue'
import { SearchTableProps } from '../types'

export const useRequest = (_request: Pickout<SearchTableProps, 'request'>) => {
    const loading = ref(false)
    const request: typeof _request = (params) =>
        new Promise((resolve, reject) => {
            loading.value = true
            _request(params)
                .then((res) => {
                    resolve(res)
                })
                .catch((err) => {
                    reject(err)
                })
                .finally(() => {
                    loading.value = false
                })
        })

    return {
        loading,
        request,
    }
}
