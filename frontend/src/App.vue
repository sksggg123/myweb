<!--스크립트 참고 url : https://focuspro.tistory.com/3 -->
<template>
  <div id="app">
    <header-area/>
    <!-- v-on:addTodoItem은 하위 컴포넌트 TodoItem에서 this.$emit으로 이벤트 발동 시킨것을 잡고 addOneItem 메서드를 실행시키는 것-->
    <todo-items v-on:addTodoItem="addOneItem"/>

    <todo-item-list v-bind:propsdata="contentItem"
                    v-on:removeItemForTodoItemComponent="removeItem"
                    v-on:toggleComplete="toggleCompleted"/>

    <footer-area v-on:clearAll="clearAllItems"/>
  </div>
</template>

<script>
import ContentsArea from './components/Contents.vue'
import ContentList from './components/ContentList.vue'
import TodoItems from './components/TodoItems.vue'
import TodoItemList from './components/TodoItemList.vue'

export default {
  data: function() {
    return {
      contentItem: [],
    }
  },
  methods: {
    addOneItem: function (todoItem) {
      var obj = {completed: false, item: todoItem};
      // local storage save
      // javascript 객체를 string type으로 변환해주는 것 -> JSON.stringify()
      localStorage.setItem(todoItem, JSON.stringify(obj));
      // push는 javascript API이고 배열에 마지막에 요소를 추가한
      this.contentItem.push(obj);
    },
    removeItem: function (items, index) {
      localStorage.removeItem(items.item);
      // 기존배열을 변경해서 화면에 반영해 주는 역할 => splice
      this.contentItem.splice(index, 1);
    },
    toggleCompleted: function (items, index) {
      this.contentItem[index].completed = !items.completed;
      // localStorage 업데이트 순서 -> 기존삭제 -> 신규로 넣기
      localStorage.removeItem(items.item);
      localStorage.setItem(items.item, JSON.stringify(items));
    },
    clearAllItems: function () {
      localStorage.clear();
      this.contentItem = [];
    },
  },
  created: function () {
    // localStorage data 유무 확인
    if(localStorage.length > 0) {
      for(var i=0; i<localStorage.length; i++) {
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server')
        // Contents.vue 컴포넌트에서 localStorage에서 JSON형식으로 input 됨.
          this.contentItem.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        // this.contentItem.push(localStorage.key(i));
      }
    }
  },
  components: {
    ContentsArea: ContentsArea,
    ContentList: ContentList,
    TodoItems: TodoItems,
    TodoItemList: TodoItemList,
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
