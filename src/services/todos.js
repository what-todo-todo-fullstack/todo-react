import { client, checkError } from './client';
const BASE_URL = 'http://localhost:7890';

export async function createTodo(task) {
  const resp = await fetch(`${BASE_URL}/api/v1/todos`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ task }),
    credentials: 'include',
  });
  if (resp.ok) {
    console.log(resp);
    return resp;
  }
}

export async function getTodos() {
  const response = await client.from('todos').select('*');

  return response.data;
}

export async function deleteTodo({ id }) {
  return await client.from('todos').delete().eq('id', id);
}

export async function toggleComplete({ id, complete }) {
  const response = await client
    .from('todos')
    .update({ complete: !complete })
    .match({ id })
    .single();

  return checkError(response);
}
