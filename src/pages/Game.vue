<template>
  <div>
    <breach-protocol></breach-protocol>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import BreachProtocol from "components/BreachProtocol.vue";

export default defineComponent({
  components: { BreachProtocol },
});
</script>

<style scoped>
</style>