<template>
  <div id="app">
    <router-view></router-view>
    <nut-tabbar v-model="activeName" @tab-switch="tabSwitch" bottom safe-area-inset-bottom placeholder>
      <nut-tabbar-item tab-title="首页" name="home">
        <template #icon>
          <Home></Home>
        </template>
      </nut-tabbar-item>
      <nut-tabbar-item tab-title="我的" name="myIndex">
        <template #icon>
          <My></My>
        </template>
      </nut-tabbar-item>
    </nut-tabbar>
  </div>
</template>

<script>
import { Home, My} from '@nutui/icons-vue';
export default {
  name: 'App',
  components: {
    Home,
    My
  },
  data() {
    return {
      activeName: 'home',
    };
  },
  computed: {

  },
  methods: {
    tabSwitch(item, index) {
      console.log(item, index);
      this.$router.push(`/${index}`);
    },
    goUrl(ret) {
      // this.$router.push(ret.menuUrl);
    },
  },
  mounted() {
  },

}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Nunito+Sans');
*,
*:after,
*:before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root {

}
html,
body {
  width: 100%;
  height: 100%;
  font-family: 'PingFang SC', 'Nunito Sans', BlinkMacSystemFont, 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', sans-serif;
}
a {
  color: inherit;
  background-color: transparent;
  text-decoration: none;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
