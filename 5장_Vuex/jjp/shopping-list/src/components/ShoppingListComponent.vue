<template>
    <div>
        <div class="">
            <hr />
            <change-title-component : v-on:changetitle="onChangeTitle"></change-title-component>
        </div>
    </div>
</template>

<script>
export default {
    props: ['id', 'title', 'items'],
}
</script>