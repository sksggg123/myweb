<template>
  <div id="app">
    <header-area/>
    <todo-items/>
    <todo-item-list/>
    <footer-area/>
  </div>
</template>

<script>
import ContentsArea from './components/Contents.vue'
import ContentList from './components/ContentList.vue'
import TodoItems from './components/TodoItems.vue'
import TodoItemList from './components/TodoItemList.vue'

export default {
  components: {
    ContentsArea,
    ContentList,
    TodoItems,
    TodoItemList,
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
