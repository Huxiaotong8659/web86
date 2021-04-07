<template>
  <div id="wrapper">
    <div id="name">江西软件大学</div>
    <div id="content">江西软件大学简介</div>
    <!--  vue 指令-->
    <div v-for="index in lists" :key="index">{{ index.name }}</div>
  </div>
  <!-- mock数据 -->
</template>

<script>
export default {
  data() {
    return {
      lists: [{ name: "张三" }, { name: "李四" }],
      information:null
    };
  },
};
</script>

<style scoped lang="less" rel="stylesheet/less">
#wrapper {
  background-color: cornflowerblue;
  #name {
    background-color: deepskyblue;
    font: 5em sans-serif;
  }
}
</style>