import React from 'react'
import '../style/Input.css'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import addTodo from '../actions/addTodo' 


function Input() {

    const [inputValue, setInputValue] = useState('')
    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const dispatch = useDispatch();

    return (
        <div className="input__container">
            <input className="input__form" type="text" placeholder="Add details" value={inputValue} onChange={handleChange} />
            <button className="input__button" onClick={() => {dispatch(addTodo(inputValue)); setInputValue('')}}>Add</button>
        </div>
    )
}

export default Input
