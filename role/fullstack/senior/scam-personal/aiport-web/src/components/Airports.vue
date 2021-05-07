<template>
  <div
    class="xs:mx-5 xs:my-12 smm:mx-16 smm:my-16 mdd:mx-24 mdd:my-28 h-screen bg-white"
  >
    <div v-for="item in this.airports" :key="item.id">
      <airport-card :airport="item" />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import AirportCard from "./AirportCard.vue";
export default {
  components: { AirportCard },
  data() {
    return {
      airports: [],
    };
  },
  methods: {
    ...mapActions(["setCountries", "setProvinces"]),
    async getAirports() {
      try {
        const data = await fetch("http://localhost:8055/items/airport");
        const dataArray = await data.json();
        this.airports = dataArray.data;
        this.airports = this.orderByPriority();
      } catch (error) {
        console.error(error);
      }
    },
    orderByPriority() {
      for (let index = 0; index < this.airports.length; index++) {
        let min = index;
        for (let j = 0; j < this.airports.length; j++) {
          if (
            this.airports[j].priorityorder < this.airports[min].priorityorder
          ) {
            let aux = this.airports[j];
            this.airports[j] = this.airports[min];
            this.airports[min] = aux;
          }
        }
      }
      return this.airports;
    },
  },
  created() {
    this.getAirports();
    this.setCountries();
    this.setProvinces();
  },
};
</script>

<style>
</style>