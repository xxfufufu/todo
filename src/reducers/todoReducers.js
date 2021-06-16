import { TOGGLE_DONE, ADD_TODO, DELETE, DELETE_ALL } from "../actions/action-types";

const initialState = {
    todos: []
};

function Todos(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO: {
            if(action.payload==="") {
                return state
            }
            return {
                ...state,
                todos: [
                    ...state.todos, {
                        details: action.payload,
                        done: false,
                        id: Date.now()
                    }
                ]
            }
        }
        case TOGGLE_DONE: {
            return { 
                ...state, 
                todos: state.todos.map(todo => {
                    if (todo.id !== action.payload) {
                        return todo
                    }
                    return {
                        ...todo,
                        done: !todo.done
                    }
                })
            }
        }
        case DELETE: {
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        }
        case DELETE_ALL: {
            return {
                ...state,
                todos : state.todos.filter(todo => todo.done !== true)
            }
        }
        default:
            return state
    }
};

export default Todos;