<template>
  <div>
    <table>
      <tr v-for="y in cells.length" :key="y">
        <td v-for="x in cells.length" :key="x">
          <breach-protocol-cell :x="x - 1" :y="y - 1"></breach-protocol-cell>
        </td>
      </tr>
    </table>
    {{ buffer }} <br />
    {{ direction }} <br />
    {{ pool }} <br />
    {{ lastClicked }} <br />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "@vue/composition-api";
import BreachProtocolCell from "./BreachProtocolCell.vue";
import global from "./global";

export default defineComponent({
  components: { BreachProtocolCell },
  setup() {
    const buffer = global.state.buffer;
    const pool = global.state.pool;
    const lastClicked = global.state.lastClicked;

    const direction = computed(() => {
      return global.state.direction;
    });

    const cells = computed(() => {
      return global.state.cells;
    });

    global.mutations.generateRandomCells();

    return { cells, buffer, direction, pool, lastClicked };
  },
});
</script>

<style scoped>
</style>