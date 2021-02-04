<template>
  <div>
    <table>
      <tr v-for="y in cells.length" :key="y">
        <td v-for="x in cells.length" :key="x">
          <breach-protocol-cell :x="x-1" :y="y-1"></breach-protocol-cell>
        </td>
      </tr>
    </table>
    {{output}} <br>
    {{direction}} <br>
    {{pool}} <br>
    {{lastClicked}} <br>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import BreachProtocolCell from "./BreachProtocolCell.vue";
import global from "./global";

export default defineComponent({
  components: { BreachProtocolCell },
  mounted() {
    global.mutations.generateRandomCells(5, 5);
  },
  setup() {
    const cells = global.state.cells;
    const output = global.state.output;
    let direction = global.state.direction;
    const pool = global.state.pool;
    const lastClicked = global.state.lastClicked;
    return { cells, output, direction,pool, lastClicked };
  },
});
</script>

<style scoped>
</style>