<script setup lang="ts">
import { ref } from 'vue';

const heading = ref('this is heading value in child')

</script>

<template>
    <h1>this is scoped slot child componet</h1>
    <!-- 将heading变量的值绑定到插槽，对应的键名是headingValue -->
    <slot name="heading" v-bind:headingValue="heading"></slot>
</template>

<style scoped></style>