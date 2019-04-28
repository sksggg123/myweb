<template>
  <div>
    <ul>
      <!--1 step pring list-->
      <!--<li v-for="item in contentItem" v-bind:key="contentItem" class="shadow">-->

      <!--2 step remove event-->
      <!--v-for는 내장 index가 있다.-->
      <li v-for="(items, index) in propsdata" v-bind:key="contentItem" class="shadow">
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
  export default {
    props: ['propsdata'],
    methods: {
      // remove content
      removeItem: function (items, index) {
        this.$emit('removeItemForTodoItemComponent', items, index);
      },
      toggleComplete: function(items, index) {
        this.$emit('toggleComplete', items, index);

        // items.completed = !items.completed;
        // // localStorage 업데이트 순서 -> 기존삭제 -> 신규로 넣기
        // localStorage.removeItem(items.item);
        // localStorage.setItem(items.item, JSON.stringify(items));
      },
    },
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
