<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
  <RouterLink to="/" class="logo">
    <div>Widgify</div>
  </RouterLink>
</template>

<style>
body {
  background: linear-gradient(rgb(0, 66, 189), rgb(122, 168, 255));
}

.logo {
  position: fixed;
  top: 1rem;
  left: 1rem;
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
  text-decoration: none;
}

.title {
  color: white;
}

.right_of_screen {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  padding-right: 2rem;
}

.left_of_screen {
  display: flex;
  margin-right: auto;
}

.copyright {
  color: lightgrey;
  font-style: italic;
  position: sticky;
  text-align: center;
  bottom: -100px;
}
</style>
