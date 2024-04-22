<script>
  import ScheduleMenu from '../components/ScheduleMenu.vue'
  import UserMenu from '../components/UserMenu.vue'

  export default {
    components: {
      ScheduleMenu,
      UserMenu
    },
    data() {
      return {
        schedule: true
      }
    }
  }
</script>

<template>
  <div class="flex flex-col bg-gradient-to-tr from-purple-950 from-30% to-purple-600 to-80% h-svh w-svw">
    <header class="flex items-center justify-between w-full h-1/6">
      <img class="mx-16" src="../assets/medium-logo.svg" alt="Logo do site">
      <button @click="this.$router.push('/')" class="bg-white hover:bg-slate-400 flex text-purple-600 rounded-lg mx-16 p-4">
        <p class="mx-2 font-bold">Sair da conta</p>
        <img class="mx-2" src="../assets/tag-cross.svg" alt="Log Off da conta">
      </button>
    </header>
    <main class="flex justify-center items-center w-svw h-svh overflow-hidden">
      <div class="flex-row">
        <div v-if="schedule" class="w-lvw">
          <button @click="schedule = true" class="bg-white font-bold text-3xl text-purple-600 w-2/4 rounded-t-xl h-12">Agendamentos</button>
          <button @click="schedule = false" class="bg-purple-600 font-bold text-3xl text-white w-2/4 rounded-t-xl h-12">Usuários</button>
        </div>
        <div v-else class="w-lvw">
          <button @click="schedule = true" class="bg-purple-600 font-bold text-3xl text-white w-2/4 rounded-t-xl h-12">Agendamentos</button>
          <button @click="schedule = false" class="bg-white font-bold text-3xl text-purple-600 w-2/4 rounded-t-xl h-12">Usuários</button>
        </div>
        <ScheduleMenu v-if="schedule"/>
        <UserMenu v-else/>
      </div>
    </main>
    <footer class="flex justify-center items-end w-full h-1/6">
      <p class="text-white">© 2024 - ChronoChat</p>
    </footer>
  </div>
</template>