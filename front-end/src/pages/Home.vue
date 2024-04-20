<script>
  import CreateSchedule from '../components/modals/CreateSchedule.vue'
  import CreateUser from '../components/modals/CreateUser.vue'

  export default {
    components: {
      CreateSchedule,
      CreateUser
    },
    data() {
      return {
        schedule: true
      }
    }
  }
</script>

<template>
  <div class="flex flex-col bg-gradient-to-tr from-purple-950 from-30% to-purple-600 to-80% h-dvh">
    <header class="flex items-center w-full h-1/6">
      <img class="mx-16" src="../assets/medium-logo.svg" alt="">
    </header>
    <main class="flex justify-center items-center flex-1 px-16 w-full h-4/6">
      <div class="flex-col justify-center w-full h-full">
        <Transition>
          <div v-if="schedule">
            <div class="flex w-full">
              <button @click="schedule = true" class="bg-white font-bold text-3xl text-purple-600 w-2/4 rounded-t-xl h-12">Agendamentos</button>
              <button @click="schedule = false" class="bg-purple-600 font-bold text-3xl text-white w-2/4 rounded-t-xl h-12">Usuários</button>
            </div>
          </div>
          <div v-else>
            <div class="flex w-full">
              <button @click="schedule = true" class="bg-purple-600 font-bold text-3xl text-white w-2/4 rounded-t-xl h-12">Agendamentos</button>
              <button @click="schedule = false" class="bg-white font-bold text-3xl text-purple-600 w-2/4 rounded-t-xl h-12">Usuários</button>
            </div>
          </div>
        </Transition>
        <Transition>
          <CreateSchedule v-if="schedule"/>
          <CreateUser v-else/>
        </Transition>
      </div>
    </main>
    <footer class="flex justify-center items-end w-full h-1/6">
      <p class="text-white">© 2024 - ChronoChat</p>
    </footer>
  </div>
</template>