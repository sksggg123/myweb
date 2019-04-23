<template>
    <div>
      <div v-for="item in ask">{{ item.title }}</div>
    </div>
</template>

<script>
import { fetchAskList } from '../api/index';
export default {
  data() {
    return {
      ask: []
    }
  },
  created() { // created는 component가 생성되자마자 들어가는 로직이다. [life cycle hook]
    var vm = this;
    fetchAskList()
      .then(function (response) {
        vm.ask = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
}
</script>

<style scoped>

</style>
