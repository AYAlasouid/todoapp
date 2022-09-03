import React, { useState } from 'react'

export default function TodoForm(props) {
  const[input,setInput]=
  useState(props.edit? props.edit.value :'');
  const handelsubmit =(e) => {
    e.preventDefault();
    //* CALLBACK PART
    props.onSubmit({
      id: Math.floor(Math.random()*1000),
      text :input
    })



    //* CLEAR INPUT PART
    setInput('')

  }
  return (
    <form onSubmit={handelsubmit}>
      {props.edit?
      <>
      <input 
      type="text"
      placeholder='update your todo ...'
      value={input}
      onChange={(e)=>setInput(e.target.value)}
      className='todo-input edit'
      />
      <button className='todo-button edit'>UPDATE</button>
      </>
      :
      <>
       <input 
      type="text"
      placeholder='add task ...'
      value={input}
      onChange={(e)=>setInput(e.target.value)}
      className='todo-input'
      />
      <button className='todo-button'>add new todo</button>
      </>
    }
    </form>
  )
}
