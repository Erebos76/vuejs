<template>
    <a :href="href" :aria-controls='id', role="tab", data-toggle='tab'>{{title}}</a>
</template>
<script>
    export default {
        props: ['id', 'title'],
        computed: {
            href: function() {
                return '#' + this.id;
            }
        }
    }
</script>