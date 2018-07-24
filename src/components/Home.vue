<template>
  <div style="background-color: #171a23; min-height: 700px">
    <div class="head-home">
      <div class="head-money">
        9000W
      </div>
      <div style="float: right">我的余额：</div>
    </div>
    <div style="background-color: #171a23; padding: 20px 0;">
      <h3 style="color: #fff; text-align: left; margin-left: 20px;">正在进行</h3>
      <van-row>
        <van-col span="24">
          <div style="margin:0 20px; padding:10px;background-color: #2f323b; height: auto;">
              <div  class="home-match-info">
                <van-icon name="like" />
                2018年10月15日，上午1:55
              </div>
              <div class="home-match-info">World&nbsp;Cup&nbsp;10071801</div>
              <div class="home-match-info">
                <van-icon name="contact" />1323&emsp;
                <span style="color: #f0b72a">
                  <van-icon name="gold-coin" />&nbsp;奖池金额：900M
                </span>
              </div>
          </div>
          <div class="home-vs">
            <div style="color:#fff;">
              <img src="../assets/guoqi1.png" width="10%"/>
              VS
              <img src="../assets/guoqi2.png" width="10%"/>
            </div>
            <div>
              <button class="start-btn">开始</button>
            </div>
          </div>
        </van-col>
      </van-row>
    </div>
    <!-- 轮播-->
    <div>
      <h3 style="color: #fff; text-align: left; margin-left: 20px;">即将推出</h3>
      <van-swipe :autoplay="3000">
        <van-swipe-item><div style="background-color: #171a23; padding: 20px 0;">
          <van-row>
            <van-col span="24">
              <div style="margin:0 20px; padding:10px;background-color: #2f323b; height: auto;">
                <div  class="home-match-info">
                  <van-icon name="like" />
                  2018年10月15日，上午1:55
                </div>
                <div class="home-match-info">World&nbsp;Cup&nbsp;10071801</div>
                <div class="home-match-info">
                  <van-icon name="contact" />1323&emsp;
                  <van-icon name="gold-coin" />900M
                </div>
              </div>
              <div class="home-vs">
                <div style="color:#fff;">
                  <img src="../assets/guoqi1.png" width="10%"/>
                  VS
                  <img src="../assets/guoqi2.png" width="10%"/>
                </div>
                <div>
                  <button class="start-btn">开始</button>
                </div>
              </div>
            </van-col>
          </van-row>
        </div></van-swipe-item>
        <van-swipe-item><div style="background-color: #171a23; padding: 20px 0;">
          <van-row>
            <van-col span="24">
              <div style="margin:0 20px; padding:10px;background-color: #2f323b; height: auto;">
                <div  class="home-match-info">
                  <van-icon name="like" />
                  2018年10月15日，上午1:55
                </div>
                <div class="home-match-info">World&nbsp;Cup&nbsp;10071801</div>
                <div class="home-match-info">
                  <van-icon name="contact" />1323&emsp;
                  <van-icon name="gold-coin" />900M
                </div>
              </div>
              <div class="home-vs">
                <div style="color:#fff;">
                  <img src="../assets/guoqi1.png" width="10%"/>
                  VS
                  <img src="../assets/guoqi2.png" width="10%"/>
                </div>
                <div>
                  <button class="start-btn">开始</button>
                </div>
              </div>
            </van-col>
          </van-row>
        </div></van-swipe-item>
        <van-swipe-item><div style="background-color: #171a23; padding: 20px 0;">
          <van-row>
            <van-col span="24">
              <div style="margin:0 20px; padding:10px;background-color: #2f323b; height: auto;">
                <div  class="home-match-info">
                  <van-icon name="like" />
                  2018年10月15日，上午1:55
                </div>
                <div class="home-match-info">World&nbsp;Cup&nbsp;10071801</div>
                <div class="home-match-info">
                  <van-icon name="contact" />1323&emsp;
                  <van-icon name="gold-coin" />900M
                </div>
              </div>
              <div class="home-vs">
                <div style="color:#fff;">
                  <img src="../assets/guoqi1.png" width="10%"/>
                  VS
                  <img src="../assets/guoqi2.png" width="10%"/>
                </div>
                <div>
                  <button class="start-btn">开始</button>
                </div>
              </div>
            </van-col>
          </van-row>
        </div></van-swipe-item>
        <van-swipe-item><div style="background-color: #171a23; padding: 20px 0;">
          <van-row>
            <van-col span="24">
              <div style="margin:0 20px; padding:10px;background-color: #2f323b; height: auto;">
                <div  class="home-match-info">
                  <van-icon name="like" />
                  2018年10月15日，上午1:55
                </div>
                <div class="home-match-info">World&nbsp;Cup&nbsp;10071801</div>
                <div class="home-match-info">
                  <van-icon name="contact" />1323&emsp;
                  <van-icon name="gold-coin" />900M
                </div>
              </div>
              <div class="home-vs">
                <div style="color:#fff;">
                  <img src="../assets/guoqi1.png" width="10%"/>
                  VS
                  <img src="../assets/guoqi2.png" width="10%"/>
                </div>
                <div>
                  <button class="start-btn">开始</button>
                </div>
              </div>
            </van-col>
          </van-row>
        </div></van-swipe-item>
      </van-swipe>
    </div>
    <!--底部-->
  </div>
</template>

<script>
  import { Row, Col,Icon,Swipe, SwipeItem,} from 'vant';
export default {
  name: 'home',
  components: {Row, Col,Icon,Swipe, SwipeItem,},
  data () {
    return {

    }
  },
  created(){

  },
  methods: {
    onClick(item) {
      Toast(item.name);
    }
  },
}
</script>

<style scoped>
  .start-btn{margin-top:10px;
    background-color: #f0b72a;
    border-radius: 15px;
    border:none;
    padding:2px;
    width: 70px
  }
  .home-vs{
    margin:0 20px;
    padding:10px;
    background-color:#43464b;
    height: auto;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
  }
  .home-match-info{
    color: #fff;
    margin:5px 10px;
    text-align: left;
  }
  .head-home{
    padding: 0 20px;
    height: 46px;
    background-color: #333d46;
    color: #fff;
    text-align: center;
    line-height: 46px;
  }
  .head-money{
    float:right; text-align: center;
    margin-top: 8px;
    padding: 5px;
    font-size:14px;
    line-height:20px;
    border:1px solid #ccc;
    background-color:#f44;
    width:70px;
    height: 30px;
    border-radius: 15px
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
