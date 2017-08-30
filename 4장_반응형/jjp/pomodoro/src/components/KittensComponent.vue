<template>
  <div class="well">
    <img v-bind:src="catimgsrc" />
  </div>

  <div v-if="1 < 4 ">hello</div>

  <div v-if="Math.random() * 10 < 6">hello</div>

  <div v-if="new Date().getHurs() >= 16">Beer Time!</div>

  <div>
    <h1 v-if="!isadmin">Beer Time!</h1>
  </div>
    
</template>

<style scoped>
</style>

<script>
  export default {
    data() {
      return {
        catimgsrc: "http://thecatapi.com/api/images/get?size=med",
        isadmin: false
      }
    }
  }
</script>
