<style scoped>
</style>


<template>
    <div>
        <em>change the title of your shopping list here</em>
        <input :value="value" @input="onInput" />
    </div>
</template>

<script>
    export default {
        props: ['value', 'title'],
        methods: {
            onChangeTitle(id, text) {
                _.findWhere(this.shoppinglists, {id:id}).title = text;
            }
        }
    }
</script>