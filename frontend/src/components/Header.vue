<template>
  <header>
    <div class="header-container">

      <div class="header-center">
        <a href="/"><h1>sksggg123</h1></a>
      </div>

      <div class="header-righrt">
        <a href="/login/github"><i class="fab fa-github-square fa-3x"></i></a>
      </div>

    </div>
  </header>
</template>
import
<script>
    export default {

    }
</script>

<style scoped>
  h1 {
    color: cornflowerblue;
    font-weight: 900;
    margin: 2.5rem 0 1.5rem;
  }

  .header-container {
    display: flex;
  }

  .header-center {
    flex: 3;
    text-align: center;
  }

  .header-right {
    flex: 1;
    text-align: right;
  }

  .header-container a {
    text-decoration:none;
  }

  .fa-github-square {
    color: black;
    font-weight: 900;
    margin: 2.5rem 0 1.5rem;
  }

</style>
