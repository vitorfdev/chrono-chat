<script setup>
  import CreateSchedule from '../components/modals/CreateSchedule.vue'
  import CreateUser from '../components/modals/CreateUser.vue'
</script>

<template>
  <div class="flex flex-col bg-gradient-to-tr from-purple-950 from-30% to-purple-600 to-80% h-dvh">
    <header class="flex items-center w-full h-1/6">
      <img class="mx-16" src="../assets/medium-logo.svg" alt="">
    </header>
    <main class="flex justify-center items-center flex-1 px-16 w-full h-4/6">
      <!-- <CreateSchedule /> -->
      <CreateUser />
    </main>
    <footer class="flex justify-center items-end w-full h-1/6">
      <p class="text-white">© 2024 - ChronoChat</p>
    </footer>
  </div>
</template>