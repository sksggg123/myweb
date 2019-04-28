<template>
    <div class="inputBox shadow">
      <!--input box-->
      <input type="text" v-model="newInputItem" v-on:keyup.enter="addContent"> <!--keyup.enter를 통해 엔터로 입력가능하게-->
      <!--input box의 값을 가져오기 위한 action trigger-->
      <!--<button v-on:click="addContent">add</button>-->
      <span class="addContainer" v-on:click="addContent">
        <i class="fas fa-plus-square addBtn"></i> <!--aewsome icon 으로 생성한 것-->
      </span>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          newInputItem: "",
        }
      },
      methods: {
        addContent() {
          if(this.newInputItem !== '') {
            var obj = {completed: false, item: this.newInputItem};
            // local storage save
            // javascript 객체를 string type으로 변환해주는 것 -> JSON.stringify()
            localStorage.setItem(this.newInputItem, JSON.stringify(obj));
            // input box init method
            this.clearInput();
          }
        },
        clearInput() {
          // input box init
          this.newInputItem = '';
        }
      }
    }
</script>

<style scoped>
  input:focus {
    outline: none;
  }
  .inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
  }
  .inputBox input {
    border-style: none;
    font-size: 0.9rem;
  }
  .addContainer {
    float: right;
    background: linear-gradient(to right, cornflowerblue, darkcyan);
    display: block;width: 3rem;
    border-radius: 0 5px 5px 0;
  }
  .addBtn {
    color: white;
    vertical-align: middle;
  }
</style>
