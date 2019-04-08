<template>
    <div>
      <div v-for="user in users">{{ user.title }}</div>
    </div>
</template>

<script>
import { fetchNewsList } from '../api/index';

    export default {
      data() {
        return {
          users: []
        }
      },
      created() {
        var vm = this;
        // axios.get('https://api.hnpwa.com/v0/news/1.json')
        fetchNewsList()
          // .then(response => this.users = response.data)
          .then(function (response) {
            console.log(response);
            vm.users = response.data; // 상단 v-for에 'users'로 데이터를 받을 수 있다.
          })
          .catch(function(error) {
            console.log(error);
          });
      },
    }
</script>

<style scoped>

</style>
