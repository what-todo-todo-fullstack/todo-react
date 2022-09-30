import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import './Todos.css';
import { Redirect } from 'react-router-dom';
import { createTodo, deleteTodo, getTodos, toggleComplete } from '../../services/todos';
import { useTodos } from '../../hooks/useTodos';

export default function Todos() {

  const [description, setDescription] = useState('');
  const { user } = useContext(UserContext);
  const { todos, setTodos } = useTodos();
  


  

  const handleNewTodo = async () => {

    const newTodo = {
      description: description,
      complete: false
    };

    await createTodo(newTodo);
    const supTodo = await getTodos();
    setTodos(supTodo);
    setDescription('');
  };

  const handleComplete = async (todo) => {
    const updatedTodo = await toggleComplete(todo);
    setTodos((prevTodos) => 
      prevTodos.map((prevTodo) => prevTodo.id === todo.id ? updatedTodo : prevTodo));

  };

  const handleDelete = async (todo) => {
    await deleteTodo(todo);
    const newTodos = todos.filter((oldTodo) => todo.id !== oldTodo.id);
    setTodos(newTodos);
  };


  

  if (!user) {
    return <Redirect to='/auth/sign-in'/>;
  }

  return (
    <div className='todo-main'>
      <div className='input-container'>
        <div className='todo-input'>
          <form onSubmit={handleNewTodo}>
            <input value={description} type='text' onChange={(e) => setDescription(e.target.value)}></input>
            <button className='todo-btn'>Add Todo</button>
          </form>
          
        </div>
        
      </div>
      <div className='todo-container'>
        {todos.map((todo) => {
          
          return <div key={todo.id}>
            <label>{todo.description}</label>
            <input
              key={todo.id} 
              type='checkbox'
              onClick={() => handleComplete(todo)}>
            </input>
            <button 
              key={todo.id + 1}
              className='delete-btn' 
              onClick={() => handleDelete(todo)}>
                Delete completed todos
            </button>
          </div>;
          
          
        })}
      </div>
      <div>
        
      </div>
    </div>
  );
}
