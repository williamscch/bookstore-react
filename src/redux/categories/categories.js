const STATUS_CHECKED = 'bookstore-react/categories/STATUS_CHECKED';

export default function categoriesReducer(state = [], action) {
  switch (action.type) {
    case STATUS_CHECKED:
      return 'Under construction';
    default:
      return state;
  }
}

export const actionCheckStatus = () => ({
  type: STATUS_CHECKED,
});
