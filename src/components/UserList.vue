<template>
    <div>
      <h2>Lista de Usuários</h2>
      <ul>
        <li v-for="user in users" :key="user.id">
          {{ user.name }} - <router-link :to="'/edit/' + user.id">Editar</router-link> | 
          <router-link :to="'/delete/' + user.id">Excluir</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        users: [], // Popule esta lista com os usuários obtidos da API
      };
    },
    mounted() {
      // Chame sua API para obter a lista de usuários e atualize a variável 'users'
    },
  };
  </script>
  