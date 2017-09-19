<template>
  <li :class="{ 'removed': item.checked }">
    <div class="checkbox">
      <label>
          <input type="checkbox" v-model="item.checked"> {{ item.text }}
        </label>
        <i class="glyphicon glyphicon-remove" @click="deleteItem({id, index})">{{index}}</i>
    </div>
  </li>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    props: ['item', 'id', 'index'],    
    methods: mapActions(['updateList', 'deleteItem']),
    watch: {
        'item.checked' : function() {
            this.updateList(this.id)
        }
    }
}
</script>

<style scoped>
  .removed {
    color: gray;
  }
  .removed label {
    text-decoration: line-through;
  }
  li {
    list-style-type: none;
  }
  li span {
    margin-left: 5px;
  }

  i {font-size:x-small;padding-left: 3px;cursor: pointer;}

</style>
