// vue를 읽어오지 못하기에 import로 선언
import Vue from 'vue';
// VueRouter를 사용하려면 vue를 정의한 디렉토리 위치에서 아래 명령어 실행
// npm install vue-router --save
import VueRouter from 'vue-router';
// component import 하기
import Main from '../components/Main.vue';
import PostList from '../components/PostList.vue';
import Comunity from '../components/Comunity.vue';
import Ask from "../training/Ask.vue";
import News from "../training/News.vue";
import Jobs from "../training/Jobs.vue";
import Item from "../training/Item.vue";
import User from "../training/User.vue";

Vue.use(VueRouter);

export const router = new VueRouter ({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/main',
    },
    {
      // path: url 주소
      path: '/main',
      // component: url 주소로 갔을 때 표시될 컴포넌트
      component: Main,
    },
    {
      path: '/list',
      component: PostList,
    },
    {
      path: '/comunity',
      component: Comunity,
    },
    {
      path: '/ask',
      component: Ask,
    },
    {
      path: '/news',
      component: News,
    },
    {
      path: '/jobs',
      component: Jobs,
    },
    {
      path: '/item',
      component: Item,
    },
    {
      path: '/user',
      component: User,
    },
  ]
})
