import {createStore } from 'redux';
import Todos from '../reducers/todoReducers';

function saveToLocalStorage(state) {
    try {
        const serialisedState = JSON.stringify(state);
        localStorage.setItem("persistantState", serialisedState);
    } catch (e) {
        console.log(e)
    }
}

function loadFromLocalStorage() {
    try {
        const serialisedState = localStorage.getItem("persistantState");
        if (serialisedState === null) return undefined;
        return JSON.parse(serialisedState);
    } catch (e) {
        console.log(e);
        return undefined
    }    
}


const store = createStore(Todos, loadFromLocalStorage());

store.subscribe(()=> saveToLocalStorage(
    store.getState()))

export default store;