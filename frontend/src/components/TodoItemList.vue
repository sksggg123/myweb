<template>
  <div>

    <transition-group name="list" tag="ul">
      <!--<li v-for="(items, index) in propsdata" v-bind:key="items" class="shadow">-->
      <li v-for="(items, index) in this.$store.state.todoItems" v-bind:key="items" class="shadow">
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
    </transition-group>

  </div>
</template>

<script>
  export default {
    // props: ['propsdata'],
    methods: {
      // remove content
      removeItem (items, index) {
        // this.$emit('removeItemForTodoItemComponent', items, index);
        this.$store.commit('removeItem', {items, index});
      },
      toggleComplete(items, index) {
        // this.$emit('toggleComplete', items, index);
        this.$store.commit('toggleCompleted', {items, index});
      },
    },
    created() {
      this.$store.dispatch('getPrivateGitHubStorageJSON');
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

  /* 리스트 아이템 트래지션 효과 */
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
</style>
