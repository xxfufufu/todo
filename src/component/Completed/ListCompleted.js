import React from 'react'
import '../../style/List.css'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import toggleCheck from '../../actions/toggleDone'
import {useDispatch} from 'react-redux';
import deleteTodo from '../../actions/deleteTodo'


function ListCompleted({details, done, id}) {

    const dispatch = useDispatch();

    return (
        <div>
            <div className="list__todo">
                <input className="list__checkbox" type="checkbox" checked={done} onChange={()=> dispatch(toggleCheck(id))}/>
                <div className={`list__details ${done && "--done"}`}>{details}</div>
                <div onClick={() => dispatch(deleteTodo(id))}>
                <DeleteOutlineIcon color="disabled" style={{cursor: 'pointer'}} />
                </div>
            </div>
        </div>
    )
}

export default ListCompleted
