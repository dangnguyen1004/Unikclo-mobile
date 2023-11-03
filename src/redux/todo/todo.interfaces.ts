export interface ITodo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

export interface ITodoSlice {
  todos: Array<ITodo>;
  loading: boolean;
}

export interface IGetAllTodosRequest {}

export interface IGetAllTodosResponse {
  todos: Array<ITodo>;
  total: number;
  skip: number;
  limit: number;
}

export interface IUpdateTodoRequest {
  id?: number;
  todo?: string;
  completed?: boolean;
}

export interface IUpdateTodoResponse extends ITodo {}
