import { useState, useEffect } from 'react';
import { getTodos } from '../services/todos';

export function useTodos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const data = await getTodos();
      
      setTodos(data);
    };
    fetchTodos();
    
  }, []);

  return { todos, setTodos };
}