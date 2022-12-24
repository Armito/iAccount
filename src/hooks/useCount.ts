import { ref } from 'vue'

export const useCount = () => {
    const count = ref(0)

    const increment = () => {
        count.value += 1
    }

    const decrement = () => {
        count.value -= 1
    }

    const double = () => {
        count.value *= 2
    }

    const divide = () => {
        count.value /= 2
    }

    return {
        count,
        increment,
        decrement,
        double,
        divide,
    }
}
