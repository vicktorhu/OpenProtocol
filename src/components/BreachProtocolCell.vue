<template>
  <div>
    <!-- <q-btn color="primary" :label="label" @click="click" :disable="disabled" /> -->
    <div class="cell" :class="'cell-' + state" @click="click">{{ label }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
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
  computed: {
    state() {
      // state {0,1,2} = {normal,highlighted,used} may change to enums later

      let state: Number = 0;

      if (!this.disabled) {
        if (global.state.direction) {
          if (this.y == global.state.lastClicked.y) {
            state = 1;
          }
        } else {
          if (this.x == global.state.lastClicked.x) {
            state = 1;
          }
        }
      } else {
        state = 2;
      }

      return state;
    },
  },
  setup(props) {
    const label: String = global.state.cells[props.x][props.y];
    let disabled: Boolean = false;

    return { label, disabled };
  },
  methods: {
    click() {
      if (!this.disabled) {
        global.mutations.appendOutput(this.label);
        global.mutations.changeDirection();
        global.mutations.setLastClicked(this.x, this.y);
        this.disabled = true;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.cell {
  // width: 40px;
  // height: 40px;
  padding: 20px;
  text-align: center;
  // background-color: darkred;
  border: 1px solid red;
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