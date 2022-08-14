interface aaa {
    type: 'a'
    uniA: string
}

interface bbb {
    type: 'b'
    uniB: number
}

type c = aaa | bbb
type d = aaa & bbb

const e: c = {
    uniA: '',
    type: 'a',
}

// interface f extends c {
//     unif: 'f'
// }
