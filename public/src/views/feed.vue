<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center p-6">
    <h1 class="text-4xl font-bold text-gray-800 mb-6">📰 Feed</h1>
    <!-- <button class="text-black font-semibold px-6 py-3 rounded-xl" @click="router.push('/profile')">👤 Go to Profile</button> -->
    <div class="flex justify-center items-center gap-12 h-full">
      <div
        class="bg-gradient-to-b from-gray-800/40 to-transparent p-[4px] rounded-[16px]"
      >
        <button
          class="group p-[4px] rounded-[12px] bg-gradient-to-b from-gray-700 to-gray-600 shadow-[0_2px_4px_rgba(0,0,0,0.7)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.6)] active:shadow-[0_0px_1px_rgba(0,0,0,0.8)] active:scale-[0.995] transition-all duration-200"
        >
          <div
            class="bg-gradient-to-b from-gray-600 to-gray-700 rounded-[8px] px-3 py-2"
          >
            <div class="flex gap-2 items-center">
              <span class="font-semibold text-white">Get Started</span>
            </div>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>
