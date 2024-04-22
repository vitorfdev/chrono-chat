<script setup>
import axios from 'axios'
import User from './info/User.vue'
import CreateUser from './modals/CreateUser.vue'
import EditUser from './modals/EditUser.vue'
import { onMounted, onUnmounted, ref } from 'vue'


const users = ref([
  
])

const updateId = ref([])

const handleId = (value) => {
  console.log(value)
  updateId.value = value
}

const fetchUsers = async () => {
  const response = await axios.get('http://localhost:3000/users')
  users.value = response.data
}

const showCreate = ref(false)

function toggleCreate() {
  showCreate.value = !showCreate.value
}
const showEdit = ref(false)

function toggleEdit() {
  showEdit.value = !showEdit.value
}

const closeEscape = event => {
  if (event.key == 'Escape') {
    showCreate.value = false
    showEdit.value = false
  }
}

onMounted(() => {
  window.addEventListener('keydown', closeEscape)
  fetchUsers()
})

onUnmounted(() => {
  window.removeEventListener('keydown', closeEscape)
})
</script>

<template>
  <div class="bg-white flex-col p-4 overflow-hidden">
    <div class="bg-gray-200 flex-col rounded-lg overflow-hidden">
      <div class="flex justify-between font-bold px-3 py-2">
        <p class="w-3/12 text-center">Nome</p>
        <p class="w-3/12 text-center">E-mail</p>
        <p class="w-3/12 text-center">Senha</p>
        <p class="w-1/12 text-center">Operações</p>
      </div>
      <div>
        <ul class="min-h-96 max-h-96 overflow-y-auto">
          <li v-for="(user, index) in users" :key="index">
            <User :id="user.id" :name="user.username" :email="user.email" :password="user.password" :fetch="fetchUsers" @editUser="toggleEdit" @sendId="handleId" />
          </li>
        </ul>
      </div>
      <div @click="toggleCreate">
        <button class="bg-purple-600 rounded-lg p-2 w-64 text-white hover:bg-purple-800 duration-200 m-2">
          Criar Usuário
        </button>
      </div>
    </div>
  </div>

  <div v-if="showCreate" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white p-4 rounded shadow-md w-2/4 h-2/4">
      <button @click="toggleCreate" class="bg-white hover:bg-slate-400 w-8 h-8 rounded-full m-4 absolute top-0 right-0 align-middle font-bold text-center text-xl text-purple-600 hover:text-purple-800">&times</button>
      <CreateUser :fetch="fetchUsers" @createUser="toggleCreate"/>
    </div>
  </div>

  <div v-if="showEdit" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white p-4 rounded shadow-md w-2/4 h-2/4">
      <button @click="toggleEdit" class="bg-white hover:bg-slate-400 w-8 h-8 rounded-full m-4 absolute top-0 right-0 align-middle font-bold text-center text-xl text-purple-600 hover:text-purple-800">&times</button>
      <EditUser :id="updateId" :fetch="fetchUsers" @updateUser="toggleEdit" />
    </div>
  </div>
</template>
