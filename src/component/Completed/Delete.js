import React from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import '../../style/Delete.css'
import {useDispatch} from 'react-redux'
import deleteAll from '../../actions/deleteAll'

function Delete() {

    const dispatch = useDispatch();

    return (
        <button onClick={()=> dispatch(deleteAll())} className="delete__button">
            <DeleteOutlineIcon />
            <div>Delete all</div>
        </button>

    )
}

export default Delete
