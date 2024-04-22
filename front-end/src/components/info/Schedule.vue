<script setup>
import axios from 'axios'

const props = defineProps({
  id: Number,
  idDB: Number,
  date: String,
  phone: String,
  message: String,
  scheduleDate: String,
  fetch: Function
})

const deleteSchedule = async () => {
  const response = await axios.delete(`http://localhost:3000/schedules/${props.idDB}`)
  console.log(response)
  props.fetch()
}

const emit = defineEmits(['editSchedule', 'sendId'])
function openEditScheduleModal() {
  emit('editSchedule')
  emit('sendId', props.idDB)
}
</script>

<template>
  <div class="flex justify-center w-full h-12 font-bold text-gray-600 px-3">
    <p class="w-1/12 text-center self-center text-xl truncate">{{ props.id }}</p>
    <p class="w-2/12 text-center self-center text-xl truncate">{{ props.date }}</p>
    <p class="w-2/12 text-center self-center text-xl truncate">{{ props.phone }}</p>
    <p class="w-4/12 text-center self-center text-xl truncate">{{ props.message }}</p>
    <p class="w-2/12 text-center self-center text-xl truncate">{{ props.scheduleDate }}</p>
    <div class="flex justify-around items-center w-1/12">
      <button @click="openEditScheduleModal" class="bg-purple-600 flex justify-center items-center rounded w-14 p-1 h-7">
        <img src="../../assets/edit.svg" alt="Edit Button">
      </button>
      <button @click="deleteSchedule" class="bg-purple-600 flex justify-center items-center rounded w-14 p-1 h-7">
        <img src="../../assets/delete.svg" alt="Delete Button">
      </button>
    </div>
  </div>
</template>