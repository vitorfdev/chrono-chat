<script>
import { checkScheduledMessages } from './services/scheduleService'

export default {
  mounted() {
    checkScheduledMessages();

    setInterval(checkScheduledMessages, 60000);
  }
}
</script>

<template>
  <div class="app h-svh w-svw">
    <!-- Router View eh responsavel por mostrar a pagina baseada na rota setada no router/index.js -->
    <router-view></router-view>
  </div>
</template>