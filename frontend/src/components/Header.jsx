import React, { useState , useEffect } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import LogoDiv from './LogoDiv.jsx';
import SearchRow from './SearchRow.jsx';
import { FaUserPlus } from 'react-icons/fa';
import { CiLogin, CiLogout } from 'react-icons/ci';
import { FaAddressBook } from 'react-icons/fa6';
import { MdManageAccounts } from "react-icons/md";

function Header(props) {
  const [scroll, setScroll] = useState(false); 
  const [a, setA] = useState(true);

  useEffect(() => {
    setA(!a);
    console.log('acc', props.ax, a);
  }, [props.ax]);

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
        { a &&
          <Link to='/logout'><div className = 'navBarItem'><CiLogout className = 'ic'/><span>Logout</span></div></Link>
        }
        { !a &&
          <Link to='/login'><div className = 'navBarItem'><CiLogin className = 'ic'/><span>Login</span></div></Link>
        }
        <Link to='/contact'><div className = 'navBarItem'><FaAddressBook className ='ic'/><span>Contact</span></div></Link>
        { !a &&
          <Link to='/account'><div className = 'navBarItem'><MdManageAccounts className = 'ic' /><span>Account</span></div></Link>
        }
      </div>
      <h1 className = "headerText">Find your ideal partner</h1>
      <SearchRow></SearchRow>
    </div>
  );
}

export default Header;
