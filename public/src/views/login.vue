<script setup>

import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { login } from '../utils/login';

const username = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

async function handleLogin()
{
  error.value = ''
  try {
    const data = await login(email.value, password.value)
    localStorage.setItem('token', data.token)
    router.push('/todo')
  } catch (err) {
    error.value = err.message
  }
}

</script>

<template>

    <h1 class="title">Login</h1>

    <form @submit.prevent="handleLogin()">
      <div class="form-textfield">
          <input v-model="username" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" class="sub-button">login</button>
      </div>
    </form>

</template>

<style scoped>
.title
{
    color: white;
}

.form-textfield
{
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.sub-button {
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

.sub-button:hover {
  box-shadow: rgb(46, 152, 201) 0px 7px 0px 0px;
}

.sub-button:active {
  background-color: rgb(22, 160, 214);
  box-shadow: rgb(46, 126, 201) 0px 0px 0px 0px;
  transform: translateY(5px);
  transition: 200ms;
}
</style>
