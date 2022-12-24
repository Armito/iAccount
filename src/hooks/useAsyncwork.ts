import {} from 'vue'

export const useAsyncwork = () => {
    const asyncwork = (id: number) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(`A-${id}`)
            }, 2000)
        })
    }

    return {
        asyncwork,
    }
}
