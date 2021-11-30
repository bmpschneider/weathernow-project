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
        {
          id: 0,
          name: "Nuuk",
          country: "GL",
          temp: "",
          humidity: "",
          pressure: "",
          lastupdate: "",
          loader: "",
          error: "",
          full: false,
        },
        {
          id: 1,
          name: "Urubici",
          country: "BR",
          temp: "",
          humidity: "",
          pressure: "",
          lastupdate: "",
          loader: "",
          error: "",
          full: true,
        },
        {
          id: 2,
          name: "Nairobi",
          country: "KE",
          temp: "",
          humidity: "",
          pressure: "",
          lastupdate: "",
          loader: "",
          error: "",
          full: false,
        },
      ],
    };
  },
  async mounted() {
    this.getInfoCity();
    setInterval(this.getInfoCity, 600000);
  },
  methods: {
    async getInfoCity() {
      for (var i = 0; i < this.citys.length; i++) {
        this.citys[i].loader = true;
        this.citys[i].error = false;
        try {
          await this.$store.dispatch("getInfos", this.citys[i].name);
          this.citys[i].country = this.$store.state.citysInfo[i].sys.country;
          this.citys[i].temp = Math.round(
            this.$store.state.citysInfo[i].main.temp - 273.15
          );
          this.citys[i].humidity = this.$store.state.citysInfo[i].main.humidity;
          this.citys[i].pressure = this.$store.state.citysInfo[i].main.pressure;
          this.citys[i].lastupdate = new Date();
          this.citys[i].lastupdate = this.dateRefactor(
            this.citys[i].lastupdate
          );
          if (this.citys[i].temp <= 5) {
            this.citys[i].tempclass = "temp-cold";
          } else if (this.citys[i].temp <= 25) {
            this.citys[i].tempclass = "temp-average";
          } else {
            this.citys[i].tempclass = "temp-warm";
          }
          this.citys[i].loader = false;
        } catch (e) {
          this.citys[i].loader = false;
          this.citys[i].error = true;
          console.error(e);
        }
      }
    },
    dateRefactor(data) {
      return (data = [
        data.getHours(),
        data.getMinutes(),
        data.getSeconds(),
      ].join(":"));
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
  min-height: 700px;
  min-width: 1000px;
}

@media (max-width: 600px) {
  .dashboard {
    display: grid;
    min-width: unset;
    padding-top: 15px;
    min-height: 750px;
  }
  .dashboard :nth-child(1) {
    order: 3;
  }
  .dashboard :nth-child(3) {
    order: 3;
  }
}
</style>
