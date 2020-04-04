<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像 -->
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="">
      </div>
      <!-- 表单 -->
      <el-form ref="Ref_form" :model="loginform" label-width="0px" :rules="rules" class="login_form">
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input prefix-icon="el-icon-user" v-model="loginform.username"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input prefix-icon="el-icon-lock" v-model="loginform.password" type="password"></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登入</el-button>
          <el-button type="info" @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return{
      //登入表单
      loginform:{
        username: "admin",
        password: "123456"
      },
      //表单验证规则
      rules:{
        //用户
        username: [
          {required: true, message: "请输入用户名", trigger: 'blur'},
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        //密码
        password: [
          {required: true, message: "请输入密码", trigger: 'blur'},
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods:{
    //重置表单
    resetForm(){
      this.$refs.Ref_form.resetFields()
    },
    //表单登入的验证
    login(){
      this.$refs.Ref_form.validate(async validate => {
        // console.log(validate)
        if(!validate)
          return;
        const {data: res} = await this.$http.post('login', this.loginform)
        if(res.meta.status !== 200)
        // this.message是element-ui原型链上的，接受不同的参数使用不同的提示框
          return this.$message.error('登入失败');
        this.$message.success('登入成功')
        //将登入成功后的token，保存到客户端的 sessionStorage中
        window.sessionStorage.setItem('token', res.data.token);
        this.$router.push('/home')
      })
    }
  }
}
</script>
<style lang="less" scoped>
.login_container{
  background-color: #2b4b6b;
  height: 100%;
}
.login_box{
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.login_box .avatar_box{
  height: 130px;
  width: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10px #ddd;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
}
.login_box .avatar_box img{
  width: 100%;
  width: 100%;
  border-radius: 50%;
  background-color: #eee;
}
.login_form{
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
.btns{
  display: flex;
  justify-content: center;
}
</style>