import './FormAdding.scss';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { addBooks } from '../../redux/books/books';

const FormAdding = () => {
  // Local state
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('DEFAULT');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (title === '' || author === '' || category === 'DEFAULT') return;
    dispatch(addBooks(title, author, category, nanoid()));
    setTitle('');
    setAuthor('');
    setCategory('DEFAULT');
  };

  return (
    <section className="form-section">
      <form className="form-Container">
        <input className="Input-title" type="text" value={title} placeholder="Book title" onChange={(e) => setTitle(e.target.value)} />
        <input className="Input-Author" type="text" value={author} placeholder="Author" onChange={(e) => setAuthor(e.target.value)} />
        <select value={category} className="CategorysMenu" onChange={(e) => setCategory(e.target.value)}>
          <option disabled value="DEFAULT"> -- select an option -- </option>
          <option value="Fiction">Fiction</option>
          <option value="Drama">Drama</option>
          <option value="Comedy">Comedy</option>
          <option value="Action">Action</option>
          <option value="Romance">Romance</option>
          <option value="Horror">Horror</option>
        </select>
        <button onClick={handleAdd} className="addBooksBtn" type="button">Add books</button>
      </form>
    </section>
  );
};

export default FormAdding;
