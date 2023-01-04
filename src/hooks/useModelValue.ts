import { computed, Ref } from 'vue'

interface UseModelValueParams {
    modelValue?: Ref<unknown>
    emits: {
        (e: 'update:modelValue', payload?: unknown): void
    }
}

export const useModelValue = ({ modelValue, emits }: UseModelValueParams) => {
    return {
        value: computed({
            get: () => modelValue?.value,
            set: (v) => emits('update:modelValue', v),
        }),
    }
}
