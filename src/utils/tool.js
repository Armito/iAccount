const a = [
    {
        name: '111',
        arr: [
            {
                id: 123,
                name: '123213',
            },
            {
                id: 1233,
                name: '123213',
            },
        ],
    },
    {
        name: '111',
        arr: [
            {
                id: 1344,
                name: 'wq4e23e',
            },
            {
                id: 134,
                name: 'wq4e23e',
            },
        ],
    },
    {
        name: '111',
        arr: [
            {
                id: 134,
                name: 'wq4e23e',
            },
        ],
    },
]

const b = [
    {
        name: '324',
        arr: [
            {
                id: 122133,
                name: '1232',
            },
        ],
    },
    {
        name: '111',
        arr: [
            {
                id: 134,
                name: 'wq4e23e',
            },
        ],
    },
]

const flatB = b.reduce((pre, cur) => {
    return [...pre, ...cur.arr.map((i) => i.id)]
}, [])

a.forEach((_a) => {
    for (let i = 0; i < _a.arr.length; i++) {
        if (!flatB.some((b) => b === _a.arr[i].id)) {
            b.push(_a)
            break
        }
    }
})

console.log(b)
