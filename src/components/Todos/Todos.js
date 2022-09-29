import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import './Todos.css';
import { Redirect } from 'react-router-dom';
import { createTodo, getTodos } from '../../services/todos';
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
  

  if (!user) {
    return <Redirect to='/auth/sign-in'/>;
  }

  return (
    <div className='todo-main'>
      <div className='input-container'>
        <div className='todo-input'>
          <input value={description} type='text' onChange={(e) => setDescription(e.target.value)}></input>
          <button className='todo-btn' onClick={handleNewTodo}>Add Todo</button>
        </div>
        
      </div>
      <div className='todo-container'>
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              <label>{todo.description}</label>
              <input key={todo.id} type='checkbox'></input>
            </div>
          );
          
        })}
      </div>
    </div>
  );
}
