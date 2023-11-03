import { http } from '../../helpers/api';
import {
    IGetAllTodosRequest,
    IGetAllTodosResponse,
    IUpdateTodoRequest,
    IUpdateTodoResponse,
} from './todo.interfaces';

export const handleGetAllTodos = async (params: IGetAllTodosRequest) => {
  const result = await http.get<IGetAllTodosRequest, IGetAllTodosResponse>(
    'todos',
    params,
  );
  return result.data;
};

export const handleUpdateTodo = async (data: IUpdateTodoRequest) => {
  const id = data.id;
  delete data.id;
  const result = await http.put<IUpdateTodoRequest, IUpdateTodoResponse>(
    `todos/${id}`,
    data,
  );
  return result.data;
};
