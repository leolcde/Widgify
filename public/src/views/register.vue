<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { register } from '../utils/register.ts'

const email = ref('')
const username = ref('')
const name = ref('')
const password = ref('')
const showPassword = ref(false)
const error = ref('')
const router = useRouter()

function togglePasswordVisibility()
{
  showPassword.value = !showPassword.value
}

const handleRegister = async () => {
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
  <div class="register-container">
    <h1 class="title">Register</h1>

    <form @submit.prevent="handleRegister" class="form-textfield">
      <input class="input" v-model="email" type="email" placeholder="Email" required />
      <input class="input" v-model="username" placeholder="Username" required />
      <input class="input" v-model="name" placeholder="Name" required />
      <input class="input" :type="showPassword ? 'text' : 'password'" v-model="password" placeholder="Password" required />
      <img class="toggle-password" :src="showPassword ? '../../content/eye_close.png' : '../../content/eye_open.png'" @click="togglePasswordVisibility" />
      <button type="submit" class="sub-button">Register</button>

      <p v-if="error" class="error-message">{{ error }}</p>
    </form>
  </div>
</template>

<style scoped>
.register-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  color: white;
  margin-bottom: 1.5rem;
}

.form-textfield {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 400px;
}

.input {
  width: 100%;
  border: 2px solid transparent;
  height: 2.5em;
  padding-left: 0.8em;
  outline: none;
  background-color: #F3F3F3;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.input:hover,
.input:focus {
  border: 2px solid #4A9DEC;
  box-shadow: 0 0 0 7px rgba(74, 157, 236, 0.2);
  background-color: white;
}

.toggle-password {
  position: absolute;
  right: 54em;
  top: 62.3%;
  transform: translateY(-50%);
  height: 1.5em;
  cursor: pointer;
}

.sub-button {
  width: 100%;
  padding: 17px;
  border-radius: 10px;
  border: none;
  background-color: rgb(56, 136, 255);
  font-size: 15px;
  letter-spacing: 1.5px;
  color: white;
  cursor: pointer;
  box-shadow: rgb(46, 95, 201) 0px 10px 0px 0px;
  transition: all 0.3s ease;
}

.sub-button:hover {
  box-shadow: rgb(46, 152, 201) 0px 7px 0px 0px;
}

.sub-button:active {
  background-color: rgb(22, 160, 214);
  box-shadow: none;
  transform: translateY(5px);
  transition: 200ms;
}

.error-message {
  color: red;
  font-weight: bold;
  margin-top: 1rem;
}
</style>
