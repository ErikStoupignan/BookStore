/* eslint-disable prefer-template */
const ADD_BOOK = 'src/redux/books/ADD_BOOK';
const REMOVE_BOOK = 'src/redux/books/REMOVE_BOOK';
const LOAD_API_BOOK = 'ADD_API_BOOK';

const initialState = [];

const reduce = (state = initialState, actions) => {
  switch (actions.type) {
    case ADD_BOOK + '/fulfilled':
      return [
        ...state,
        actions.payload,
      ];

    case REMOVE_BOOK:
      return state.filter((item) => item.id !== actions.id);

    case LOAD_API_BOOK + '/fulfilled':
      return [
        ...actions.payload,
      ];

    default:
      return state;
  }
};

const addBooks = (title, author, category, id) => ({
  type: ADD_BOOK,
  title,
  author,
  category,
  id,
});

const removeBooks = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export {
  addBooks,
  removeBooks,
  LOAD_API_BOOK,
  ADD_BOOK,
  REMOVE_BOOK,
};
export default reduce;
