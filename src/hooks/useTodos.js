import { useState, useEffect } from 'react';
import { getTodos } from '../services/todos';

export function useTodos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const data = await getTodos();
      for (let todo of data) {
        console.log('dataaa', todo.task);
      }

      setTodos(data);
    };
    fetchTodos();
  }, []);

  return { todos, setTodos };
}
