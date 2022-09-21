import { createAsyncThunk } from '@reduxjs/toolkit';
import { LOAD_API_BOOK } from './books';

const uniqueId = 'p9u8xyC9Oyn9tRNS0QGx';
const apiUrl = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${uniqueId}/books/`;

const getBooks = createAsyncThunk(
  LOAD_API_BOOK,
  async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    // console.log(data);
    // console.log(data.item1);
    const result = Object.keys(data).map((key) => ({ id: key, ...data[key][0] }));
    return result;
  },
);

export default getBooks;
