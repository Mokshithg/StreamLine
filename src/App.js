 import React from 'react'
 import { useState } from 'react';
 import { Footer } from './MyComponents/Footer';
 import Header from './MyComponents/Header';
 import { Todos } from './MyComponents/Todos';
export const App = () => {
   const onDelete = (todo) =>{
     console.log("Deleted the function of ", todo);
     setTodos(todos.filter((e)=>{
       return e!==todo;
     }));
   }
   const [todos,setTodos] = useState([
     {
       Sno : 1,
       title : " It's time to shop",
       description : "You need to go for shopping to attend your sister's wedding!!"
     },
     {
       Sno : 2,
       title : " It's time to eat",
       description : "You need to eat to maintain a good health"
     },
     {
       Sno : 3,
       title : " It's time to sleep",
       description : "You need to slee to maintain a good healthy cycle!!"
     } 
   ])
    
 
  return (
    <div>
       <Header title="MyTodoList"/>
       <Todos todos={todos} onDelete={onDelete}/>
       console.log(1 !=='1');
       <Footer/>     
    </div>
  )
}
export default App;

