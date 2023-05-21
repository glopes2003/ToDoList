/* Here we are displaying the added things to do */
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({task, toggleComplete}) => {
  return (
    <div className='Todo'>
      <p onClick={() => toggleComplete(task.id)} className= {`${task.completed ? 'completed' : ""}`} >{task.task}</p>     {/* to mark when completed */}
      <div>
        <FontAwesomeIcon icon = {faPenToSquare} />
        <FontAwesomeIcon icon = {faTrash} onClick = {() => deleteTodo(task.id)} />
      </div>

      

    </div>
  )
}
