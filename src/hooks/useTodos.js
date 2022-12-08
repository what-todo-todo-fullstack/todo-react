import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { getTodos } from '../services/todos';

export function useTodos() {
  const [todos, setTodos] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchTodos = async () => {
      const data = await getTodos(user.id);
      // for (let todo of data) {
      //   console.log('dataaa', todo.task);
      // }

      setTodos(data);
    };
    fetchTodos();
  }, []);

  return { todos, setTodos };
}
