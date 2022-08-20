import React from 'react';
import { FaUserNinja } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const titleStyle = {
    color: 'rgb(2, 144, 255)', fontSize: '2rem', margin: '0 1rem',
  };
  return (
    <nav>
      <h1 style={titleStyle}>BOOKSTORE</h1>
      <ul style={{ display: 'flex', color: 'black', gap: '2rem' }}>
        <li>
          <Link className="link" to="/">
            BOOKS
          </Link>
        </li>
        <li>
          <Link className="link" to="/categories">
            CATEGORIES
          </Link>
        </li>
      </ul>
      <div style={{ marginLeft: 'auto', padding: '3px' }}>
        <FaUserNinja
          style={{
            color: 'rgb(2, 144, 255)',
            fontSize: '1.8rem',
          }}
        />
      </div>
    </nav>
  );
};

export default Navigation;
