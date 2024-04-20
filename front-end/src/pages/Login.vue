<script setup>
import LoginForm from '../components/LoginForm.vue';
</script>

<template>
  <div class="flex flex-col bg-gradient-to-tr from-purple-950 from-30% to-purple-600 to-80% h-dvh">
    <header class="flex justify-center items-center w-full h-1/4">
      <img src="../assets/big-logo.svg" alt="">
    </header>
    <main class="flex w-full justify-around items-center flex-1 px-16">
        <h1 class="text-white font-bold text-6xl">Entre em sua conta<br>para agendar</h1>
        <LoginForm class="self-end"/>
    </main>
    <footer class="flex justify-center items-end w-full h-1/4">
      <p class="text-white">© 2024 - ChronoChat</p>
    </footer>
  </div>
</template>
