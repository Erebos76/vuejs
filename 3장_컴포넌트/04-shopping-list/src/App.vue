<template>
    <div id="app" class="container">
        <h2>{{ title }}</h2>
        <add-item-component :items="items"></add-item-component>
        <items-component :items="items"></items-component>
        <div class="footer">
            <hr/>
            <change-title-component></change-title-component>
        </div>
    </div>
</template>

<script>
    import AddItemComponent from './components/AddItemComponent.vue';
    import ItemsComponent from './components/ItemsComponent.vue';
    import ChangeTitleComponent from './components/ChangeTitleComponent.vue';

    export default {
        name: 'app',
        components: {
            AddItemComponent,
            ItemsComponent,
            ChangeTitleComponent
        },
        data() {
            return {
                title: 'Title',
                items: [{text: 'Bananas', checked: true}, {text: 'Apples', checked: false}]
            }
        },
    };
</script>