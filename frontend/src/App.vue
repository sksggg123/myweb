<template>
  <div id="app">
    <header-area/>
    <ContentsArea/>
    <ContentList/>
    <!--<router-view/>-->
    <footer-area/>
  </div>
</template>

<script>
import ContentsArea from './components/Contents.vue'
import ContentList from './components/ContentList.vue'

export default {
  components: {
    ContentsArea,
    ContentList,
  }
}
</script>

<style>
  body {
    text-align: center;
    background-color: cornsilk;
  }
  input {
    border-style: groove;
    width: 200px;
  }
  button {
    border-style: groove;
  }
  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  }
</style>
