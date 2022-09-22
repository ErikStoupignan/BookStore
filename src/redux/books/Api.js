import { createAsyncThunk } from '@reduxjs/toolkit';
import { ADD_BOOK, LOAD_API_BOOK, REMOVE_BOOK } from './books';

const uniqueId = 'NUnOw1VUF2c8wd4VEMTv';
const apiUrl = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${uniqueId}/books/`;

const getBooks = createAsyncThunk(
  LOAD_API_BOOK,
  async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const result = Object.keys(data).map((key) => ({ id: key, ...data[key][0] }));
    return result;
  },
);

const addBookNew = createAsyncThunk(
  ADD_BOOK,
  async (newBook) => {
    await fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify({
        item_id: `${newBook.idGenerate}`,
        title: `${newBook.title}`,
        author: `${newBook.author}`,
        category: `${newBook.category}`,
      }),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    });
    return newBook;
  },
);

const deleteBook = createAsyncThunk(
  REMOVE_BOOK,
  async (id) => {
    await fetch(`${apiUrl}${id}`, { method: 'DELETE' });
    return id;
  },
);

export { getBooks, addBookNew, deleteBook };
