const ADD_BOOK = 'src/redux/books/ADD_BOOK';
const REMOVE_BOOK = 'src/redux/books/REMOVE_BOOK';

const initialState = [{
  id: '0',
  title: 'LaBiblia',
  author: 'Federico',
  category: 'Fiction',
},
{
  id: '1',
  title: 'ViajeAlCentroRedux',
  author: 'Luis',
  category: 'Comedy',
}];

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

export { addBooks, removeBooks };
export default reduce;
