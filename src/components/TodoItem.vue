<template>
  <div class="todoitem">
    <div class="row">
      <div class="col-1 text-right">
        <q-checkbox v-model="item.done" />
      </div>
      <div class="col-9">
        <q-input
          v-model="item.text"
          type="text"
          label="Task"
          label-color="grey-7"
          filled
          bg-color="grey-10"
          input-class="text-grey-4"
        />
      </div>
      <div class="col-2">
        <q-btn color="red" icon="delete"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import global from "components/global";

export default defineComponent({
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    let item = props.item;

    const { deleteTask } = global;

    // function deleteTask() {
    //     global.deleteTask2(item.id);
    // }

    return { item, deleteTask };
  },
});
</script>

<style lang="sass" scoped>
.todoitem
    margin-top: 20px
.q-checkbox
    margin-top: 7px
.q-btn
    height: calc(100% - 5px)
    margin-left: 20px
</style>