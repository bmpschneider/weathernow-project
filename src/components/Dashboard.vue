<template>
  <section class="dashboard">
    <Card />
    <Card :name="this.firstcity" :temp="this.temp" :status="status" />
    <Card />
  </section>
</template>

<script>
import Card from "./Card.vue";

export default {
  name: "Dashboard",
  components: {
    Card,
  },
  data() {
    return {
      firstcity: "Urubici, BR",
      temp: 15,
      status: "Update at 02:34 PM",
    };
  },
};
</script>

<style scoped>
.dashboard {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1f1f1;
  min-height: 800px;
  min-width: 1000px;
}
</style>
