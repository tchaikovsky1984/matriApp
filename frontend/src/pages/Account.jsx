import React from 'react';
import './Account.css';
import { useState, useEffect} from 'react';

function Account(props){ 

  const subUser = () => {
    console.log(`info`);
  }

  return (
    <div className = 'appCont'>
      <div className = 'accBox'>
      <img src = {props.ax.image}/>
      <h2>{props.ax.displayName}</h2>
      <h3>{props.ax.email}</h3>
    <form className = 'f'>
      <label >Gender : </label>
      <select className = 's'>
        <option value = "true">Man</option>
        <option value = "false">Woman</option>
      </select>
      <label>Min Age : </label>
      <input className = 'i'></input>
      <label>Max Age : </label>
      <input className = 'i'></input>
      <label>Religion : </label>
      <input className = 'i'></input>
    </form>
    <button onClick = {subUser}>Submit</button>
      </div>
    </div>
  );
}

export default Account;
