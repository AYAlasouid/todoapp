import React, { useState } from 'react'
import TodoForm from './todoform';
import {TbEditCircle} from 'react-icons/tb';
import{AiOutlineCloseCircle} from "react-icons/ai";


export default function Todo({todos,completeTodo,removeTodo,updateTodo}) {
  const[edit,setEdit]=useState({id:null,value:''})
  const submitUpdate=(value)=>{
    return 0
  }
  return (
    
      edit.id ?<TodoForm edit={edit}
      onSubmit={submitUpdate}/>
    : todos.map((todo,index)=>(
  <div>

      <div className='todo-row' key={index}>
        <div key={todo.id} className='todoText' onClick={()=>completeTodo(todo.id)}>
        {todo.text}
        </div>

        <div className='icons'>
          <AiOutlineCloseCircle onClick={()=>removeTodo(todo.id)}>
          </AiOutlineCloseCircle>
          <TbEditCircle    onClick={()=>setEdit ({id:todo.id ,value : todo.text})}>
            
          </TbEditCircle>
          </div>
          </div>
    </div>
    
    
    ))
  )
}
