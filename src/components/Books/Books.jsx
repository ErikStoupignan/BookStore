import React, { useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import ListBooks from '../ListBooks/ListBooks';
import './Books.scss';
import FormAdding from '../FormAdding/FormAdding';
import getBooks from '../../redux/books/Api';

const Books = () => {
  const books = useSelector((state) => state.books, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  const sendBooks = books.map((obj) => (
    <ListBooks
      title={obj.title}
      author={obj.author}
      category={obj.category}
      id={obj.id}
      key={obj.id}
    />
  ));

  return (
    <section className="Father-Books">
      <h1 className="BookPage-title">Books</h1>
      <article className="container-UlBooks">
        <ul className="Ul-books">
          {sendBooks}
        </ul>
      </article>
      <article className="Container-FormAdding">
        <FormAdding />
      </article>
    </section>
  );
};

export default Books;
