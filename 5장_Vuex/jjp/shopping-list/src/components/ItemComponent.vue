<template>
    <li :class="{'removed' : item.checked}">
        <div class="checkbox">
            <label><input type="checkbox">{{item.text}}</label>
        </div>
    <li>
</template>

<style scoped>
    .removed {color : gray;}
    .removed span {text-decoration: line-through}
    li{list-style-type:none}
    li span{margin-left:5px;}
</style>

<script>
    export default {
        props: ['item']
    }
</script>