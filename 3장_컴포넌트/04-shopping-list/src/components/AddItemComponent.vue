<style scoped>
</style>

<template>
    <div>
        <div class="input-group">
            <input type="text" class="input form-control" v-on:keyup.enter="addItem" v-model="newItem" placeholder="add shopping list item">
            <span class="input-group-btn">
                <button class="btn btn-default" type="button" v-on:click="addItem">Add!</button>
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                newItem: ''
            }
        },
        props: ['items'],
        methods: {
            addItem() {
                let text;

                text = this.newItem.trim();
                if (text) {
                    this.items.push({
                        text: text,
                        checked: false
                    });
                    this.newItem = '';
                }
            }
        }
    }
</script>