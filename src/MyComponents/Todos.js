import React from 'react'
import {TodoItem} from './TodoItem'

export const Todos = (props) => {
  let myStyle = {
    minHeight: "90vh"
  }
  return (
    <div className="container" style={myStyle}>
        <h3 className='my-3'>Todos-list</h3>
        {props.todos.length===0 ? <h1>No Todos to display!!!</h1> :
        props.todos.map((todo)=>{
          return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>        
        })
        }
    </div>
  )
}
