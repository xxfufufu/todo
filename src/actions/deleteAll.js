import { DELETE_ALL } from "./action-types";

export default function deleteAll(payload) {
    return {
        type: DELETE_ALL,
        payload
    }
}