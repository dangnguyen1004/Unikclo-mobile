import {createAsyncThunk} from '@reduxjs/toolkit';
import {IGetAllTodosRequest, IUpdateTodoRequest} from './todo.interfaces';
import {handleGetAllTodos, handleUpdateTodo} from './todo.services';

export const onGetAllTodos = createAsyncThunk(
  'todo/getAll',
  async (params: IGetAllTodosRequest) => {
    try {
      const result = await handleGetAllTodos(params);
      return result;
    } catch (error) {
      throw error;
    }
  },
);

export const onUpdateTodo = createAsyncThunk(
  `todo/update`,
  async (data: IUpdateTodoRequest, {dispatch}) => {
    try {
      const result = await handleUpdateTodo(data);
      return result;
    } catch (error) {
      throw error;
    }
  },
);
