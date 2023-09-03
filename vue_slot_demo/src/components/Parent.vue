<script setup lang="ts">
import ChildDefaultSlot from './ChildDefaultSlot.vue';


</script>

<template>
    <h1 class="container">this is parent component</h1>
    <ChildDefaultSlot>
        <h2>this is content pass from parent and want to be rendered in child position</h2>
    </ChildDefaultSlot>
</template>

<style scoped>
.container {
    color: brown;
}
</style>