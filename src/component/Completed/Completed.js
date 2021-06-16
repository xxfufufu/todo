import React from 'react'
import Input from '../Input'
import Delete from './Delete'
import ListCompleted from './ListCompleted'

function Completed({todo}) {
    
    const todoCompleted = todo.filter(item => item.done === true)

    return (
        <div className="list__containerCompleted">
            <Input /> 
            {
                todoCompleted.map((item, index) =>{
                    return(
                        <ListCompleted key={index} 
                        details={item.details}
                        done={item.done}
                        id={item.id} />
                    )
                })
            }
            {todoCompleted.length === 0 ? null :
            <Delete />}
        </div>
    )
}

export default Completed
