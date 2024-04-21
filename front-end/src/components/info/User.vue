<script setup>
import { ref } from 'vue';

defineProps({
  name: String,
  email: String,
  password: String,
})

const passwordVisible = ref(false)
const emit = defineEmits(['editUser']);

function showPassword() {
  passwordVisible.value = !passwordVisible.value
}

function openEditUserModal() {
  emit('editUser');
}
</script>

<template>
  <div class="flex justify-between w-full h-12 font-bold text-gray-600 px-3">
    <p class="w-3/12 text-center self-center text-xl truncate">{{ name }}</p>
    <p class="w-3/12 text-center self-center text-xl truncate">{{ email }}</p>
    <p v-if="passwordVisible" class="w-3/12 text-center self-center text-xl truncate">{{ password }}</p>
    <p v-else class="w-3/12 text-center self-center text-xl truncate">********</p>
    <div class="w-1/12 flex justify-around items-center ">
      <button @click="showPassword" class="bg-purple-600 flex justify-center items-center rounded p-1 h-7">
        <img v-if="passwordVisible" src="../../assets/eye-slash.svg" alt="Mostrar senha">
        <img v-else src="../../assets/eye.svg" alt="Mostrar senha">
      </button>
      <button @click="openEditUserModal" class="bg-purple-600 flex justify-center items-center rounded w-14 p-1 h-7">
        <img src="../../assets/edit.svg" alt="Edit Button">
      </button>
      <button class="bg-purple-600 flex justify-center items-center rounded w-14 p-1 h-7">
        <img src="../../assets/delete.svg" alt="Delete Button">
      </button>
    </div>
  </div>
</template>