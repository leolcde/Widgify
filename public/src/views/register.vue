<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { register } from '../utils/register.ts'

const email = ref('')
const username = ref('')
const name = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

async function handleRegister()
{
  error.value = ''
  try {
    await register(email.value, username.value, name.value, password.value)
    sessionStorage.setItem('justRegistered', 'true')
    alert("You are registered! 😁")
    router.push('/')
  } catch (err) {
    error.value = err.message || 'Registration failed.'
  }
}
</script>

<template>

    <h1 class="title">Register</h1>

    <form @submit.prevent="handleRegister()">
      <div class="form-textfield">
          <input v-model="email" placeholder="Email" required />
          <input v-model="username" placeholder="Username" required />
          <input v-model="name" placeholder="Name" required />
          <input v-model="password" placeholder="Password" required />
      </div>
      <button type="submit" class="sub-button">Register</button>
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

.sub-button
{
    height: 50px;
}
</style>
