<template>
    <div>
      <h2>Editar Usuário</h2>
      <form @submit.prevent="updateUser">
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
        userData: {},
      };
    },
    async created() {
      // Obtenha os dados do usuário a ser editado ao inicializar o componente
      const userId = this.$route.params.id;
      try {
        const response = await axios.get(`sua-api/usuarios/${userId}`);
        this.userData = response.data;
      } catch (error) {
        console.error('Erro ao obter dados do usuário:', error);
      }
    },
    methods: {
      async updateUser() {
        const userId = this.$route.params.id;
        try {
          const response = await axios.put(`sua-api/usuarios/${userId}`, this.userData);
          console.log('Usuário atualizado:', response.data);
          // Redirecione para a lista de usuários após a atualização
          this.$router.push('/');
        } catch (error) {
          console.error('Erro ao atualizar usuário:', error);
        }
      },
    },
  };
  </script>
  