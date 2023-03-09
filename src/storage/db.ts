import { StateStorage } from 'zustand/middleware';
import { openDB } from 'idb';

const db = openDB('screenshare-plugin-store', 1, {
  upgrade(db) {
    db.createObjectStore('screenshare-plugin');
  },
});

export async function get(key: string) {
  return (await db).get('screenshare-plugin', key);
}
export async function set(key: string, value: any) {
  return (await db).put('screenshare-plugin', value, key);
}
export async function del(key: string) {
  return (await db).delete('screenshare-plugin', key);
}
export async function clear() {
  return (await db).clear('screenshare-plugin');
}
export async function keys() {
  return (await db).getAllKeys('screenshare-plugin');
}

export const databaseStorage: StateStorage = {
  getItem: async (name: string): Promise<string | null> => {
    return (await get(name)) || null;
  },
  setItem: async (name: string, value: string): Promise<void> => {
    await set(name, value);
  },
  removeItem: async (name: string): Promise<void> => {
    await del(name);
  },
};
