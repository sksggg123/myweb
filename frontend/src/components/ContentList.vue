<template>
    <div>
      <span>
        <a v-on:click.prevent="doLogin">Github Login</a>
      </span>
      <ul>
        <li v-for="(item, index) in urlList" class="shadow">
          <i class="checkBtn fas fa-check-circle"></i>
          <a v-on:click="landing(item.url)">{{ item.description }}</a>
        </li>
      </ul>
      <ul v-for="login in loginVO">
          {{ login.id }} | {{ login.name }}
      </ul>
    </div>
</template>

<script>
  import { getStorageJSON } from '../api/index.js';
  import { doGithubLogin } from '../api/index.js';

    export default {
      data() {
        return {
          urlList: [],
          loginVO: [],
        }
      },
      methods: {
        // json parsing url landing function
        landing (url) {
          window.location.href = url;
        },

        doLogin() {
          window.location.href = 'http://localhost:8080/sessions/github/callback';
        },

      },
      // component instance가 생성되자 마자 실행되는 lifecycle hook.
      created () {
        // axios로 정의한 함수 호출하여 통신
        getStorageJSON()
          .then(response =>
            this.urlList = response.data
          )
          .catch(response =>
            console.log(response)
          );
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
</style>
