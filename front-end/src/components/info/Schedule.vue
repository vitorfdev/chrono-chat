<script setup>

defineProps({
  id: Number,
  date: String,
  phone: String,
  message: String,
  scheduleDate: String
})

const emit = defineEmits(['editSchedule']);

function openEditScheduleModal() {
  emit('editSchedule');
}
</script>

<template>
  <div class="flex justify-center w-full h-12 font-bold text-gray-600 px-3">
    <p class="w-1/12 text-center self-center text-xl truncate">{{ id }}</p>
    <p class="w-2/12 text-center self-center text-xl truncate">{{ date }}</p>
    <p class="w-2/12 text-center self-center text-xl truncate">{{ phone }}</p>
    <p class="w-4/12 text-center self-center text-xl truncate">{{ message }}</p>
    <p class="w-2/12 text-center self-center text-xl truncate">{{ scheduleDate }}</p>
    <div class="flex justify-around items-center w-1/12">
      <button @click="openEditScheduleModal" class="bg-purple-600 flex justify-center items-center rounded w-14 p-1 h-7">
        <img src="../../assets/edit.svg" alt="Edit Button">
      </button>
      <button class="bg-purple-600 flex justify-center items-center rounded w-14 p-1 h-7">
        <img src="../../assets/delete.svg" alt="Delete Button">
      </button>
    </div>
  </div>
</template>