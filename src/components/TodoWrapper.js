import React, {useState} from 'react'
import { Todo } from './todo';
import { TodoForm } from './TodoForm'
import {v4 as uuidv4} from 'uuid';


// to inicialize
uuidv4();

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        setTodos ([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
        console.log(todos); 
    }

    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }


  return (
   <div className='TodoWrapper'>
    <h1> Get things Done! </h1>
    <TodoForm addTodo = {addTodo} />
    {/* to generate a todo to each value of the state */}
    {todos.map ((todo, index) => (
        <Todo task = {todo} key = {index} toggleComplete={toggleComplete} deleteTodo = {deleteTodo} /> 
    ))}
   </div>
  )
}



