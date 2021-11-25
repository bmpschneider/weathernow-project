<template>
  <div id="app">
    <Header />
    <main id="main">
      <Dashboard msg="Welcome to Your Vue.js App" />
    </main>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Dashboard from "../components/Dashboard.vue";

export default {
  name: "Home",
  components: {
    Header,
    Dashboard,
  },
};
</script>

<style>
#main {
  display: flex;
  justify-content: center;
}
</style>
