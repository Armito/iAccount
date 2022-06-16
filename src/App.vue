<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElContainer, ElHeader, ElMain, ElPageHeader } from 'element-plus'
import { useIpcRenderer } from '@vueuse/electron'

const pageHeaderShow = ref(false)

const router = useRouter()
router.beforeEach((to, from) => {
    if (to.path !== '/') {
        pageHeaderShow.value = true
    } else {
        pageHeaderShow.value = false
    }
})

const goBack = () => {
    router.push('/')
}

const ipcRenderer = useIpcRenderer()
ipcRenderer.send('window-new', 'im render')
</script>

<template>
    <el-container>
        <el-header>
            <el-page-header
                v-if="pageHeaderShow"
                content="detail"
                @back="goBack"
            />
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
</template>
