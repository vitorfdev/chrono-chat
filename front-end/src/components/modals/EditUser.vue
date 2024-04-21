<script setup>

</script>

<template>
  <div class=" bg-white flex flex-col justify-center rounded-lg w-full h-full">
    <form action="" class="flex flex-col justify-around w-full h-full">
      <div>
        <div class="">
          <label for="name">Nome</label>
          <input class="border rounded p-2 w-full" type="text" name="name" id="name" placeholder="Seu nome completo" required>
        </div>
        <div class="">
          <label for="email">Email</label>
          <input class="border rounded p-2 w-full" type="email" name="email" id="email" placeholder="email@email.com" required>
        </div>
        <div class="">
          <label for="password">Senha</label>
          <input class="border rounded p-2 w-full" type="password" name="password" id="password" placeholder="Sua nova senha" required>
        </div>
        
      </div>
      <div class="flex justify-center">
        <button class="bg-purple-600 rounded-lg p-4 w-2/4 text-white hover:bg-purple-800 duration-200">Editar Usuário</button>
      </div>
    </form>
  </div>
</template>