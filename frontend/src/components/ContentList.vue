<template>
    <div>
      <ul>
        <!--1 step pring list-->
        <!--<li v-for="item in contentItem" v-bind:key="contentItem" class="shadow">-->

        <!--2 step remove event-->
        <!--v-for는 내장 index가 있다.-->
        <li v-for="(item, index) in contentItem" v-bind:key="contentItem" class="shadow">
          <span class="removeBtn" v-on:click="removeItem(item, index)">
            <i class="fas fa-trash"></i>
          </span>
          {{ item }}
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
      data: function() {
        return {
          contentItem: []
        }
      },
      methods: {
        removeItem: function (item, index) {
          localStorage.removeItem(item);
          // 기존배열을 변경해서 화면에 반영해 주는 역할 => splice
          this.contentItem.splice(index, 1);
        }
      },
      // component instance가 생성되자 마자 실행되는 lifecycle hook.
      created: function () {
        // localStorage data 유무 확인
        if(localStorage.length > 0) {
          for(var i=0; i<localStorage.length; i++) {
            if(localStorage.key(i) !== 'loglevel:webpack-dev-server')
            this.contentItem.push(localStorage.key(i));
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
    text-align: right;
    line-height: 45px;
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
