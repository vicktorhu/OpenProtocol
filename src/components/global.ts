import { reactive } from "@vue/composition-api";

const config = reactive({
  bufferSize: 5 as number,
  poolSize: 4 as number,
  cellSize: 6 as number
});

const state = reactive({
  direction: true as boolean, // true = horizontal, false = vertical
  lastClicked: {
    x: 0 as number,
    y: 0 as number
  },
  pool: new Array<string>(),
  cells: new Array(),
  buffer: new Array<string>()
});

const mutations = {
  cleanCells(): void {
    state.direction = true;
    state.lastClicked.x = 0;
    state.lastClicked.y = 0;
    state.pool = [];
    state.cells = [];
    state.buffer = [];
  },
  generateCellPool(size: number): void {
    for (let i = 0; i < size; i++) {
      state.pool.push(
        Math.round(Math.random() * 239 + 16)
          .toString(16)
          .toUpperCase()
      );
    }
  },
  generateRandomCells(): void {
    this.cleanCells();
    let size = config.cellSize;
    let poolSize = config.poolSize;
    this.generateCellPool(poolSize);
    for (let i = 0; i < size; i++) {
      let row: string[] = [];
      for (let j = 0; j < size; j++) {
        row.push(state.pool[Math.floor(Math.random() * state.pool.length)]);
      }
      state.cells.push(row);
    }
  },
  generateProblems(): void {},
  appendOutput(input: string): void {
    state.buffer.push(input);
  },
  setLastClicked(x: number, y: number): void {
    state.lastClicked.x = x;
    state.lastClicked.y = y;
  },
  changeDirection(): void {
    // if (state.direction == Direction.Horizontal) {
    //   state.direction = Direction.Vertical;
    // } else {
    //   state.direction = Direction.Horizontal;
    // }
    state.direction = !state.direction;
  },
  gameStatus(): boolean {
    if (state.buffer.length >= config.bufferSize) {
      return false;
    } else {
      return true;
    }
  }
};

export default { config, state, mutations };
