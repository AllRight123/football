<template>
  <div>
    <div class="" style="position: relative">
      <img src="../assets/login.jpg" width="100%" height="100%">
      <div style="position: absolute; bottom: 50px; color: #fff">
        <input class="inp-user" value="" placeholder="账号/邮箱号"/>
        <input class="inp-pwd" value="" placeholder="输入密码"/>
        <div>
          <van-button style="width: 70%; font-size: 20px; border-radius:20px; " type="default" size="large" @click="goHome">确认</van-button>
        </div>
        <p @click="regist">没有账号？点击注册</p>
      </div>
    </div>
  </div>
</template>

<script>
  import { Button } from 'vant'
export default {
  components: {Button},
  name: 'Login',
  data () {
    return {

    }
  },
  created(){

  },
  methods : {
    goHome(){
      this.$router.push('./')
    },
    regist(){
      this.$router.push('./regist')
    }
  }
}
</script>

<style scoped>
  .inp-user{
    width: 70%;
    height: 40px;
    border-radius: 25px;
    border:1px solid #fff;
    border-shadow: none;
    color: #fff;
    padding-left: 20px;
    background-color:rgba(2,55,48,0.5);
    margin-bottom: 20px;
  }
  .inp-pwd{
    width: 70%;
    height: 40px;
    border-radius: 25px;
    border:1px solid #fff;
    mso-border-shadow: no;
    box-shadow: none;
    color: #fff;
    padding-left: 20px;
    background-color:rgba(2,55,48,0.5);
    margin-bottom: 20px;
  }
  .login{
    background-image: url("../assets/login.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height:1000px;
  }
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
