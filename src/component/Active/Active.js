import React from 'react'
import Input from '../Input'
import List from '../List'

function Active({todo}) {
    const todoActive = todo.filter(item => item.done === false)
    return (
        <div className="list__containerActive">
            <Input />
            {
                todoActive.map((item, index) =>{
                    return(
                        <List key={index}
                        details={item.details}
                        done={item.done}
                        id={item.id} />
                    )
                })
            }
        </div>
    )
}

export default Active
