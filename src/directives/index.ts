import { App } from 'vue'
import { VueClipboard } from '@soerenmartius/vue3-clipboard'

export default {
    install: (app: App) => {
        app.use(VueClipboard)
    },
}
