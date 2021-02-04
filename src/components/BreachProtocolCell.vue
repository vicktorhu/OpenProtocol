<template>
  <div>
    <q-btn color="primary" :label="label" @click="click" :disable="disabled" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import global from "./global";

export default defineComponent({
  props: {
    x: Number,
    y: Number,
  },
  data() {
    return {
      disabled: false,
    };
  },
  computed: {
    label() {
      return global.state.cells[this.x][this.y];
    },
  },
  methods: {
    click() {
      global.mutations.appendOutput(this.label);
      global.mutations.changeDirection();
      global.mutations.setLastClicked(this.x, this.y);
      this.disabled = true;
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>