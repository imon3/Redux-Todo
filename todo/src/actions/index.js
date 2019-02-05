export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';

export function addNewTodo(newTodos) {
    return {
        type: ADD_TODO,
        payload: newTodos
    }
}

export function toggleCompletedTask(index) {
    return {
        type: TOGGLE_COMPLETED,
        payload: index
    }
}