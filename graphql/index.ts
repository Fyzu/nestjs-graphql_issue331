
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export interface TodoCreateInput {
    title: string;
}

export interface IMutation {
    createTodo(input: TodoCreateInput): Todo | Promise<Todo>;
}

export interface IQuery {
    user(): User | Promise<User>;
    todo(id: string): Todo | Promise<Todo>;
    todos(): Todo[] | Promise<Todo[]>;
}

export interface Todo {
    id: string;
    title: string;
}

export interface User {
    id: string;
    firstName: string;
}
