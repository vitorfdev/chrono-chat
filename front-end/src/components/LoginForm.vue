<script>
import axios from 'axios'

export default {
  data() {
    return {
      email: '',
      password: '',
      message: ''
    }
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://localhost:3000/login', {
          email: this.email,
          password: this.password
        })
        const token = response.data.token
        // Token para localStorage
        localStorage.setItem('token', token)
      
        this.$router.push('/home')
      } catch (error) {
        console.error('Erro ao fazer login:', error.response.data.error)
        this.message = 'Email ou senha incorretos'
      }
    }
  }
}
</script>

<template>
  <div class='bg-white flex flex-col justify-center items-center rounded-lg w-2/5 h-3/4'>
    <form @submit.prevent='login' class='flex flex-col justify-around w-full h-full'>
      <div>
        <div class='m-8'>
        <label for='email'>E-mail</label>
        <input class='border rounded p-2 w-full' type='email' placeholder='nome@exemplo.com' v-model="email">
      </div>
      <div class='m-8'>
        <label for='password'>Senha</label>
        <input class='border rounded p-2 w-full' type='password' placeholder='Senha123!' v-model="password">
      </div>
      </div>
      <div class='flex justify-center'>
        <button type='submit' class='bg-purple-600 rounded-lg p-4 w-2/4 text-white hover:bg-purple-800 duration-200'>Login</button>
      </div>
    </form>
    <p>{{ message }}</p>
  </div>
</template>