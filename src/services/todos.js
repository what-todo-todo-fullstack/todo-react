const BASE_URL = 'http://localhost:7890';

export async function createTodo(task) {
  const resp = await fetch(`${BASE_URL}/api/v1/todos`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
    credentials: 'include',
  });
  if (resp.ok) {
    return resp;
  }
}

export async function getTodos() {
  const resp = await fetch(`${BASE_URL}/api/v1/todos`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    // body: JSON.stringify(id),
  });
  if (resp.ok) {
    const todos = await resp.json();
    return todos;
  }
}

export async function toggleComplete({ ...todo }) {
  const resp = await fetch(`${BASE_URL}/api/v1/todos/${todo.id}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    // mode: 'cors',
    body: JSON.stringify({ complete: !todo.complete }),
  });
  if (resp.ok) {
    const updatedTodo = await resp.json();
    console.log('asdfasdf', updatedTodo);
    return updatedTodo;
  }
}

export async function deleteTodo(id) {
  const resp = await fetch(`${BASE_URL}/api/v1/todos/${id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    mode: 'cors',
  });
  if (resp.ok) {
    return resp;
  }
}
