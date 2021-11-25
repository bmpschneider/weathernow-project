<template>
  <section class="dashboard">
    <Card v-for="item in citys" :key="item.id" :city="item" />
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
      citys: [
        { id: 0, name: "Nuuk", temp: "" },
        { id: 1, name: "Urubici", temp: "" },
        { id: 2, name: "Nairobi", temp: "" },
      ],
      status: "Update at 02:34 PM",
    };
  },
  async mounted() {
    this.getInfoCity();
  },
  methods: {
    async getInfoCity() {
      for (var i = 0; i < this.citys.length; i++) {
        try {
          await this.$store.dispatch("getInfos", this.citys[i].name);
          this.citys[i].temp = Math.round(
            this.$store.state.citysInfo[i].main.temp - 273.15
          );
        } catch (e) {
          console.error(e);
        }
      }
    },
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
