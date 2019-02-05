import { ADD_TODO } from '../actions';

const initialState = {
    todos: [
        {
            value: 'wash car',
            completed: false
        }
    ]
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            const newTodos = {
                value: action.payload,
                completed: false
            };
            return {
                ...state,
                todos: [...state.todos, newTodos]
            };
        default:
            return state;
    }
}

export default reducer;