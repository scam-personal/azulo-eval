<template>
  <Airports />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Airports from "../components/Airports.vue";

@Options({
  components: {
    Airports,
  },
})
export default class Home extends Vue {}
</script>
