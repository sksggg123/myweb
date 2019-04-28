<template>
  <div class="inputBox shadow">
    <!--input box-->
    <input type="text" v-model="newInputItem" v-on:keyup.enter="addContent"> <!--keyup.enter를 통해 엔터로 입력가능하게-->
    <!--input box의 값을 가져오기 위한 action trigger-->
    <!--<button v-on:click="addContent">add</button>-->
    <span class="addContainer" v-on:click="addContent">
      <i class="fas fa-plus-square addBtn"></i> <!--aewsome icon 으로 생성한 것-->
    </span>

    <!--Modal attribute 추가-->
    <Modal v-if="showModal" @close="showModal = false">
      <!--slot의 역할 : 특벙 컴포넌트의 일부 UI를 재사용, 재정의-->
      <h4 slot="header">
        경고!
        <!-- v-on:click == @click -->
        <i class="closeModalBtn fas fa-times fa-3x" @click="showModal = false"></i>
      </h4>

      <h3 slot="body">
        input data is "N U L L"
      </h3>

      <h5 slot="footer">
        developer: sksggg123
        <button class="modal-default-button" @click="showModal = false">
          confirm
        </button>
      </h5>
    </Modal>
  </div>
</template>

<script>
  import Modal from './common/Modal.vue';

  export default {
    data() {
      return {
        newInputItem: "",
        showModal: false,
      }
    },
    methods: {
      addContent() {
        if(this.newInputItem !== '') {
          // this.$emit('addTodoItem', this.newInputItem);
          this.$store.commit('addOneItem', this.newInputItem);
          this.clearInput();
        } else {
          this.showModal = !this.showModal;
        }
      },
      clearInput() {
        // input box init
        this.newInputItem = '';
      },
    },
    components: {
      Modal,
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
  .closeModalBtn {
    color: #42b983
  }
</style>
