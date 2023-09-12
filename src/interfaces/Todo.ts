export interface Todo {
    id: number;
    title: string;
    done: boolean;
    date: string;
}
export interface TodoListMethods {
    addTodo: (todo: Todo) => string;
    getTodoList: Array<Todo>;
    deleteTodo: (id: number) => string;
    completeTodo: (id: number) => void;
}
