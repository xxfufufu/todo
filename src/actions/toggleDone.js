import {TOGGLE_DONE} from './action-types'

export default function toggleCheck(payload) {
    return {
        type: TOGGLE_DONE,
        payload
    }
}