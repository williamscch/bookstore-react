import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionCheckStatus } from '../redux/categories/categories';

const Categories = () => {
  const status = useSelector((state) => state.categories);

  const dispatch = useDispatch();
  return (
    <div>
      <button type="button" onClick={() => dispatch(actionCheckStatus())}>Check status</button>
      <h1>{status}</h1>
    </div>
  );
};
export default Categories;
