<script setup lang="ts">
import {
    ElCard,
    ElButton,
    ElDescriptions,
    ElDescriptionsItem,
} from 'element-plus'

const list = [
    {
        id: '1',
        appName: 'weixin',
        account: 'sadijdj923ij',
        password: '943u9i43',
    },
    {
        id: '2',
        appName: 'qq',
        account: 'sadsad',
        password: '34556654t45',
    },
    {
        id: '3',
        appName: 'weibo',
        account: 'plplplp3',
        password: '9ifd09r09fj3',
    },
    {
        id: '4',
        appName: '招行',
        account: 'rtyurtyu',
        password: '21343214',
    },
]
</script>

<template>
    <div class="list-box">
        <el-card v-for="item in list" :key="item.id" class="card-box">
            <template #header>
                <div class="card-header">
                    <span class="card-header-text">
                        {{ `『${item.appName}』` }}
                    </span>
                    <el-button type="text">编辑</el-button>
                </div>
            </template>
            <div class="text item">
                <el-descriptions :column="2">
                    <el-descriptions-item label="账号">
                        {{ item.account }}
                    </el-descriptions-item>
                    <el-descriptions-item label="密码">
                        {{ item.password }}
                    </el-descriptions-item>
                </el-descriptions>
            </div>
        </el-card>
    </div>
</template>

<style lang="less" scoped>
@import '@/styles/common';

.list-box {
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;

    .no-scrollbar();
}

.card-box {
    margin-bottom: 20px;
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.card-header-text {
    font-style: italic;
}
</style>
