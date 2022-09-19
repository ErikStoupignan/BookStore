const ADD_BOOK = 'src/redux/books/ADD_BOOK';
const REMOVE_BOOK = 'src/redux/books/REMOVE_BOOK';

const initialState = [];

const reduce = (state = initialState, actions) => {
  switch (actions.type) {
    case ADD_BOOK:
      return [
        ...initialState,
        {
          title: actions.title,
          author: actions.author,
          category: actions.category,
          id: actions.id,
        },
      ];

    case REMOVE_BOOK:
      return initialState.map((item) => item.id !== actions.id);

    default:
      return state;
  }
};

const addBooks = (title = 'How to use Regex!', author = 'Luis', category = 'Action', id) => ({
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
