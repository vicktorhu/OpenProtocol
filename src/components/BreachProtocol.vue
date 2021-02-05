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
    {{ gameStatus }} <br />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, watch } from "@vue/composition-api";
import BreachProtocolCell from "./BreachProtocolCell.vue";
import global from "./global";

export default defineComponent({
  components: { BreachProtocolCell },
  setup() {
    const pool = global.state.pool;

    const buffer = computed(() => global.state.buffer);
    const lastClicked = computed(() => global.state.lastClicked);
    const direction = computed(() => global.state.direction);
    const cells = computed(() => global.state.cells);
    const gameStatus = computed(() => global.mutations.gameStatus());

    global.mutations.generateRandomCells();

    watch(gameStatus, (newValue, oldValue) => {
      if (!newValue) {
        console.log("game over");
      }
    });

    return { cells, buffer, direction, pool, lastClicked, gameStatus };
  },
});
</script>

<style scoped>
</style>