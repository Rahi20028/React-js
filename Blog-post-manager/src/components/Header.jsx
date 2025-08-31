// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ padding: '1rem', background: '#eee', marginBottom: '1rem' }}>
      <nav>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/create">Create Post</Link>
      </nav>
    </header>
  );
};

export default Header;