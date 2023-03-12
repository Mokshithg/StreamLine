import React from 'react'
import { Todoparts } from './Todoparts'

export const Todos = (props) => {
  return (
    <div className='container py-3'>
       <h2 className='text-center'>Todos List</h2>
       {props.todos.length === 0?<h6 className='text-center'>No todos to display</h6>:
       props.todos.map((todo) => {
        return <Todoparts todo={todo} key={todo.sno} onDelete={props.onDelete}/>
       })}    
    </div>
  )
}
