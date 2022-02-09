import { checkError, client } from './client.js';

export async function getEntries() {
  const resp = await client.from('guestbook').select('*');
  return checkError(resp);
}
