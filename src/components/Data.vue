<template>
  <div>
    <bottom-bar></bottom-bar>
    <template v-if="this.$router.currentRoute =='/' || this.$router.currentRoute =='./index' ">
      <vant-content></vant-content>
    </template>
    <template v-else>
      <router-view></router-view>
    </template>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem } from 'vant';
  import bottomBar from './Bottom'
  import vantContent from './Index'
export default {
  name: 'data',
  components:{Tabbar, TabbarItem,bottomBar,vantContent},
  data () {
    return {

    }
  }
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
