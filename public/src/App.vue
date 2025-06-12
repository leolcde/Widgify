<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>

  <div class="left_of_screen"> 
    <h1 class="title">Widgify</h1>
  </div>

  <div class="right_of_screen">
    <button>Login</button>
    <button>Register</button>
  </div>

</template>

<style>

body
{
  background: linear-gradient(rgb(0, 66, 189), rgb(122, 168, 255));
}

.title
{
  color: white;
}

.right_of_screen
{
  display: flex;
  margin-right: 80%;
}

.left_of_screen
{
  display: flex;
  margin-right: 80%;
}
</style>
