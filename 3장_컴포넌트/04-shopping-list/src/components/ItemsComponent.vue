<style scoped>
</style>

<template>
    <div>
        <item-component v-for="item in items" :item="item" :key="item.name"></item-component>
    </div>
</template>

<script>
    import ItemComponent from './ItemComponent.vue';

    export default {
        components: {
            ItemComponent
        },
        props: ['items'],
    }
</script>