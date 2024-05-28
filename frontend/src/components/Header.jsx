import React, { useState , useEffect } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import LogoDiv from './LogoDiv.jsx';
import SearchRow from './SearchRow.jsx';
import { FaUserPlus } from 'react-icons/fa';
import { CiLogin, CiLogout } from 'react-icons/ci';
import { FaAddressBook } from 'react-icons/fa6';

function Header() {
  const [scroll, setScroll] = useState(false); 

  const changeBackground = () => {
    if(window.scrollY >= 314){
      setScroll(true);
    }
    else{
      setScroll(false);
    }
  }

  window.addEventListener('scroll', changeBackground);

  return (
    <div className = 'headerContainer'>
      <div className = {scroll ? 'navBar active' : 'navBar'}>
        <LogoDiv></LogoDiv>
        <Link to='/signup'><div className = 'navBarItem'><FaUserPlus className = 'ic'/><span>Sign Up</span></div></Link>
        <Link to='/login'><div className = 'navBarItem'><CiLogin className = 'ic'/><span>Login</span></div></Link>
        <Link to='/contact'><div className = 'navBarItem'><FaAddressBook className ='ic'/><span>Contact</span></div></Link>
        <Link to='/'><div className = 'navBarItem'><CiLogout className = 'ic'/><span>Log Out</span></div></Link>
      </div>
      <h1 className = "headerText">Find your ideal partner</h1>
      <SearchRow></SearchRow>
    </div>
  );
}

export default Header;
