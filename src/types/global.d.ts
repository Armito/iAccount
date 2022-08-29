declare type Pickout<K, T extends keyof K> = K[T]

declare type Writable<K> = { -readonly [T in keyof K]: K[T] }

declare type WritableAndPartial<K> = {
    -readonly [T in keyof K]?: K[T] | undefined
}
