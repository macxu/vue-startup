<script lang="ts">
import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from "vue-property-decorator";
import VueRouter from "vue-router";

@Component({
    components: {
    },
})
export default class LoginView extends Vue {

    private username: string = "admin";
    private password: string = "admin";

    public mounted(): void {
    }

    private submit() { }

    private reset() { }
}
</script>
<template>
    <div class="container">
        <h1>欢迎来到Vue Starup</h1>
        <div class="main">
            <el-form label-position="left" label-width="80px">
                <el-form-item label="用户">
                    <el-input v-model="username"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="password" type="password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submit()">立即登陆</el-button>
                    <el-button @click="reset()">忘记密码</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="remark">这个组件主要演示了表单，和垂直居中的CSS设置方法。</div>
    </div>
</template>
<style lang="less" scoped>
.container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ececec;
}
h1 {
    text-align: center;
}
.main {
    background-color: #fff;
    border-radius: 9px;
    width: 400px;
    height: auto;
    padding: 20px 20px;
}
.remark {
    font-size: 12px;
    line-height: 35px;
    text-align: center;
    color: #999999;
}
</style>

