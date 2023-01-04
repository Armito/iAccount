export const saveApi = (params: any) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(params)
            console.log(params)
        }, 1000)
    })
}

export const getApi = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Armito')
            console.log('Armito')
        }, 1000)
    })
}
