import { ID } from '@datorama/akita';
import { TodoStore, todoStore } from './todo.store';

export class TodoService {

  constructor(private todoStore: TodoStore) {
  }

}

export const todoService = new TodoService(todoStore);
