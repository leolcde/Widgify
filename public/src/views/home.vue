<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
    <h1>Home</h1>
    <button class="button_auth" @click="router.push('/login')">Login</button>
    <button class="button_auth" @click="router.push('/register')">Register</button>
</template>

<style scoped>
h1
{
    color: white;
}

.button_auth {
  padding: 17px 40px;
  border-radius: 10px;
  border: none;
  outline: none;
  background-color: rgb(56, 136, 255);
  letter-spacing: 1.5px;
  font-size: 15px;
  transition: all 0.3s ease;
  box-shadow: rgb(46, 95, 201) 0px 10px 0px 0px;
  color: hsl(0, 0%, 100%);
  cursor: pointer;
  gap: 3rem;
}

.button_auth:hover {
  box-shadow: rgb(46, 152, 201) 0px 7px 0px 0px;
}

.button_auth:active {
  background-color: rgb(22, 160, 214);
  box-shadow: rgb(46, 126, 201) 0px 0px 0px 0px;
  transform: translateY(5px);
  transition: 200ms;
}

</style>
