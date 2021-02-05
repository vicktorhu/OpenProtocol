<template>
  <div>
    <!-- <q-btn color="primary" :label="label" @click="click" :disable="disabled" /> -->
    <div class="cell" :class="'cell-' + state" @click="clickCell">
      <span v-if="!disabled">{{ label }}</span>
      <span v-else>{{'[ &nbsp; ]'}}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "@vue/composition-api";
import global from "./global";

export default defineComponent({
  props: {
    x: {
      type: Number,
      default: 0,
    },
    y: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const label: string = global.state.cells[props.x][props.y];
    let disabled = ref<Boolean>(false);

    const state = computed(() => {
      if (!disabled.value) {
        if (global.state.direction) {
          if (props.y == global.state.lastClicked.y) {
            return 1;
          } else {
            return 0;
          }
        } else {
          if (props.x == global.state.lastClicked.x) {
            return 1;
          } else {
            return 0;
          }
        }
      } else {
        return 2;
      }
    });

    const clickCell = () => {
      if (!disabled.value && state.value == 1) {
        global.mutations.appendOutput(label);
        global.mutations.changeDirection();
        global.mutations.setLastClicked(props.x, props.y);
        disabled.value = true;
      }
    };

    return { label, disabled, state, clickCell };
  },
});
</script>

<style lang="scss" scoped>
.cell {
  padding: 20px;
  text-align: center;
  border: 1px solid red;
  cursor: pointer;
}
.cell-0 {
  background-color: #222;
}
.cell-1 {
  background-color: #555;
}
.cell-2 {
  background-color: #333;
  color: #555;
}
</style>