<script setup>
  import User from '../info/User.vue'
</script>

<template>
  <div class="flex-col justify-center w-full h-full">
    <div class="bg-white flex-col w-full p-4 h-full">
      <div class="bg-gray-200 flex-col w-full rounded-lg h-full">
        <div class="flex justify-between w-full font-bold px-3 py-2">
          <p class="w-3/12 text-center">Nome</p>
          <p class="w-3/12 text-center">E-mail</p>
          <p class="w-3/12 text-center">Senha</p>
          <p class="w-1/12 text-center">Operações</p>
        </div>
        <div class="w-full h-px bg-white"></div>
        <ul class="w-full justify-between h-5/6 overflow-y-auto">
          <li><User /></li>
          <li><User /></li>
          <li><User /></li>
          <li><User /></li>
          <li><User /></li>
          <li><User /></li>
          <li><User /></li>
          <li><User /></li>
          <li><User /></li>
          <li><User /></li>
          <li><User /></li>
          <li><User /></li>
          <li><User /></li>
          <li><User /></li>
          <li><User /></li>
          <li><User /></li>
          <li><User /></li>
          <li><User /></li>
        </ul>
        <div class="w-full h-px bg-white"></div>
        <button class="bg-purple-600 rounded-lg p-2 w-64 text-white hover:bg-purple-800 duration-200 m-2">Agendar Mensagem</button>
      </div>
    </div>
  </div>
</template>

