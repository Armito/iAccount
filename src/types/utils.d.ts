type Pickout<K, T extends keyof K> = K[T]

type PartialDeep<K> = {
    [T in keyof K]?: PartialDeep<K[T]> | undefined
}
