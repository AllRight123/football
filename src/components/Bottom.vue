<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="chat" @click="gohome">赛程</van-tabbar-item>
      <van-tabbar-item icon="shop" @click="goIndex">
        <span>列表</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="icon.active"
        >
      </van-tabbar-item>
      <van-tabbar-item icon="chat" @click="goFormation">阵容</van-tabbar-item>
      <van-tabbar-item icon="records" @click="goMyself">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem} from 'vant';
export default {
  components: {Tabbar, TabbarItem},
  name: 'Formation',
  data () {
    return {
      active: 0,
      icon: {
        active: require('../assets/list.png')
      },
      toFormation:[
        {
          index:'1',
          title:'选择球员'
        },
      ]
    }
  },
  created () {

  },
  methods: {
    gohome () {
      this.$router.push('/home');
    },
    goIndex () {
      this.$router.push('/');
    },
    goFormation() {
      this.$router.push('/Formation');
    },
    goMyself () {
      this.$router.push('/Myself')
    },
    onClick(item) {
      Toast(item.name);
    }
  },
}
</script>

<style scoped>
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
