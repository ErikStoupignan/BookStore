const ADD_BOOK = 'src/redux/books/ADD_BOOK';
const REMOVE_BOOK = 'src/redux/books/REMOVE_BOOK';
const LOAD_API_BOOK = 'ADD_API_BOOK';

// const api_url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/p9u8xyC9Oyn9tRNS0QGx/books/';
// const unique_Id = ' p9u8xyC9Oyn9tRNS0QGx';

// const initialBook = [{
//   id: '0',
//   title: 'LaBiblia',
//   author: 'Federico',
//   category: 'Fiction',
// },
// {
//   id: '1',
//   title: 'ViajeAlCentroRedux',
//   author: 'Luis',
//   category: 'Comedy',
// }];
const initialState = [];

const reduce = (state = initialState, actions) => {
  switch (actions.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          title: actions.title,
          author: actions.author,
          category: actions.category,
          id: actions.id,
        },
      ];

    case REMOVE_BOOK:
      return state.filter((item) => item.id !== actions.id);

    case LOAD_API_BOOK:
      return [
        ...state,
        ...actions.arrBook,
      ];

    default:
      return state;
  }
};

// const loadApiBook = (arr) => ({
//   type: LOAD_API_BOOK,
//   arrBook: arr,
// });

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

export { addBooks, removeBooks, LOAD_API_BOOK };
export default reduce;
