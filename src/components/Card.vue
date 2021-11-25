<template>
  <div class="content-card">
    <div class="card-title">
      {{ city.name }}
    </div>
    <hr />

    <div class="card-temperature">
      {{ city.temp }}<span class="temp-fixed">°</span>
    </div>

    <div class="card-footer">
      <div class="card-footer-info">
        <div>
          HUMIDITY
          <div class="info-conditions">
            75<span class="info-conditions-fixed">%</span>
          </div>
        </div>
        <div>
          PRESSURE
          <div class="info-conditions">
            892<span class="info-conditions-fixed">hPa</span>
          </div>
        </div>
      </div>
      <div class="card-footer-status">
        {{ status }}
      </div>
    </div>
    <button @click="setInfoCitys">botao</button>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    city: {
      id: Number,
      name: String,
      temp: String,
    },
  },
  data() {
    return {
      status: "",
    };
  },
  methods: {
    setInfoCitys() {
      this.temp = this.$store.state.citysInfo[this.city.id].main.temp;
    },
  },
};
</script>

<style scoped>
.content-card {
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 210px;
  min-height: 200px;
  margin: 0 20px;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}

.card-title {
  display: flex;
  flex-direction: column;
  padding: 10px;
  min-height: 20px;
  font-size: 16px;
  font-weight: 300;
}

.card-temperature {
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
  font-size: 65px;
  min-height: 90px;
  padding: 10px;
}

.temp-fixed {
  font-size: 40px;
  margin-bottom: 15px;
}

.card-footer {
  background-color: #f1f1f1;
  padding: 10px;
  min-height: 20px;
}

.card-footer-info {
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
  font-size: 10px;
  color: #b4b4b4;
}

.info-conditions {
  color: #737c84;
  font-weight: 700;
}

.info-conditions-fixed {
  font-size: 9px;
  font-weight: normal;
}

.card-footer-status {
  display: flex;
  flex: 0 0 auto;
  justify-content: center;
  align-items: center;
  position: relative;
  font-size: 9px;
  color: #b4b4b4;
}

hr {
  background-color: #ebebeb !important;
  border: none;
  height: 1px;
  margin: 0;
}
</style>
