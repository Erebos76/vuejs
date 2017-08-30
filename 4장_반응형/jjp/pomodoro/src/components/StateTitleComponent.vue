<template>
  h3 {{ isworking ? work }}
</template>

<style scoped>
</style>

<script>
  export default {
    data () {
      return {
        workingtitle : 'Work!',
        restingtitle: 'Rest!'
      }
    },
    props: ['isworking']
  }
</script>
