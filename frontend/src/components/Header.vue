<template>
  <header>
    <div class="header-container">

      <div class="header-center">
        <router-link to="/todo"><i class="fas fa-list-alt fa-3x"></i></router-link>
        <router-link to="/github"><i class="fab fa-github-square fa-3x"></i></router-link>
      </div>

    </div>
  </header>
</template>

<script>
    export default {
      name: "HeaderArea",
    }
</script>

<style scoped>
  h3 {
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

  .fa-list-alt {
    color: black;
    font-weight: 900;
    margin: 2.5rem 0 1.5rem;
  }

  .fa-github-square {
    color: black;
    font-weight: 900;
    margin: 2.5rem 0 1.5rem;
  }

</style>
