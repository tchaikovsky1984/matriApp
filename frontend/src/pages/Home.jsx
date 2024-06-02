import Header from '../components/Header.jsx';
import Lower from '../components/Lower.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Home(props) {

  return (
    <div>
      <Header ax = {props.ax} lx = {props.lx}></Header>
      <Lower></Lower>
    </div>
  );
}

export default Home;
