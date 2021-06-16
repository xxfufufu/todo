import React from 'react'
import List from '../List'
import Input from '../Input'

function All({todo}) {

    console.log(todo)
    const empty__todo = {
        marginTop: '100px',
        color: 'gray',
        fontSize: '14px',
        textAlign: 'center'
    }
    return (
        <div className="list__containerAll">
            <Input />
            {todo.length === 0 ? 
            <div style={empty__todo}>You have no todo's left, yeay!</div> :            
                todo.map((item, index) =>{
                    return(
                        <List key={index} details={item.details} done={item.done}
                        id={item.id}
                        />
                    )
                })
            
        }
        </div>
    )
}

export default All
