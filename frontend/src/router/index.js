import Vue from 'vue'
import Router from 'vue-router'
import ContentList from '../components/ContentList.vue';

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
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
