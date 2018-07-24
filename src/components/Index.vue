<template>
  <div style="background-color: #ececec; height: auto; margin-bottom: 60px;">
    <div class="head-home">
      列表详情
    </div>
    <van-tabs v-model="active">
      <van-tab v-for="index in tab" :title="index.title">
        <template v-if="index.key == 1">
          <div style="margin: 20px 0; padding: 0 10px; max-height: 1.3rem; overflow: auto">
            <van-row gutter="20">
              <template v-for="item in postTeam">
                <div @click="teamClick(item.Team_id)">
                  <van-col span="6">
                    <img :src="item.Team_logo" width="50%" :id="item.Team_id">
                    <div style="margin-bottom: 10px">{{item.Team_name}}</div>
                  </van-col>
                </div>
              </template>
            </van-row>
          </div>
        </template>
        <template v-if="index.key == 2">
          <div align="left">
            <h3 style="margin:10px">选择位置</h3>
            <van-radio-group v-model="radio" @change="choose(radio)">
              <van-cell-group>
                <van-cell title="前锋" clickable>
                  <van-radio name="前锋" />
                </van-cell>
                <van-cell title="中场" clickable>
                  <van-radio name="中场" />
                </van-cell>
                <van-cell title="后卫" clickable>
                  <van-radio name="后卫" />
                </van-cell>
                <van-cell title="守门员" clickable>
                  <van-radio name="守门员" />
                </van-cell>
              </van-cell-group>
            </van-radio-group>
            <!--<div align="center" style="margin:20px 0">
              <van-button type="danger" plain size="large" @click="reset">重置选择</van-button>
            </div>-->
          </div>
        </template>
      </van-tab>
    </van-tabs>
    <div>
      <div class="tab_name">
        <van-row gutter="0">
          <div>
            <van-col span="10" style="text-align: left">&emsp;&emsp;&nbsp;球员</van-col>
          </div>
          <van-col span="5">球队</van-col>
          <van-col span="3">位置</van-col>
          <van-col span="3">评分</van-col>
          <van-col span="3">身价</van-col>
        </van-row>
      </div>
      <div class="tab_list">
        <van-row gutter="0">
          <template v-for="items in playersList">
            <div @click="buy(items.P_id)">
              <van-col span="10" style="padding: 0 20px;">
                <div style="float:left; background-color: #fff; width: 0.3rem; height: 0.3rem; border-radius: 50%; border: 1px solid #ccc;">
                  <img :src="items.P_icon" width="100%">
                </div>
                <div style="float:left; height: 0.4rem; max-width: 0.8rem; text-overflow:ellipsis; overflow: hidden; line-height: 40px;" class="font-list">&nbsp;{{items.P_name}}</div>
              </van-col>
              <van-col span="5" class="font-list">{{items.Team_name}}</van-col>
              <van-col span="3" class="font-list">{{items.P_position}}</van-col>
              <van-col span="3" class="font-list">{{items.P_score}}</van-col>
              <van-col span="3" class="font-list">{{items.P_worth}}</van-col>
            </div>
          </template>
        </van-row>
        <!--弹出购买提示-->
        <!--<Button type="primary" @click="modal1 = true">点击</Button>-->
        <Modal
          v-model="buys"
          title="提示："
          @on-ok="ok"
          @on-cancel="cancel">
          <p>确认购买该球员？</p>
        </Modal>
      </div>
    </div>
  </div>
</template>

<script>
  import { Button,NavBar,Tab, Tabs,Row, Col, Cell, CellGroup,RadioGroup, Radio} from 'vant';
  import {Modal} from 'iview'
export default {
  name: 'index',
  components :{Button,NavBar,Tab, Tabs,Row, Col, Cell, CellGroup,RadioGroup, Radio,Modal },
  data () {
    return {
      buys: false,
      teamId:'',
      radio:'',
      chooseName:'',
      postTeam:{},
      playersList:{},
      tab:[
        {
          key: '1',
          title: '球队'
        },
        {
          key: '2',
          title: '位置'
        },
      ],
      active: 0,
    }
  },
  created(){
    this.team();
    this.teamClick(2);
  },
  methods: {
    buy(id){
      this.buys = true;
      console.log(id)
    },
    ok () {
      //this.$Message.info('Clicked ok');
    },
    cancel () {
      //this.$Message.info('Clicked cancel');
    },
    choose(name){
      this.chooseName = name
      this.axios.post('/apis/v1/home/players',{
        page: 1,
        pagesize:15,
        team_id:this.teamId,
        position:this.chooseName,
      }).then(response=>{
        var players = response.data.data.list;
        this.playersList = players;
      })
    },
    teamClick(id){
      this.teamId = id
      this.axios.post('/apis/v1/home/players',{
        page: 1,
        pagesize:15,
        team_id:this.teamId,
        position:'',
      }).then(response=>{
        var players = response.data.data.list;
        this.playersList = players;
        console.log(1)
        console.log(players)
      })
    },
    team(){
      this.axios.post('/apis/v1/home/teams',{
          page: 1
      }).then(response=>{
        var teamList = response.data.data.list;
        this.postTeam = teamList;
      }).catch()
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .form-select{
    width: 50%;
    margin:20px 0 20px 20px;
    border-radius: 5px;
    height: 30px;
    color: #5b5b5b;
    border: none;
  }
  .head-home{
    padding: 0 20px;
    height: 46px;
    background-color: #333d46;
    color: #fff;
    font-size: 18px;
    text-align: center;
    line-height: 46px;
  }
  .font-list{
    font-size: 0.1rem;
    line-height: 40px;
  }
  .tab_name{
    background-color: #424b5a;
    padding: 10px 0;
    color: #fff;
    font-size: 0.14rem;
  }
  .lis{
    margin:0 0.2rem;
  }
  .tab_list{
    background-color: #ffffff;
    padding: 10px 0;
    color: #333333;
    border-bottom: 1px solid #000;
  }
  .van-nav-bar{
    background-color: #333d46;
    color: #fff;
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
