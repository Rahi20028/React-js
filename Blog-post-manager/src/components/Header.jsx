// src/components/Header.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

const Header = () => {
  const { theme, toggleTheme} = useContext(ThemeContext)
  return (
<header style={{
      padding: '1rem',
      background: theme === 'light' ? '#eee' : '#333',
      color: theme === 'light' ? '#000' : '#fff',
      marginBottom: '1rem'
    }}>
            <nav>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/create">Create Post</Link>
      </nav>
      <button onClick={toggleTheme}>
        switch to {theme === 'light' ? 'dark' : 'light'} Mode
      </button>
    </header>
  );
};

export default Header;