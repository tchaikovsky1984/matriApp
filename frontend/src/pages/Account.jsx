import React from 'react';

function Account(props){ 

  return (
    <div><h1>Account Page</h1>
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
    </form></div>
  );
}

export default Account;
