<script setup lang="ts">

</script>

<template>
    <span class="container">this is children componet</span>
    <!-- 默认插槽 -->
    <slot>this is slot default content in child</slot>
</template>

<style scoped>
.container {
    color: rgb(19, 68, 52);
}
</style>