<script setup>
import { ref } from 'vue'
import axios from 'axios'

const props = defineProps({
  id: Number,
  name: String,
  email: String,
  password: String,
  fetch: Function,
})

const deleteUser = async () => {
  const response = await axios.delete(`http://localhost:3000/users/${props.id}`)
  console.log(response)
  props.fetch()
}

const passwordVisible = ref(false)

function showPassword() {
  passwordVisible.value = !passwordVisible.value
}

const emit = defineEmits(['editUser', 'sendId'])
function openEditUserModal() {
  emit('editUser')
  emit('sendId', props.id)
}
</script>

<template>
  <div class="flex justify-between w-full h-12 font-bold text-gray-600 px-3">
    <p class="w-3/12 text-center self-center text-xl truncate">{{ props.name }}</p>
    <p class="w-3/12 text-center self-center text-xl truncate">{{ props.email }}</p>
    <p v-if="passwordVisible" class="w-3/12 text-center self-center text-xl truncate">{{ props.password }}</p>
    <p v-else class="w-3/12 text-center self-center text-xl truncate">********</p>
    <div class="w-1/12 flex justify-around items-center ">
      <button @click="showPassword" class="bg-purple-600 flex justify-center items-center rounded p-1 h-7">
        <img v-if="passwordVisible" src="../../assets/eye-slash.svg" alt="Mostrar senha">
        <img v-else src="../../assets/eye.svg" alt="Mostrar senha">
      </button>
      <button @click="openEditUserModal" class="bg-purple-600 flex justify-center items-center rounded w-14 p-1 h-7">
        <img src="../../assets/edit.svg" alt="Edit Button">
      </button>
      <button @click="deleteUser" class="bg-purple-600 flex justify-center items-center rounded w-14 p-1 h-7">
        <img src="../../assets/delete.svg" alt="Delete Button">
      </button>
    </div>
  </div>
</template>