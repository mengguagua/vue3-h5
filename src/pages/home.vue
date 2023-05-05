<template>
  <div>
    这是首页
    <nut-button type="primary" @click="goUrl">跳转功能页面</nut-button>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
    }
  },
  methods: {
    goUrl() {
      this.$router.push(`/functionModules/demo`);
    },
  },
  mounted() {
    console.log('这是首页')
  }
};
</script>

<style scoped lang="less">

</style>
