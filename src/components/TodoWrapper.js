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

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
    }

  return (
   <div className='TodoWrapper'>
    <h1> Get things Done! </h1>
    <TodoForm addTodo = {addTodo} />
    {/* to generate a todo to each value of the state */}
    {todos.map ((todo, index) => (
        todo.isEditing ? (
            <EditTodoForm/>
        ) : (
            <Todo task = {todo} key = {index} toggleComplete={toggleComplete} 
            deleteTodo = {deleteTodo} editTodo = {editTodo} /> 
        )
    ))}
   </div>
  )
}



