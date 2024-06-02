import React from 'react';
import './Account.css';
import '../../../backend/routes/userRoute.js';
import { User } from '../../../backend/models/userModel.js';
import { useState, useEffect} from 'react';

function Account(props){ 

  return (
    <div className = 'appCont'>
      <div className = 'accBox'>
      <img src = {props.ax.image}/>
      <h2>{props.ax.displayName}</h2>
      <h3>{props.ax.email}</h3>
    <form>
      <label>Gender : </label>
      <select>
        <option value = "true">Man</option>
        <option value = "false">Woman</option>
      </select>
      <label>Min Age : </label>
      <input></input>
      <label>Max Age : </label>
      <input></input>
      <label>Religion : </label>
      <input></input>
    </form>
    <button onClick = {subUser}>Submit</button>
      </div>
    </div>
  );
}

export default Account;
