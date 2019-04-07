// vue를 읽어오지 못하기에 import로 선언
import Vue from 'vue';
// VueRouter를 사용하려면 vue를 정의한 디렉토리 위치에서 아래 명령어 실행
// npm install vue-router --save
import VueRouter from 'vue-router';
// component import 하기
import Main from '../components/Main.vue';
import PostList from '../components/PostList.vue';
import Comunity from '../components/Comunity.vue';

Vue.use(VueRouter);

export const router = new VueRouter ({
  routes: [
    {
      // path: url 주소
      path: '/',
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
    }
  ]
})
