import { client } from './client';

export async function createTodo(todoObj) {
  const response = await client.from('todos').insert(todoObj);

  return response.data;
}

export async function getTodos() {
  const response = await client.from('todos').select('*');

  return response.data;
}