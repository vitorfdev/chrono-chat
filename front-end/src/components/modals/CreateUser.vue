<script setup>
import axios from 'axios'
import { ref } from 'vue';

const name = ref('')
const email = ref('')
const password = ref('')

const props = defineProps({
  fetch: Function
})

const emit = defineEmits(['createUser'])


const createUser = async () => {
  const response = await axios.post('http://localhost:3000/users', {
    username: name.value,
    email: email.value,
    password: password.value
  })
  props.fetch()
  emit('createUser')
  console.log(response)
}

</script>

<template>
  <div class=" bg-white flex flex-col justify-center rounded-lg w-full h-full">
    <form @submit.prevent="createUser" action="" class="flex flex-col justify-around w-full h-full">
      <div>
        <div class="">
          <label for="name">Nome</label>
          <input class="border rounded p-2 w-full" type="text" name="name" id="name" maxlength="50" placeholder="Seu nome completo" v-model="name" required>
        </div>
        <div class="">
          <label for="email">Email</label>
          <input class="border rounded p-2 w-full" type="email" name="email" id="email" maxlength="50" placeholder="email@email.com" v-model="email" required>
        </div>
        <div class="">
          <label for="password">Senha</label>
          <input class="border rounded p-2 w-full" type="password" name="password" id="password" maxlength="24" placeholder="Sua nova senha" v-model="password" required>
        </div>
        
      </div>
      <div class="flex justify-center">
        <button type="submit" class="bg-purple-600 rounded-lg p-4 w-2/4 text-white hover:bg-purple-800 duration-200">Criar Usuário</button>
      </div>
    </form>
  </div>
</template>