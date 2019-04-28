import Vue from 'vue';
import Vuex from 'vuex';

// .use는 Vue의 plugin이고 의미는 전역으로 사용을 할때
// this.$store과 같이 사용가능
Vue.use(Vuex);

const storage = {
  fetch() {
    const arr = [];

    if(localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server')
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
      }
    }
    return arr;
  },
}

import { axios } from '../api/index.js'
import {getStorageJSON} from "../api/index";

export const store = new Vuex.Store({
  // vuex 에서 data를 관리 -> state
  state: {
    todoItems: storage.fetch(),
  },
  // vuex 에서 동기 method를 정의 -> mutations
  // 외부에서 호출은 this.$store.commit('state', obj1, obj2, ....)
  mutations: {
    addOneItem(state, todoItem) {
      const obj = {completed: false, item: todoItem};
      localStorage.setItem(todoItem, JSON.stringify(obj));
      // this.contentItem.push(obj);
      state.todoItems.push(obj);
    },
    removeItem(state, payload) {
      localStorage.removeItem(payload.items.item);
      state.todoItems.splice(payload.index, 1);
    },
    toggleCompleted(state, payload) {
      state.todoItems[payload.index].completed = !payload.items.completed;
      localStorage.removeItem(payload.items.item);
      localStorage.setItem(payload.items.item, JSON.stringify(payload.items));
    },
    GitHubStorageJSON(state, payload) {
      const obj = JSON.parse(payload);
      for(let i=0; i<obj.length; i++) {
        const temp = {
          completed: false,
          item: obj[i].description
        }
        state.todoItems.push(temp);
      }
    },
    clearAllItems(state) {
      localStorage.clear();
      state.todoItems = [];
    },
  },
  // vuex 에서 비동기 method를 정의 -> action
  // 외부에서 호출은 this.$store.dispather('context')
  actions: {
    getPrivateGitHubStorageJSON(context) {
       getStorageJSON()
         .then(response =>
            context.commit('GitHubStorageJSON', JSON.stringify(response.data))
          )
         .catch(
           error => console.log(error)
         );
    }
  }
});
