import React from 'react'
import Todo from "./Todo";

const Todos = (props) => {
  return (
    <div className='container'>
      <h3>Todos List</h3>
      <Todo todo={props.todo[0]}/>
    </div>
  )
}

export default Todos
