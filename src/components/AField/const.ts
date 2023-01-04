import { FieldType } from './types'
import { ElInput } from 'element-plus'
import ASelect from '@/components/ASelect/index.vue'

export const FieldTypeMap: Record<FieldType, unknown> = {
    text: ElInput,
    select: ASelect,
}
