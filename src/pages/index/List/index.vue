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
]
</script>

<template>
    <div>
        <el-card v-for="item in list" :key="item.id" class="box-card">
            <div class="text item">
                <el-descriptions :title="item.appName" :column="2">
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
.box-card {
    margin-bottom: 20px;
}
</style>
