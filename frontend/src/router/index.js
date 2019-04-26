import Vue from 'vue'
import Router from 'vue-router'
import TodoItems from '../components/TodoItems.vue'
import TodoItemList from '../components/TodoItemList.vue'
import Contents from '../components/Contents.vue';
import ContentList from '../components/ContentList.vue';

Vue.use(Router)

export default new Router({
  mode: "abstract",
  routes: [
    {
      path: '/todo',
      component: TodoItemList,
      // components: {
      //   TodoItems,
      //   TodoItemList,
      // }
    },
    {
      path: '/github',
      // components: {
      //   Contents,
      //   ContentList,
      // }
      component: ContentList,
    }
  ]
})
