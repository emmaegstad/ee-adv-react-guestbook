import { checkError, client } from './client.js';

export async function getEntries() {
  const resp = await client.from('guestbook').select('*');
  return checkError(resp);
}

export async function addEntry(name, message) {
  const response = await client.from('guestbook').insert({ name, message });
  return checkError(response);
}

export async function deleteEntry(id) {
  const response = await client.from('guestbook').delete().eq('id', id);
  return checkError(response);
}
