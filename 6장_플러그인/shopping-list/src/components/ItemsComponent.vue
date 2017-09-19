<template>
    <ul>
      <item-component v-for="(item, index) in items" :item="item" :id="id" :index="index"></item-component>
    </ul>
  </template>

<script>
import ItemComponent from './ItemComponent';
export default {
    components: {
        ItemComponent
    },
    props:['items', 'id']
  }
</script>