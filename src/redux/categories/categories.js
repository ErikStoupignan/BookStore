const STATUS_CHECKED = 'src/redux/categories/STATUS_CHECKED';

const initialState = [];

const reduce = (state = initialState, actions) => {
  switch (actions.type) {
    case STATUS_CHECKED:
      return 'Under construction';
    default:
      return state;
  }
};

const checkStatus = () => ({
  type: STATUS_CHECKED,
});

export { checkStatus };
export default reduce;
