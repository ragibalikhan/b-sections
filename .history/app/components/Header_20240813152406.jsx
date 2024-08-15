import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you use React Router

const Header = () => {
  return (
    <header style={{ backgroundColor: '#333', color: '#fff', padding: '10px' }}>
      <nav>
        <Link to="/" style={{ color: '#fff', marginRight: '20px' }}>Home</Link>
        <Link to="/products" style={{ color: '#fff', marginRight: '20px' }}>Products</Link>
        <Link to="/about" style={{ color: '#fff' }}>About</Link>
      </nav>
    </header>
  );
};

export default Header;
