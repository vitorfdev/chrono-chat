<script setup>
import axios from 'axios'
import moment from 'moment'
import Schedule from './info/Schedule.vue'
import CreateSchedule from './modals/CreateSchedule.vue'
import EditSchedule from './modals/EditSchedule.vue'
import { onMounted, onUnmounted, ref } from 'vue'

const schedules = ref([])

const fetchSchedules = async () => {
  const response = await axios.get('http://localhost:3000/schedules')
  const rawSchedules = response.data

  rawSchedules.forEach(schedule => {
    schedule.formattedCreateDate = moment(schedule.createDate, 'DDMMYYYY-HHmm').format('DD/MM/YYYY HH:mm');
    schedule.formattedScheduleDate = moment(schedule.scheduleDate, 'DDMMYYYY-HHmm').format('DD/MM/YYYY HH:mm');
  });

  schedules.value = rawSchedules
}

const showModal = ref(false)
const showEditScheduleModal = ref(false)

function openEditScheduleModal() {
  showEditScheduleModal.value = true
}

const closeEscape = event => {
  if (event.key == 'Escape') {
    showModal.value = false
    showEditScheduleModal.value = false
  }
}

onMounted(() => {
  window.addEventListener('keydown', closeEscape)
  fetchSchedules()
})

onUnmounted(() => {
  window.removeEventListener('keydown', closeEscape)
})
</script>

<template>
  <div class="bg-white flex-col p-4 overflow-hidden">
    <div class="bg-gray-200 flex-col rounded-lg overflow-hidden">
      <div class="flex justify-between font-bold px-3 py-2">
        <p class="w-1/12 text-center">Id</p>
        <p class="w-2/12 text-center">Criado em</p>
        <p class="w-2/12 text-center">Telefone</p>
        <p class="w-4/12 text-center">Mensagem</p>
        <p class="w-2/12 text-center">Agendado às</p>
        <p class="w-1/12 text-center">Operações</p>
      </div>
      <div>
        <ul class="min-h-96 max-h-96 overflow-y-auto">
          <li v-for="(schedule, index) in schedules" :key="index">
            <Schedule :id="index" :idDB="schedule.id" :date="schedule.formattedCreateDate" :phone="schedule.phone" :message="schedule.message"
              :scheduleDate="schedule.formattedScheduleDate" :fetch="fetchSchedules" @editSchedule="openEditScheduleModal"/>
          </li>
        </ul>
      </div>
      <div>
        <button @click="showModal = true" class="bg-purple-600 rounded-lg p-2 w-64 text-white hover:bg-purple-800 duration-200 m-2">Agendar
          Mensagem</button>
      </div>
    </div>
  </div>

  <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white p-4 rounded shadow-md w-2/4 h-3/4">
      <button @click="showModal = false" class="bg-white hover:bg-slate-400 w-8 h-8 rounded-full m-4 absolute top-0 right-0 align-middle font-bold text-center text-xl text-purple-600 hover:text-purple-800">&times</button>
      <CreateSchedule />
    </div>
  </div>

  <div v-if="showEditScheduleModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white p-4 rounded shadow-md w-2/4 h-3/4">
      <button @click="showEditScheduleModal = false" class="bg-white hover:bg-slate-400 w-8 h-8 rounded-full m-4 absolute top-0 right-0 align-middle font-bold text-center text-xl text-purple-600 hover:text-purple-800">&times</button>
      <EditSchedule />
    </div>
  </div>
</template>
