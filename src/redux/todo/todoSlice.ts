import {createSlice} from '@reduxjs/toolkit';
import {ITodoSlice} from './todo.interfaces';
import {onGetAllTodos, onUpdateTodo} from './todo.actions';

const initialState: ITodoSlice = {
  todos: [],
  loading: false,
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {},
  extraReducers: builder => {
    /* --------------------------------- Get all -------------------------------- */
    builder.addCase(onGetAllTodos.pending, state => {
      state.loading = true;
    });
    builder.addCase(onGetAllTodos.fulfilled, (state, action) => {
      state.todos = action.payload.todos;
      state.loading = false;
    });
    builder.addCase(onGetAllTodos.rejected, state => {
      state.loading = false;
    });
    /* --------------------------------- Update --------------------------------- */
    builder.addCase(onUpdateTodo.pending, state => {
      state.loading = true;
    });
    builder.addCase(onUpdateTodo.fulfilled, (state, action) => {
      state.loading = false;
      const newTodos = state.todos.filter(
        todo => todo.id !== action.payload.id,
      );
      newTodos.push(action.payload);
      state.todos = newTodos;
    });
    builder.addCase(onUpdateTodo.rejected, state => {
      state.loading = false;
    });
  },
});

export default todoSlice.reducer;
