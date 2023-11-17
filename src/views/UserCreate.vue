<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-half">
            <h2 class="subtitle">Cadastro de Usuário</h2>
            <p>
            <form @submit.prevent="createUser">

              <div class="field">
                <div class="control is-small">
                  <input class="input is-small" type="text" id="name" v-model="userData.name" required
                    placeholder="Nome do usuário">
                </div>
              </div>

              <div class="field">
                <div class="control is-small">
                  <input class="input is-small" type="text" id="email" v-model="userData.email" required
                    placeholder="E-mail do usuário">
                </div>
              </div>

              <div class="field">
                <div class="control is-small">
                  <input class="input is-small" type="text" id="senha" v-model="userData.senha" required
                    placeholder="Senha do usuário">
                </div>
              </div>

              <!-- Adicione mais campos conforme necessário -->
              <button class="button is-success is-rounded is-small" type="submit">Salvar</button>
            </form>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
  
<script>
import ToastMixin from "@/mixins/toastMixin.js";
import axios from 'axios';

export default {

  mixins: [ToastMixin],

  data() {
    return {
      userData: {
        name: '',
        email: '',
        senha: '',
        // Adicione mais propriedades conforme necessário
      },
    };
  },
  methods: {
    async createUser() {
      try {
        const response = await axios.post('https://api-backend-users.onrender.com/users', this.userData);
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
  