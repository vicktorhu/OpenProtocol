import { reactive } from "@vue/composition-api";

const state = reactive({
  list: [
    { id: 1, text: "Call the client", done: true },
    { id: 2, text: "Prepare for monday meeting", done: false },
    { id: 3, text: "Fix the bug on User.ts module", done: false }
  ],
  lastid: 3,
  pool: [],
  cells: [],
});

const mutations = {
  generateNumberPool: function(size:Number){

  },
  generateRandomCells: function(size: number) {
    for (let i = 0; i < size; i++) {
      let row:String[] = [];
      for (let j = 0; j < size; j++) {
        // let randomNumber = Math.random()*255;

        row.push(Math.round(Math.random()*255).toString(16));
      }
      state.cells.push(row);
    }
    
    state.cells.forEach(cell => {
      console.log(cell);
    });
  }
};

export default { state, mutations };
