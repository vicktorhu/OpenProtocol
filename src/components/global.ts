import { reactive } from "@vue/composition-api";

const state = reactive({
  list: [
      {id: 1, text: "Call the client", done: true},
      {id: 2, text: "Prepare for monday meeting", done: false},
      {id: 3, text: "Fix the bug on User.ts module", done: false},
  ],
  lastid: 3,
});

function deleteTask(id: number){
    alert("deleting task " + id);
}

export default { state };
