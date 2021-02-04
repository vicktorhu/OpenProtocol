<template>
  <div>
    <div v-for="item in list" :key="item.id">
      <TodoItem :item="item"></TodoItem>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import global from "components/global";
import TodoItem from "components/TodoItem.vue";
export default defineComponent({
  components: {
    TodoItem,
  },
  setup() {
    const list = global.state.list;
    return { list };
  },
});
</script>

<style lang="sass" scoped>
</style>