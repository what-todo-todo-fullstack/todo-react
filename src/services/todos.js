import { client, checkError } from './client';

export async function createTodo(todoObj) {
  const response = await client.from('todos').insert(todoObj);

  return response.data;
}

export async function getTodos() {
  const response = await client.from('todos').select('*');

  return response.data;
}

export async function deleteTodo({ id }) {
  return await client.from('todos').delete().eq('id', id);
  
}

export async function toggleComplete({ id, complete }) {
  const response = await client.from('todos').update({ complete: !complete }).match({ id }).single();

  return checkError(response);
  
} 


