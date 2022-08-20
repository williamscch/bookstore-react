import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionCheckStatus } from '../redux/categories/categories';

const Categories = () => {
  const status = useSelector((state) => state.categories);

  const dispatch = useDispatch();
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '20vh',
        flexDirection: 'column',
      }}
    >
      <button
        style={{
          fontSize: '0.7rem',
          borderRadius: '4px',
          height: '2rem',
          backgroundColor: 'rgb(2, 144, 255)',
          border: 'none',
          color: '#ffff',
          width: '10rem',
        }}
        type="button"
        onClick={() => dispatch(actionCheckStatus())}
      >
        Check status
      </button>
      <h1>{status[0]}</h1>
    </div>
  );
};
export default Categories;
