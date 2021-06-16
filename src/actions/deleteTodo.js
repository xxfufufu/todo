import {DELETE} from './action-types';

export default function deleteTodo (payload) {
    return {
        type: DELETE,
        payload
    }
}