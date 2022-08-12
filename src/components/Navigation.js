import React from 'react';
import { FaUserNinja } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const titleStyle = { color: 'rgb(2, 144, 255)', fontSize: '2rem' };
  return (
    <nav style={{ display: 'flex' }}>
      <h1 style={titleStyle}>Bookstore CMS</h1>
      <ul>
        <li><Link className="link" to="/">BOOKS</Link></li>
        <li><Link className="link" to="/categories">CATEGORIES</Link></li>
      </ul>
      <div><FaUserNinja style={titleStyle} /></div>
    </nav>
  );
};

export default Navigation;
