export const ADD_TODO = 'ADD_TODO';

export function addNewTodo(newTodos) {
    return {
        type: ADD_TODO,
        payload: newTodos
    }
}