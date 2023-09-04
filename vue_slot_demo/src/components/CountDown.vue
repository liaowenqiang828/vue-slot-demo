<template>
    <input type="text" placeholder="请输入" v-model="value" />
    <button @click="sendCode">{{ buttonText }}</button>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const countDown = ref(60);
const value = '';
const buttonText = ref('发送验证码')

const sendCode = () => {
    buttonText.value = countDown.value + 's';
    const timer = setInterval(() => {
        countDown.value--;
        buttonText.value = countDown.value + 's';
        if(countDown.value === 0) {
            clearInterval(timer);
            buttonText.value = '发送验证码';
            countDown.value = 60
        }
    }, 1000)
}

</script>

<style scoped>
</style>