import axios from '../axios'
import moment from 'moment-timezone'


function sendMessage(phone, message) {
  const formattedMessage = message.replace(/ /g, '%20')
  const url = `https://wa.me/${phone}?text=${formattedMessage}`
  console.log(url)

  try {
    window.open(url, '_blank')
    console.log(`Mensagem enviada para ${phone}: ${message}`)
  } catch (error) {
    console.error(`Erro ao enviar mensagem para ${phone}: ${error.message}`)
  }
}

export function checkScheduledMessages() {
  const now = moment().tz('America/Sao_Paulo')
  const formattedDateTime = now.format('DDMMYYYY-HHmm')

  axios.get('/schedules')
    .then(response => {
      const rows = response.data

      for (const row of rows) {
        const { phone, message, scheduleDate } = row
        if (scheduleDate === formattedDateTime) {
          console.log(message)
          sendMessage(phone, message)
        }
      }
    })
    .catch(error => {
      console.error('Erro ao buscar mensagens agendadas:', error.message)
    })
}
