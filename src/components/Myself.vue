<template>
  <div style="background-color: #171a23;min-height: 700px">
    <div class="head-home">个人中心</div>
    <div class="upload">
      <van-uploader :after-read="onRead" accept="image/gif, image/jpeg">
        <van-icon name="photograph" />
      </van-uploader>
    </div>
    <div style="margin-top: 20px; margin-bottom: 20px; color:#fff">玩家ID：都要好好的</div>
    <van-cell-group>
      <van-cell title="个人资料" icon="location" is-link class="cellClass"/>
      <van-cell title="余额" value="120000" icon="location" is-link class="cellClass"/>
      <div @click="goRecharge">
        <van-cell title="充值" icon="location" is-link class="cellClass"/>
      </div>
    </van-cell-group>
  </div>
</template>

<script>
  import { Uploader,Cell, CellGroup } from 'vant';
export default {
  components:{Uploader,Cell, CellGroup},
  name: 'Myself',
  data () {
    return {

    }
  },
  created () {

  },
  methods: {
    onRead(file) {
      console.log(file)
    },
    goRecharge(){
      this.$router.push('/recharge');
    }
  },
}
</script>

<style scoped>
  .van-cell-group{
    background-color:#171a23;
  }
  .cellClass{
    margin-bottom: 10px;
    padding:15px;
    background-color:#2f3640;
    color: #f0b72a;
    text-align: left;
  }
  .upload{
    margin:0 auto;
    background-color: #fff;
    width: 70px;
    color: #f0b72a;
    height: 70px;
    border-radius: 50px;
    line-height: 70px;
    text-align: center;
    margin-top: 40px;
 }
  .head-home{
    padding: 0 20px;
    height: 46px;
    font-size: 18px;
    background-color: #333d46;
    color: #fff;
    text-align: center;
    line-height: 46px;
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
