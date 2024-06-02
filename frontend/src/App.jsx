import { useState, useEffect } from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Matching from './pages/Matching.jsx'
import Login from './pages/Login.jsx';
import Account from './pages/Account.jsx';
import axios from 'axios';

function App() {
  const [acc, setAcc] = useState({});

  const getUser = async () => {
    try{
      const response = await axios.get("http://localhost:5555/login/success", {withCredentials : true});
      console.log('res', response);
      setAcc(response.data.usr);
    }
    catch(error){
      console.log(error);
    }
  }

  const logout = () => {
    window.open("http://localhost:5555/logout", "_self");
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Routes>
      <Route path = '/' element = /*{ Object.keys(acc) === 0 ? <Home ax = {acc}/> : <Matching/>}*/ <Home ax = {acc} lx = {logout}/>/>
      <Route path = '/match' element = {<Matching ax = {acc} lx = {logout}/>}/>
      <Route path = 'login' element = {<Login ax = {acc}/>}/>
      <Route path = '/account' element = {<Account ax = {acc} lx = {logout}/>}/>
    </Routes>
  );
}

export default App;
