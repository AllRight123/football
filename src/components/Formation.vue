<template>
  <div>
    <div class="head-formation">
      <van-row gutter="20">
        <van-col span="1">
          &nbsp;
        </van-col>
        <van-col span="9">
          <select v-model="selected" class="form-select" name="123" @change="tryIt(selected)">
            <template v-for="item in someSelect">
              <template v-if="item.value =='' ">
                <option value="" style="display: none" selected="selected">请选择阵型</option>
              </template>
              <template v-else>
                <option :value="item.value" selected="selected">阵型：{{item.name}}</option>
              </template>
            </template>
          </select>
        </van-col>
        <van-col span="9">
          <select class="form-select">
            <option value="1" selected="selected">方案：内容1</option>
            <option value="2">4-2-4</option>
            <option value="1">3-4-3</option>
            <option value="2">2-4-4</option>
          </select>
        </van-col>
        <van-col span="4">
         <span style="font-size: 0.15rem">完成</span>
        </van-col>
      </van-row>
    </div>

    <div style="margin-bottom: 60px">
      <div style="position: relative">
        <img :src="actionImg" width="100%">
        <div class="leave-money">
            剩余资金：<br>
            20000万欧元
        </div>
      </div>
      <h3 style="margin: 10px 0">选择球员</h3>
      <div class="nameList">
        <van-row gutter="20">
          <van-col span="6" class="name">
            <div class="name-head">
              <img src="../assets/postman.png"width="100%">
            </div>
            <div>阿瓦洛</div>
          </van-col>
          <van-col span="6" class="name">
            <div class="name-head">
              <img src="../assets/postman2.png"width="100%">
            </div>
            <div>阿瓦洛</div>
          </van-col>
          <van-col span="6" class="name">
            <div class="name-head">
              <img src="../assets/postman3.png"width="100%">
            </div>
            <div>阿瓦洛</div>
          </van-col>
          <van-col span="6" class="name">
            <div class="name-head">
              <img src="../assets/postman4.png"width="100%">
            </div>
            <div>阿瓦洛</div>
          </van-col>
          <van-col span="6" class="name">
            <div class="name-head">
              <img src="../assets/postman4.png"width="100%">
            </div>
            <div>阿瓦洛</div>
          </van-col>
          <van-col span="6" class="name">
            <div class="name-head">
              <img src="../assets/postman3.png"width="100%">
            </div>
            <div>阿瓦洛</div>
          </van-col>
          <van-col span="6" class="name">
            <div class="name-head">
              <img src="../assets/postman2.png"width="100%">
            </div>
            <div>阿瓦洛</div>
          </van-col>
          <van-col span="6" class="name">
            <div class="name-head">
              <img src="../assets/postman.png"width="100%">
            </div>
            <div>阿瓦洛</div>
          </van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>

<script>
  import { Actionsheet,Button ,Tab, Tabs,} from 'vant';
export default {
  components: {Actionsheet,Button,Tab, Tabs,},
  name: 'Formation',
  data () {
    return {
      actionImg:'',
      selected:'',
      someSelect: [
        {
          value:'',
          name:'4-4-2'
        },
        {
          value:1,
          name:'4-4-2'
        },
        {
          value:2,
          name:'5-3-2'
        },
        {
          value:3,
          name:'4-3-3'
        },
        {
          value:4,
          name:'3-4-3'
        },
        {
          value:5,
          name:'3-5-2'
        },
        {
          value:6,
          name:'4-2-3-1'
        }
      ]
    }
  },
  created () {
    this.tryIt();
  },
  methods: {
    tryIt (value) {
      console.log(value);
      if (value == '1'){
        this.actionImg = require('../assets/n442.jpg')
      }else if (value ==2){
        this.actionImg = require('../assets/n532.jpg')
      }else if (value ==3){
        this.actionImg = require('../assets/n433.jpg')
      }else if (value ==4){
        this.actionImg = require('../assets/n343.jpg')
      }else if (value ==5){
        this.actionImg = require('../assets/n352.jpg')
      }else{
        this.actionImg = require('../assets/n4231.jpg')
      }

    },
    onClick(item) {
      Toast(item.name);
    }
  },
}
</script>

<style scoped>
  .van-tabs__line{
    background-color: green !important;
  }
  .leave-money{
    width: 120px;
    height: 50px;
    color: #fff;
    padding: 5px;
    background-color:rgba(0,0,0,0.2);
    position:absolute;
    bottom: 10px;
    left: 10px;
  }
  .nameList{
    margin-top: 20px;
    background-color: #ececec;
    padding: 10px;
  }
  .nameList .name { color: #5b5b5b; font-size: 14px;}
  .nameList .name .name-head{
    margin-left: 17px; background-color: #fff; width: 40px;
    height: 40px; border-radius: 50%; border: 1px solid #ccc;
  }
  .form-select{
    width: 100%;
    border-radius: 0px;
    height: 30px;
    color: #5b5b5b;
    border: none;
  }
  .head-formation{
    padding: 0 20px;
    height: 46px;
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
