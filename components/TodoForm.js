import React from 'react';

//  to keep track of whatever the users are typing
import { useState } from 'react';

//onSubmit{handleSubmit} = captures the value of the state when we submit the form
// Por meio das props passamos dados de um arquivo para outro

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState(" ");  // vai ser uma string vazia inicialmente
    const handleSubmit = e => {
        //impede que a página recarregue quando o //captures the value of the state when we submit the formormulário é submetido (o padrão)
        e.preventDefault();

       //console.log(value); 
       addTodo(value);

       // limpar o campo
       //setValue("")

    }
  return (
    <form className = 'TodoForm' onSubmit = {handleSubmit}> 
        <input type = 'text' className = 'todo-input' placeholder = 'What is the task today?'
        onChange = { (e) => setValue(e.target.value)}/>     
        <button type = 'Submit' className = 'todo-btn'> Add Task </button>
    </form>
  )
}
