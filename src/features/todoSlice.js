import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todo: "",
    tasks: [],
    message: ""
  },
  reducers: {
    addTodo: (state, action) => {
      if (state.todo) {
        state.tasks.push(state.todo);
        alert("Todo Added!");
        state.message = "Todo Added!";
      } else {
        alert("Please type something...");
        state.message = "Please type something";
      }
    },
    storeTodoInput: (state, action) => {
      state.todo = action.payload;
    }
  }
});

export const { storeTodoInput, addTodo } = todoSlice.actions;
export default todoSlice.reducer;
