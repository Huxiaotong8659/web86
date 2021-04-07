<template>
  <div>
    江西软件大学
    <div>{{ test }}</div>
    <hr />
    <div v-for="(stu,key) in this.stuInform" :key="key" :class="[stu.active?'flag1':'flag2']">
      <span>{{ stu.id }}</span>
      <span>{{ stu.name }}</span>
      <span>{{ stu.class }}</span>
      <span>{{ stu.address }}</span>
      <span>{{ stu.active }}</span>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      stuInform: [],
      test: null,
    };
  },
  mounted() {
    axios
      .get(
        "https://www.fastmock.site/mock/4374b55d0c92bba3cf7ec656e8103e56/_information_09/api/users"
      )
      .then((result) => {
        this.test = result.data;
        this.test = JSON.stringify(this.test);
        this.test = JSON.parse(this.test);
        for (var s in this.test) {
          this.stuInform.push(this.test[s]);
        }
        this.test = this.stuInform;
      });
  },
};
</script>

<style>
.flag1{
    background-color:pink;
}
.flag2{
    background-color:cornflowerblue;
}
</style>