<script setup>

</script>

<template>
  <div class="bg-white flex flex-col justify-center rounded-lg w-2/5 h-3/4">
    <form action="" class="flex flex-col justify-around w-full h-full">
      <div>
        <div class="m-8">
        <label for="email">E-mail</label>
        <input class="border rounded p-2 w-full" type="email" placeholder="nome@exemplo.com">
      </div>
      <div class="m-8">
        <label for="password">Senha</label>
        <input class="border rounded p-2 w-full" type="password" placeholder="Senha123!">
      </div>
      </div>
      <div class="flex justify-center">
        <button class="bg-purple-600 rounded-lg p-4 w-2/4 text-white hover:bg-purple-800 duration-200">Login</button>
      </div>
    </form>
  </div>
</template>