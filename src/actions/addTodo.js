import {ADD_TODO} from './action-types'

export default function addTodo(payload) {
    return {
        type: ADD_TODO,
        payload
    }
}