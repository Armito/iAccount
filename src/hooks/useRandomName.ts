import { ref, computed } from 'vue'
import { getName, getBook } from 'random_chinese_fantasy_names'

type nameStyleType = 'single' | 'double' | 'combine'

interface Options {
    isFemale?: boolean
    style?: nameStyleType
    familyName?: string
    middleCharacter?: string
}

type rarityType =
    | 'common'
    | 'uncommon'
    | 'rare'
    | 'epic'
    | 'legendary'
    | 'mythic'
    | 'exotic'

export const useRandomName = (options?: Options) => {
    const randomName = ref<string[]>(getName(1, options))
    const randomBook = ref<
        {
            name: string
            rarity: rarityType
        }[]
    >(getBook(1))

    const rarityLabel = (rarity: rarityType) => {
        switch (rarity) {
            case 'common':
                return '普通'

            case 'uncommon':
                return '罕见'

            case 'rare':
                return '稀有'

            case 'epic':
                return '史诗'

            case 'legendary':
                return '传说'

            case 'mythic':
                return '神秘'

            case 'exotic':
                return '未知'
        }
    }

    const roll = () => {
        randomName.value = getName(1, options)
        randomBook.value = getBook(1)
    }

    return {
        randomName: computed(() => randomName.value.join('')),
        randomBook: computed(() =>
            randomBook.value.map((b) => b.name).join(''),
        ),
        randomBookRarity: computed(() =>
            randomBook.value.map((b) => rarityLabel(b.rarity)).join(''),
        ),
        roll,
    }
}
