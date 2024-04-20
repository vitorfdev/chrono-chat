<script setup>
  import Schedule from '../info/Schedule.vue'
</script>

<template>
  <div class="flex-col justify-center w-full h-full">
    <div class="flex w-full">
      <button class="bg-white font-bold text-3xl text-purple-600 w-2/4 rounded-t-xl h-12">Agendamentos</button>
      <button class="bg-purple-600 font-bold text-3xl text-white w-2/4 rounded-t-xl h-12">Usuários</button>
    </div>
    <div class="bg-white flex-col w-full p-4 h-full">
      <div class="bg-gray-200 flex-col w-full rounded-lg h-full">
        <div class="flex justify-between w-full font-bold px-3 py-2">
          <p class="w-1/12 text-center">Id</p>
          <p class="w-2/12 text-center">Criado em</p>
          <p class="w-2/12 text-center">Telefone</p>
          <p class="w-4/12 text-center">Mensagem</p>
          <p class="w-2/12 text-center">Agendado às</p>
          <p class="w-1/12 text-center">Operações</p>
        </div>
        <div class="w-full h-px bg-white"></div>
        <ul class="w-full h-5/6 overflow-y-auto">
          <li><Schedule /></li>
          <li><Schedule /></li>
          <li><Schedule /></li>
          <li><Schedule /></li>
          <li><Schedule /></li>
          <li><Schedule /></li>
          <li><Schedule /></li>
          <li><Schedule /></li>
          <li><Schedule /></li>
          <li><Schedule /></li>
          <li><Schedule /></li>
          <li><Schedule /></li>
          <li><Schedule /></li>
          <li><Schedule /></li>
          <li><Schedule /></li>
          <li><Schedule /></li>
          <li><Schedule /></li>
          <li><Schedule /></li>
        </ul>
        <div class="w-full h-px bg-white"></div>
        <button class="bg-purple-600 rounded-lg p-2 w-64 text-white hover:bg-purple-800 duration-200 m-2">Agendar Mensagem</button>
      </div>
    </div>
  </div>
</template>

