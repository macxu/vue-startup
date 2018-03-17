<script lang="ts">
import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from "vue-property-decorator";
import VueRouter from "vue-router";

@Component({
    components: {
    },
})
export default class App extends Vue {

    public mounted(): void {
    }

    private onSelect(index: string) {
        this.$router.push(index);
    }
}
</script>
<template>
    <div>
        <el-menu :default-active="`/`" mode="horizontal" @select="onSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <el-menu-item index="/">欢迎界面</el-menu-item>
            <el-menu-item index="/users">用户管理</el-menu-item>
            <el-menu-item index="/orders">订单管理</el-menu-item>
            <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-submenu index="2-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="2-4-1">选项1</el-menu-item>
                    <el-menu-item index="2-4-2">选项2</el-menu-item>
                    <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="3" disabled>消息中心</el-menu-item>
            <el-menu-item index="4">
                <a href="https://www.ele.me" target="_blank">其他系统</a>
            </el-menu-item>
        </el-menu>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>
<style scoped>
.container {
    position: absolute;
    left: 0;
    right: 0;
    top: 61px;
    bottom: 0;
    background-color: #ececec;
}
</style>
