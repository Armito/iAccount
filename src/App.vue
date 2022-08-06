<script setup lang="ts">
import { NConfigProvider, darkTheme, NMessageProvider } from 'naive-ui'
import themeStar from '../public/themes/theme-overrides-star.json'
</script>

<template>
    <n-config-provider :theme="darkTheme" :theme-overrides="themeStar">
        <n-message-provider>
            <RouterView />
        </n-message-provider>
    </n-config-provider>
</template>
