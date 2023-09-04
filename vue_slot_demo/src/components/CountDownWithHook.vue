<script setup lang="ts">
import { ref } from 'vue';
import useSendCode from '@/hooks/useSendCode'

const {buttonText, sendCode} = useSendCode(60);
const value = ref('');
</script>

<template>
    <input type="text" v-model="value" placeholder="请输入" />
    <button @click="sendCode">{{ buttonText }}</button>
</template>