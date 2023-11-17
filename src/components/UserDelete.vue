<template>
    <div>
      <h2>Excluir Usuário</h2>
      <p>Você tem certeza de que deseja excluir este usuário?</p>
      <button @click="deleteUser">Confirmar Exclusão</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    methods: {
      async deleteUser() {
        const userId = this.$route.params.id;
        try {
          await axios.delete(`sua-api/usuarios/${userId}`);
          console.log('Usuário excluído com sucesso');
          // Redirecione para a lista de usuários após a exclusão
          this.$router.push('/');
        } catch (error) {
          console.error('Erro ao excluir usuário:', error);
        }
      },
    },
  };
  </script>
  