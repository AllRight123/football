<template>
  <div style="background-color: #f2f2f2; min-height: 700px">
    <div class="head-home">余额充值</div>
    <Row>
      <van-row>
        <van-col span="24">
          <div class="chongzhi" align="left">
            <h2 align="left">选择充值方式</h2>
            <Select v-model="model1" style="">
              <Option style="width: 100%" v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
            <div style="margin:40px 0px">
              <h2 align="left">充值金额</h2>
              <Input v-model="money" placeholder="输入要充值的金额" style=""></Input>
            </div>
          </div>
        </van-col>
      </van-row>
    </Row>
  </div>
</template>

<script>
  import {Row, Col,Icon,Select,Option,Input} from 'iview';
export default {
  name: 'Recharge',
  components:{Row, Col,Icon,Select,Option,Input},
  data () {
    return {
      money:'',
      cityList: [
        {
          value: 'New York',
          label: 'New York'
        },
        {
          value: 'London',
          label: 'London'
        },
        {
          value: 'Sydney',
          label: 'Sydney'
        },
        {
          value: 'Ottawa',
          label: 'Ottawa'
        },
        {
          value: 'Paris',
          label: 'Paris'
        },
        {
          value: 'Canberra',
          label: 'Canberra'
        }
      ],
      model1: ''
    }
  },
  created(){

  },
  methods: {

  },
}
</script>

<style scoped>
  .chongzhi{
    border-radius: 15px;
    height: auto;
    margin:20px;
    padding:40px 10px 20px 10px;
    background-color: rgba(66,75,90,0.9);
  }
  .head-home{
    height: 46px;
    font-size: 18px;
    background-color: #333d46;
    color: #fff;
    text-align: center;
    line-height: 46px;
  }
h1, h2 {
  font-weight: normal;
  color: #ffffff;
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
