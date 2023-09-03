<script setup lang="ts">
import ChildDefaultSlot from './ChildDefaultSlot.vue';
import ChildNamedSlotVue from './ChildNamedSlot.vue';
import ChildScopedSlotVue from './ChildScopedSlot.vue';


</script>

<template>
    <h1 class="container">this is parent component</h1>
    <ChildDefaultSlot>
        <h2>this is content pass from parent and want to be rendered in child position</h2>
    </ChildDefaultSlot>
    <ChildNamedSlotVue>
        <h1>ChildNamedSlotVue</h1>
        <template v-slot:heading>
            <h2>this is heading</h2>
        </template>
        <template #content>
            <h2>this is content</h2>
        </template>
    </ChildNamedSlotVue>
    <ChildScopedSlotVue>
        <h1>This is Scoped slot</h1>
        <!-- 当前slot名字为heading，同时将slot所绑定的数据绑定到变量slotValue上 -->
        <template v-slot:heading="slotValue">
        {{slotValue}}
        </template>
    </ChildScopedSlotVue>
</template>

<style scoped>
.container {
    color: brown;
}
</style>