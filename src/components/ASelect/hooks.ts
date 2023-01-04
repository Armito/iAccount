import { computed, ref, Ref } from 'vue'

interface UseOptionsParams {
    options: Ref<
        {
            value?: string | number | boolean | object
            label?: string | number
            disabled?: boolean
            [key: string]: unknown
        }[]
    >
    optionMap?: Ref<{
        value?: string
        label?: string
        disabled?: string
    }>
}

export const useOptions = ({
    options,
    optionMap = ref({}),
}: UseOptionsParams) => {
    return {
        options: computed(() => {
            return options.value.map((o) => ({
                ...o,
                value: o[optionMap.value.value || 'value'],
                label: o[optionMap.value.label || 'label'],
                disabled: o[optionMap.value.disabled || 'disabled'],
            }))
        }),
    }
}
