<script setup>
import axios from 'axios'
import moment from 'moment'
import { ref } from 'vue';

const message = ref('')
const phone = ref('')
const scheduleDate = ref('')

const props = defineProps({
  idDB: Number,
  fetch: Function
})

const emit = defineEmits(['updateSchedule'])

const updateSchedule = async () => {
  const now = moment().tz('America/Sao_Paulo')
  const formattedDateTime = now.format('DDMMYYYY-HHmm');

  const scheduleRaw = scheduleDate.value
  const formattedScheduleDate = moment(scheduleRaw).format('DDMMYYYY-HHmm')
  console.log(props.idDB)
  console.log(message.value, phone.value, formattedDateTime , formattedScheduleDate)

  const response = await axios.put(`http://localhost:3000/schedules/${props.idDB}`, {
    message: message.value,
    phone: phone.value,
    createDate: formattedDateTime,
    scheduleDate: formattedScheduleDate
  })
  props.fetch()
  emit('updateSchedule')
  console.log(response)
}
</script>

<template>
  <div class=" bg-white flex flex-col justify-center rounded-lg w-full h-full">
    <form @submit.prevent="updateSchedule" class="flex flex-col justify-around w-full h-full">
      <div>
        <div class="">
          <label for="phone">Telefone</label>
          <input class="border rounded p-2 w-full" v-model="phone" type="tel" name="phone" id="phone" maxlength="13" placeholder="5543999999999" required>
        </div>
        <div class="">
          <label for="date">Data</label>
          <input class="border rounded p-2 w-full" v-model="scheduleDate" type="datetime-local" name="date" id="date" required>
        </div>
        <div class="">
          <label for="message">Mensagem</label>
          <textarea class="resize-none border rounded p-2 w-full" v-model="message" name="message" id="message" cols="30" rows="10" maxlength="200" placeholder="Digite aqui sua mensagem" required></textarea>
        </div>
      </div>
      <div class="flex justify-center">
        <button type="submit" class="bg-purple-600 rounded-lg p-4 w-2/4 text-white hover:bg-purple-800 duration-200">Editar Mensagem</button>
      </div>
    </form>
  </div>
</template>