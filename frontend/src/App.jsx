import { useState } from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Matching from './pages/Matching.jsx'
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';

function App() {
  const [acc, setAcc] = useState(false);
  return (
    <Routes>
      <Route path = '/' element = { acc ? <Matching/> : <Home/>}/>
      <Route path = '/match' element = {<Matching/>}/>
      <Route path = '/login' element = {<Login/>}/>
      <Route path = '/signup' element = {<Signup/>}/>
    </Routes>
  );
}

export default App;
