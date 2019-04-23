<template>
    <div class="header">
      <router-link to="/main">Main</router-link> |
      <router-link to="/list">List</router-link> |
      <router-link to="/comunity">Comunity</router-link> |
      <router-link to="/news">News</router-link> |
      <router-link to="/jobs">Jobs</router-link> |
      <router-link to="/ask">Ask</router-link> |
      <router-link to="/item">Item</router-link> |
      <router-link to="/user">User</router-link>
    </div>
</template>

<script>
    export default {
      name: "ToolBar",
    }
</script>

<style scoped>
.header {
  color: burlywood;
  background-color: aquamarine;
  display: flex;
  padding: 8px;
}
.header a:active {
  color: red;
}
.header a {
  color: burlywood;
}
</style>
