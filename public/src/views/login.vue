<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { login } from '../utils/login.ts'

const username = ref('')
const password = ref('')
const showPassword = ref(false)
const error = ref('')
const router = useRouter()

function togglePasswordVisibility() {
  showPassword.value = !showPassword.value
}

const handleLogin = async () => {
  error.value = ''
  try {
    await login(username.value, password.value)
    sessionStorage.setItem('justLogged', 'true')
    alert("You logged in ! 😁")
    router.push('/feed')
  } catch (err) {
    error.value = err.message || 'Login failed.'
  }
}
</script>

<template>
  <div class="flex flex-col items-center">
    <h1 class="text-white mb-6 text-2xl font-bold">Login</h1>
    
    <form @submit.prevent="handleLogin" class="flex flex-col items-center gap-4 w-full max-w-[400px]">
      <input 
        class="w-full border-2 border-transparent h-10 pl-3 outline-none bg-gray-100 rounded-lg transition-all duration-300 ease-in-out hover:border-blue-400 hover:bg-white focus:border-blue-400 focus:bg-white focus:shadow-[0_0_0_7px_rgba(74,157,236,0.2)]" 
        v-model="username" 
        placeholder="Username" 
        required 
      />
      
      <div class="relative w-full">
        <input 
          class="w-full border-2 border-transparent h-10 pl-3 pr-10 outline-none bg-gray-100 rounded-lg transition-all duration-300 ease-in-out hover:border-blue-400 hover:bg-white focus:border-blue-400 focus:bg-white focus:shadow-[0_0_0_7px_rgba(74,157,236,0.2)]" 
          :type="showPassword ? 'text' : 'password'" 
          v-model="password" 
          placeholder="Password" 
          required 
        />
        <img 
          class="absolute right-3 top-1/2 -translate-y-1/2 h-6 cursor-pointer" 
          :src="showPassword ? '../../content/eye_close.png' : '../../content/eye_open.png'" 
          @click="togglePasswordVisibility" 
        />
      </div>
      
      <button 
        type="submit" 
        class="w-full py-4 rounded-lg border-none bg-blue-500 text-grey text-base tracking-wider cursor-pointer shadow-[0_10px_0_0_rgb(46,95,201)] transition-all duration-300 ease-in-out hover:shadow-[0_7px_0_0_rgb(46,152,201)] active:bg-blue-400 active:shadow-none active:translate-y-1 active:duration-200"
      >
        Login
      </button>
      
      <p v-if="error" class="text-red-500 font-bold mt-4">{{ error }}</p>
    </form>
  </div>
</template>