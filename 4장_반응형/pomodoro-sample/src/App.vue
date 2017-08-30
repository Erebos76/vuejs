<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }

    .fade-enter, .fade-leave-active {
        opacity: 0
    }
</style>

<template>
    <div id="app" class="container">
        <h2>
            <span>{{ 'Pomodoro' | uppercase | addspace }}</span>
            <controls-component></controls-component>
        </h2>
        <state-title-component v-bind:isworking="isworking"></state-title-component>
        <countdown-component></countdown-component>
        <transition name="fade">
            <kittens-component v-show="!isworking"></kittens-component>
        </transition>
    </div>
</template>

<script>
    import ControlsComponent from './components/ControlsComponent.vue';
    import CountdownComponent from './components/CountdownComponent.vue';
    import KittensComponent from './components/KittensComponent.vue';
    import StateTitleComponent from './components/StateTitleComponent.vue';

    window.data = {
        isworking: true
    };

    export default {
        components: {
            ControlsComponent,
            CountdownComponent,
            KittensComponent,
            StateTitleComponent
        },
        data() {
            return window.data
        }
    }
</script>

