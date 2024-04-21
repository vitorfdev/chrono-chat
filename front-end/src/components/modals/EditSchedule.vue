<script setup>

</script>

<template>
  <div class=" bg-white flex flex-col justify-center rounded-lg w-full h-full">
    <form action="" class="flex flex-col justify-around w-full h-full">
      <div>
        <div class="">
          <label for="phone">Telefone</label>
          <input class="border rounded p-2 w-full" type="tel" name="phone" id="phone" placeholder="5543999999999" required>
        </div>
        <div class="">
          <label for="date">Data</label>
          <input class="border rounded p-2 w-full" type="datetime-local" name="date" id="date" required>
        </div>
        <div class="">
          <label for="message">Mensagem</label>
          <textarea class="resize-none border rounded p-2 w-full" name="message" id="message" cols="30" rows="10" placeholder="Digite aqui sua mensagem" required></textarea>
        </div>
      </div>
      <div class="flex justify-center">
        <button class="bg-purple-600 rounded-lg p-4 w-2/4 text-white hover:bg-purple-800 duration-200">Editar Mensagem</button>
      </div>
    </form>
  </div>
</template>