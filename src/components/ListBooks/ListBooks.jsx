import React from 'react';
import './ListBooks.scss';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBooks } from '../../redux/books/books';

const ListBooks = (props) => {
  const {
    id,
    title,
    author,
    category,
  } = props;
  const dispatch = useDispatch();

  return (
    <li id={id} className="MainContainerBook">

      <section className="HeaderBook-Container">
        <div className="InfoBook-Container">

          <p className="Categories">{category}</p>
          <h3>{title}</h3>
          <p className="Author">{author}</p>

          <article className="Buttons-info">
            <button type="button">Comments</button>
            <hr />
            <button onClick={() => dispatch(removeBooks(id))} type="button">Remove</button>
            <hr />
            <button type="button">Edit</button>
          </article>

        </div>

        <div className="Graphic-Container">

          <div className="Graphic">
            <div className="circular-progress-container">
              <div className="circular-progress" />
            </div>
          </div>

          <div className="Data-Graphic-Container">
            <p>75%</p>
            <p>Completed</p>
          </div>

        </div>
      </section>

      <hr className="hr-line" />

      <section className="Update-Container">
        <p className="current-title">CURRENT CHAPTER</p>
        <p className="chapter">Chapter 17</p>
        <button className="Update-button" type="button">UPDATE PROGRESS</button>
      </section>

    </li>
  );
};

ListBooks.defaultProps = {
  id: '0',
  title: null,
  author: null,
  category: null,
};

ListBooks.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  category: PropTypes.string,
};

export default ListBooks;
