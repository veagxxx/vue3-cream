<template>
  <div class="login-page">
    <div class="login-box">
      <div class="login-box__title">
        <h3>后台管理登录</h3>
      </div>
      <el-form
        ref="loginFormRef"
        :model="loginData"
        status-icon
        :rules="rules"
        class="login-box__form"
      >
        <el-form-item label="" prop="username">
          <el-input 
            v-focus
            v-model="loginData.username" 
            autocomplete="off"
            placeholder="输入你的账号"
          />
        </el-form-item>
        <el-form-item label="" prop="password">
          <el-input 
            v-model="loginData.password" 
            type="password" 
            autocomplete="off" 
            placeholder="输入你的密码"
            @keyup.enter="onLogin(loginFormRef)"
          />
        </el-form-item>
        <div class="form__extra">
          <el-checkbox v-model="loginData.rememberMe">
            记住密码
          </el-checkbox>
          <router-link class="link-type" :to="'/register'">
            立即注册
          </router-link>
        </div>
        <el-form-item style="width:100%;">
          <el-button
            :loading="loading"
            type="primary"
            @click="onLogin(loginFormRef)"
          >
            <span v-if="!loading">登 录</span>
            <span v-else>登 录 中...</span>
          </el-button>
          
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script lang='ts' setup>
  import { FormInstance } from 'element-plus';
  import { reactive, ref } from 'vue';
  import { useRouter } from 'vue-router';
  const router = useRouter()
  const loginData = reactive<{
    username: string;
    password: string;
    rememberMe: boolean;
  }>({
    username: '',
    password: '',
    rememberMe: false,
  });
  const loading = ref<boolean>(false);
  const loginFormRef = ref<FormInstance>()
  const rules = reactive({
    username: [
      { required: true, trigger: "blur", message: "请输入账号" }
    ],
    password: [
      { required: true, trigger: "blur", message: "请输入密码" }
    ],
  });
  const onLogin = async (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    await formEl.validate((valid, fields) => {
      if (valid) {
        loading.value = true;
        setTimeout(() => {
          loading.value = false
          router.push('/index')
        }, 1000)
      } else {
        console.log('error', fields)
      }
    })
  }
</script>
<style lang='scss' scoped>
  .login-page {
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
    display: flex;
    justify-content: right;
    align-items: center;
    .login-box {
      width: 360px;
      height: 300px;
      background-color: rgba(98, 106, 239, 0.2);
      border-radius: 15px;
      padding: 40px;
      margin-right: 15%;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, .2);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .login-box__title {
        text-align: center;
        h3 {
          font-size: 20px;
          font-weight: 500;
        }
      }
      .login-box__form {
        width: 100%;
        margin: 40px;
        .form__extra {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 0px 0px 25px 0px;
          a {
            color: var(--el-color-primary);
            font-size: 14px;
          }
        }
        .el-button {
          width: 100%;
        }
      }
    }
  }
</style>