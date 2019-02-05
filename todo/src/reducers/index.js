import { ADD_TODO, TOGGLE_COMPLETED } from '../actions';

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
        case TOGGLE_COMPLETED:
            return {
                ...state,
                todos: state.todos.map((todo, index) =>
                    action.payload === index
                        ? { ...todo, completed: !todo.completed }
                        : todo

                )
            }
        default:
            return state;
    }
}

export default reducer;