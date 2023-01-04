import { ref } from 'vue'

export interface UseTaskOptions {
    mamual?: boolean
}

export const useTask = (
    task: (...arg: any[]) => Promise<unknown>,
    options?: UseTaskOptions,
) => {
    const loading = ref<boolean>(false)

    const run = (...arg: any[]) =>
        new Promise(async (resolve, reject) => {
            try {
                loading.value = true
                resolve(await task(...arg))
            } catch (e) {
                reject(e)
            } finally {
                loading.value = false
            }
        })

    !options?.mamual && run()

    return {
        loading,
        run,
    }
}
