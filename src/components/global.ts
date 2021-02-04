import { reactive } from "@vue/composition-api";

// enum Direction {
//   Horizontal,
//   Vertical
// }

const state = reactive({
  direction: true as Boolean, // true = horizontal, false = vertical
  lastClicked: {
    x: 0 as Number,
    y: 0 as Number
  },
  pool: new Array<String>(),
  cells: new Array(),
  output: new Array<String>()
});

const mutations = {
  cleanCells() {
    state.direction = true;
    state.lastClicked.x = 0;
    state.lastClicked.y = 0;
    state.pool = [];
    state.cells = [];
    state.output = [];
  },
  generateCellPool(size: Number) {
    for (let i = 0; i < size; i++) {
      state.pool.push(
        Math.round(Math.random() * 239 + 16)
          .toString(16)
          .toUpperCase()
      );
    }
  },
  generateRandomCells(size: number, poolSize: Number) {
    // this.cleanCells();
    this.generateCellPool(poolSize);
    for (let i = 0; i < size; i++) {
      let row: String[] = [];
      for (let j = 0; j < size; j++) {
        row.push(state.pool[Math.floor(Math.random() * state.pool.length)]);
      }
      state.cells.push(row);
    }

    state.cells.forEach(cell => {
      console.log(cell);
    });
  },
  generateProblems() {},
  appendOutput(input: String) {
    state.output.push(input);
  },
  setLastClicked(x: Number, y: Number) {
    state.lastClicked.x = x;
    state.lastClicked.y = y;
  },
  changeDirection() {
    // if (state.direction == Direction.Horizontal) {
    //   state.direction = Direction.Vertical;
    // } else {
    //   state.direction = Direction.Horizontal;
    // }
    state.direction = !state.direction;
  }
};

export default { state, mutations };
