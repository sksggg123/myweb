<template>
  <!--<router-view></router-view>-->
  <div id="app">
    <tool-bar></tool-bar>
    <!-- index.js 에 지정한 path에 따른 랜더링 -->
    <router-view></router-view>
  </div>
</template>

<script>
  import ToolBar from './components/ToolBar.vue';
export default {
  components: {
    ToolBar,
  }
}
</script>

<style>
  body {
    padding: 0;
    margin: 0;
  }
/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
/*}*/

/*h1, h2 {*/
  /*font-weight: normal;*/
/*}*/

/*ul {*/
  /*list-style-type: none;*/
  /*padding: 0;*/
/*}*/

/*li {*/
  /*display: inline-block;*/
  /*margin: 0 10px;*/
/*}*/

/*a {*/
  /*color: #42b983;*/
/*}*/
</style>
