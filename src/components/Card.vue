<template>
  <div class="content-card">
    <div class="card-title">{{ city.name }}, {{ city.country }}</div>
    <hr />

    <div class="loader" v-if="city.loader">
      <div class="background-loader"></div>
    </div>

    <div class="error" v-if="city.error">
      <div class="background-error">
        <p class="msg-error">Something went wrong</p>
        <button class="btn-refresh" @click="getInfoCity()">Try Again</button>
      </div>
    </div>

    <div v-if="!city.loader && !city.error">
      <div id="card-temperature" :class="city.tempclass">
        {{ city.temp }}<span class="temp-fixed">°</span>
      </div>

      <div class="card-footer">
        <div class="card-footer-info">
          <div>
            HUMIDITY
            <div class="info-conditions">
              {{ city.humidity }}<span class="info-conditions-fixed">%</span>
            </div>
          </div>
          <div>
            PRESSURE
            <div class="info-conditions">
              {{ city.pressure }}<span class="info-conditions-fixed">hPa</span>
            </div>
          </div>
        </div>
        <div class="card-footer-status">Updated at {{ city.lastupdate }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    city: {
      id: Number,
      name: String,
      coutry: String,
      temp: String,
      humidity: Number,
      pressure: Number,
      lastupdate: Date,
      loader: Boolean,
    },
  },
  data() {
    return {};
  },
  created() {
    this.city.loader = true;
  },
  methods: {
    async getInfoCity() {
      this.city.loader = true;
      this.city.error = false;
      try {
        await this.$store.dispatch("getInfos", this.city.name);
        this.city.country = this.$store.state.cityInfo.sys.country;
        this.city.temp = Math.round(
          this.$store.state.cityInfo.main.temp - 273.15
        );
        this.city.humidity = this.$store.state.cityInfo.main.humidity;
        this.city.pressure = this.$store.state.cityInfo.main.pressure;
        this.city.lastupdate = new Date();
        this.city.lastupdate = this.dateRefactor(this.city.lastupdate);
        if (this.city.temp <= 5) {
          this.city.tempclass = "temp-cold";
        } else if (this.city.temp <= 25) {
          this.city.tempclass = "temp-average";
        } else {
          this.city.tempclass = "temp-hot";
        }
        this.city.loader = false;
      } catch (e) {
        this.city.loader = false;
        this.city.error = true;
        console.error(e);
      }
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
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 9px;
}

.card-title {
  display: flex;
  flex-direction: column;
  padding: 10px;
  min-height: 20px;
  font-size: 16px;
  font-weight: 300;
}

#card-temperature {
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

.temp-cold {
  color: #69a3ff;
}

.temp-average {
  color: #ff9632;
}

.temp-warm {
  color: #ed1946;
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

.loader {
  width: 100%;
  height: 100%;
  /* background-color: #eceaea; */
  background-image: url("../assets/loader.svg");
  background-size: 40px;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 100000000;
}

.background-loader {
  height: 172px;
}

.background-error {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 172px;
}

.msg-error {
  color: #ed1946;
  font-size: 14px;
  margin-top: 0;
}

.btn-refresh {
  border: 2px solid;
  border-radius: 50px;
  background-color: white;
  color: #737c84;
  font-size: 13px;
  height: 30px;
  width: 80px;
  cursor: pointer;
}

.btn-refresh:hover {
  opacity: 0.7;
}
</style>
