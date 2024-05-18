import React from 'react';
import './Header.css';
import LogoDiv from './LogoDiv.jsx';
import SearchRow from './SearchRow.jsx';

function Header() {
  return (
    <div className = 'headerContainer'>
      <div className = "navBar">
        <LogoDiv></LogoDiv>
        <a href = "localhost:5173">Sign Up</a>
        <a href = "localhost:5173">Login</a>
        <a href = "localhost:5173">Contact</a>
      </div>
      <h1 className = "headerText">Find your ideal partner</h1>
      <SearchRow></SearchRow>
    </div>
  );
}

export default Header;
