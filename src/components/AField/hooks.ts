import { computed, Ref } from 'vue'
import { FieldType } from './types'
import { FieldTypeMap } from './const'

export const useAField = (fieldType: Ref<FieldType>) => {
    return {
        fieldType: computed(() => FieldTypeMap[fieldType.value]),
    }
}
