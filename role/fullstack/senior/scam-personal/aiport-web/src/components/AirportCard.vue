<template>
  <div
    class="w-40 h-20 mx-3 my-3 block bg-gray-100 rounded-md hover:transform hover:scale-105 hover:shadow-lg shadow-md float-left small"
  >
    <!-- <p class="ml-2">
      <strong>ID: </strong> {{ this.airport.id }} - <strong>Priority: </strong>
      {{ this.airport.priorityorder }}
    </p> -->
    <p class="ml-2 mt-1">
      <strong>{{ this.airport.airportcode }}</strong> - {{ this.airport.name }} - P: {{this.airport.priorityorder}}
    </p>
    <p class="ml-2">
      {{ this.province.name }} - {{ this.country.name }}
    </p>
    <p class="ml-2">
      <strong>Administrado por: </strong> {{ this.operator.name }}
    </p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      operator: {},
      country: {},
      province: {},
      location: {},
    };
  },
  props: {
    airport: {},
  },
  computed: {
    ...mapState(["countries", "provinces"]),
  },
  methods: {
    async getOperator() {
      try {
        const data = await fetch(
          `http://localhost:8055/items/airportoperator/${this.airport.operatorid}`
        );
        const dataOperator = await data.json();
        this.operator = dataOperator.data;
      } catch (error) {
        console.error(error);
      }
    },
    async getLocation() {
      try {
        const data = await fetch(
          `http://localhost:8055/items/location/${this.airport.locationid}`
        );
        const dataOperator = await data.json();
        this.location = dataOperator.data;
        for (let index = 0; index < this.provinces.length; index++) {
          if (this.location.provinceid == this.provinces[index].id) {
            for (let j = 0; j < this.countries.length; j++) {
              if (this.provinces[index].countryid == this.countries[j].id) {
                this.country = this.countries[j];
                this.province = this.provinces[index];
                break;
              }
            }
            break;
          }
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
  created() {
    this.getOperator();
    this.getLocation();
  },
};
</script>

<style>
  .small{
    font-size: 11px;
  }
</style>