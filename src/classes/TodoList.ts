import { Todo, TodoListMethods } from '../interfaces/Todo';

export class TodoList implements TodoListMethods {
    private List: Array<Todo> = [];

    private generarId () {
        const ids = this.List.map(e => e.id);
        if (!ids.length) {
            ids.push(0);
        }
        return Math.max(...ids) + 1;
    }

    addTodo (todo: Todo): string {
        todo.id = this.generarId();
        this.List.push(todo);
        return 'Added Correctly';
    }

    get getTodoList (): Array<Todo> {
        return this.List;
    }

    deleteTodo (id: number): string {
        this.List = this.List.filter(e => e.id !== id);
        return 'Deleted Correctly';
    }

    completeTodo (id: number) {
        this.List = this.List.map(todo => {
            if (todo.id === id) {
                todo.done = true;
            }
            return todo;
        });
    }
}
