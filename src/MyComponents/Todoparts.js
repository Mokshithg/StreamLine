import React from 'react'

export const Todoparts = ({todo,onDelete}) => {
  return (
    <div>
       <h3>{todo.title}</h3>
       <p>{todo.description}</p>
       <button className='btn btn-sm btn-danger mt-3' onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
  )
}
