<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
    <h1 class="text-white">Home</h1>
    <button class="bg-blue-500 text-black px-4 py-2 rounded" @click="router.push('/login')">Login</button>
    <button class="bg-green-500 text-black px-4 py-2 rounded" @click="router.push('/register')">Register</button>
</template>
