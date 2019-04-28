<template>
  <footer>
    <div>
      <div class="clearAllContainer">
        <span class="clearAllBtn" v-on:click="clearItems">
          Clear All
        </span>
      </div>
      <div class="footer-info">
        <a><i class="fas fa-envelope-open-text"></i>: sksggg123@gmail.com </a><br/>
        <a><i class="fas fa-rss-square"></i>: https://sksggg123.github.io</a><br/>
        <a><i class="fab fa-github-square"></i>: https://github.com/sksggg123</a>
      </div>
    </div>
  </footer>
</template>

<script>
    export default {
      data: {
        return: {

        }
      },
      methods: {
        clearItems () {
          this.$store.commit('clearAllItems');
        }
      },
    }
</script>

<style scoped>
  h3 {
    position:absolute;
    bottom:0;
    width:100%;
    font-weight: 900;
    margin: 2.5rem 0 1.5rem;
    color: cornflowerblue;
  }

  .footer-info {
    position:absolute;
    bottom:0;
    width:100%;
    font-weight: 900;
    margin: 0.5rem 0 0 .5rem;
    color: cornflowerblue;
  }

  .footer-info a {
    font-size: x-small;
  }

  .clearAllContainer {
    width: 8.5rem;
    height: 50px;
    line-height: 50px;
    background-color: white;
    border-radius: 5px;
    margin: 0 auto;
  }

  .clearAllBtn {
    color: red;
    display: block;
  }
</style>
