<template>
  <div>
    <breach-protocol-cell></breach-protocol-cell>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import BreachProtocolCell from "./BreachProtocolCell.vue";
import global from "./global";

export default defineComponent({
  components: { BreachProtocolCell },
  mounted () {
      global.mutations.generateRandomCells(5);
  },
  methods: {
      name() {
          
      }
  },
  setup() {
    const cells = global.state.cells;
    // global.generateRandomCells();
    return { cells };
  },
});
</script>

<style scoped>
</style>