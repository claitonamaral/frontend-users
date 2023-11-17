<template>
  <div id="app">

    <b-navbar toggleable="lg" type="dark" variant="success">
      <b-navbar-brand to="/">
        <img src="./assets/logo.png" class="d-inline-block align-top" alt="Kitten">
        CAD - Cadastro de Usuários</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>

          <b-nav-item to="/"></b-nav-item>
          <b-nav-item to="/create">Cadastro de Usuários</b-nav-item>
          <b-nav-item to="/users">Lista de Usuários</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
  </div>
</template>

<style></style>
