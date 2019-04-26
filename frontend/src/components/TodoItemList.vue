<template>
  <div>
    <ul>
      <!--1 step pring list-->
      <!--<li v-for="item in contentItem" v-bind:key="contentItem" class="shadow">-->

      <!--2 step remove event-->
      <!--v-for는 내장 index가 있다.-->
      <li v-for="(items, index) in contentItem" v-bind:key="contentItem" class="shadow">
        <i class="checkBtn fas fa-check-circle"
           v-bind:class="{checkBtnCompleted: items.completed}"
           v-on:click="toggleComplete(items, index)">
        </i>

        <!-- v-bind를 통해 속성을 boolean값으로 동적 활성화 가능 -->
        <span v-bind:class="{textCompleted: items.completed}">{{ items.item }}</span>
        <span class="removeBtn" v-on:click="removeItem(items, index)">
            <i class="fas fa-trash"></i>
          </span>
      </li>
    </ul>

  </div>
</template>

<script>
  import { getStorageJSON } from '../api/index.js';

  export default {
    data: function() {
      return {
        contentItem: [],
      }
    },
    methods: {
      // remove content
      removeItem: function (items, index) {
        localStorage.removeItem(items.item);
        // 기존배열을 변경해서 화면에 반영해 주는 역할 => splice
        this.contentItem.splice(index, 1);
      },

      toggleComplete: function(items, index) {
        console.log(items);
        items.completed = !items.completed;
        // localStorage 업데이트 순서 -> 기존삭제 -> 신규로 넣기
        localStorage.removeItem(items.item);
        localStorage.setItem(items.item, JSON.stringify(items));
      },

      // json parsing url landing function
      landing: function (url) {
        window.location.href = url;
      },

    },
    // component instance가 생성되자 마자 실행되는 lifecycle hook.
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
    }
  }
</script>

<style scoped>
  ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
  }
  li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: burlywood;
    border-radius: 5px;
  }
  .removeBtn {
    margin-left: auto;
    color: #de4343;
  }
  .checkBtn {
    line-height: 45px;
    color: dodgerblue;
    margin-right: 5px;
  }
  .checkBtnCompleted {
    color: #b3adad;
  }
  .textCompleted {
    text-decoration: line-through;
    color: aliceblue;
  }
</style>
