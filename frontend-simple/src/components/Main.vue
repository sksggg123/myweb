<template>
  <div>
    <div v-for="lit in list">{{ lit }}</div>
  </div>
</template>

<script>
import { getContentList } from '../api/index';
export default {
    data() {
      return {
        list: []
      }
    },
    created() {
      getContentList()
        .then(response => {
            this.list = response.data;
        })
        .catch(error => {
            console.log(error)
        });
    }
}
</script>

<style scoped>

</style>
