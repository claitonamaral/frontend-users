<template>
    <div>
      <h2>Criar Usuário</h2>
      <form @submit.prevent="createUser">
        <label for="name">Nome:</label>
        <input type="text" id="name" v-model="userData.name" required>
        <!-- Adicione mais campos conforme necessário -->
        <button type="submit">Salvar</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        userData: {
          name: '',
          // Adicione mais propriedades conforme necessário
        },
      };
    },
    methods: {
      async createUser() {
        try {
          const response = await axios.post('sua-api/usuarios', this.userData);
          console.log('Usuário criado:', response.data);
          // Redirecione para a lista de usuários após a criação
          this.$router.push('/');
        } catch (error) {
          console.error('Erro ao criar usuário:', error);
        }
      },
    },
  };
  </script>
  