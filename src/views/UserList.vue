<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-half">
            <h2 class="subtitle">Lista de usuários</h2>
            <p>
            <table class="table">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Nome</th>
                  <th>E-mail</th>
                  <th>Senha</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody v-for="(reg, index) in apiData" :key="index">
                <tr>
                  <th>{{ reg.id }}</th>
                  <td>{{ reg.name }}</td>
                  <td>{{ reg.email }}</td>
                  <td>{{ reg.senha }}</td>
                  <td><button variant="info" class="button is-primary is-rounded is-small"
                      @click="edit(index)">Editar</button></td>

                  <td>
                    
                      <div class="container">
                        <button variant="warning" class="button is-warning is-rounded is-small" id="showModalBtn">Excluir</button>

                        <!-- O modal -->
                        <div class="modal" id="myModal">
                          <div class="modal-background"></div>
                          <div class="modal-card">
                            <header class="modal-card-head">
                              <p class="modal-card-title">Modal Card</p>
                              <button class="delete" aria-label="close" id="closeModal"></button>
                            </header>
                            <section class="modal-card-body">
                              <!-- Conteúdo do modal -->
                              <div class="d-block text-center">
                                Deseja realmente excluir o registro? {{ dataSelected.name }}
                              </div>
                              <div class="mt-3 d-flex justify-content-end">
                                <button variant="outline-success" class="mr-2" @click="hideModal">Cancelar</button>
                                <button variant="outline-danger" class="mr-2"
                                  @click="confirmRemove(reg, index)">Excluir</button>
                              </div>
                            </section>
                            <footer class="modal-card-foot">
                              <button class="button is-success" id="closeModal">Fechar</button>
                            </footer>
                          </div>
                        </div>

                      </div>
                    
                  </td>
                </tr>
              </tbody>
            </table>
            </p>

            <!-- <b-modal ref="modalRemove" hide-footer title="Excluir registro">
              <div class="d-block text-center">
                Deseja realmente excluir o registro? {{ dataSelected.name }}
              </div>
              <div class="mt-3 d-flex justify-content-end">
                <button variant="outline-success" class="mr-2" @click="hideModal">Cancelar</button>
                <button variant="outline-danger" class="mr-2" @click="confirmRemove(reg, index)">Excluir</button>
              </div>
            </b-modal> -->
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
  name: 'Index',
  mixins: [ToastMixin],
  data() {
    return {
      apiData: [],
      dataSelected: [],
      item: true
    };
  },
  mounted() {
    // Chame sua API assim que o componente for montado
    this.fetchData();
  },
  methods: {
    async fetchData() {

      this.apiData = fetch('https://api-backend-users.onrender.com/users')
        .then(response => response.json())
        .then(data => {
          this.apiData = data; // Assumindo que a resposta da API é um array de tarefas
        })
        .catch(error => console.error('Erro ao obter tarefas da API:', error));
    },

    edit(index) {
      this.$router.push({ name: "userCreate", params: { index } });
    },

    remove(reg, index) {
      this.dataSelected = reg;
      this.dataSelected.index = index;
      this.$refs.modalRemove.show();
    },

    hideModal() {
      this.$refs.modalRemove.hide();
    },

    confirmRemove() {

      this.apiData.splice(this.dataSelected.index, 1);

      this.showToast("danger", "ID", this.apiData.id)

      axios.delete('https://api-backend-users.onrender.com/users/' + this.apiData.id);

      //this.showToast("danger", "Deletado!", "Registro removido com sucesso.")

      this.hideModal();
    }
  },
};

// Script para controlar a exibição e fechamento do modal
document.addEventListener('DOMContentLoaded', function () {
  var showModalBtn = document.getElementById('showModalBtn');
  var closeModalBtns = document.querySelectorAll('#closeModal, .modal-background');

  showModalBtn.addEventListener('click', function () {
    var modal = document.getElementById('myModal');
    modal.classList.add('is-active');
  });

  closeModalBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var modal = document.getElementById('myModal');
      modal.classList.remove('is-active');
    });
  });
});

</script>

<style>
/* Estilo adicional para o modal */
.modal-card {
  max-width: 400px;
}
</style>
  