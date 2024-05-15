import React from 'react';
import { useState } from 'react';
import './SearchRow.css';

function SearchRow(){

  const updatePref = () => {
    console.log(isMale);
    console.log(minAge);
    console.log(maxAge);
    console.log(rel);
  }

  const [isMale, setIsMale] = useState(false);
  const [minAge, setMinAge] = useState(0);
  const [maxAge, setMaxAge] = useState(0);
  const [rel, setRel] = useState("");

return (
  <div className = "searchContainer">
    <form>
      <div className = "inDiv">
        <label className = "FormText">Gender : </label>
        <select>
          <option value = "true">Man</option>
          <option value = "false">Woman</option>
        </select>
      </div>
      <div className = "inDiv">
        <label className = "FormText">Min Age : </label>
        <input onChange = {e => setMinAge(e.target.value)}></input> 
      </div>
      <div className = "inDiv">
        <label className = "FormText">Max Age : </label>
        <input onChange = {e => setMaxAge(e.target.value)}></input> 
      </div>
      <div className = "inDiv">
        <label className = "FormText">Religion : </label>
        <input onChange = {e => setRel(e.target.value)}></input> 
      </div>
    </form>
    <button onClick = {updatePref}>Find!</button>
  </div>
);
}

export default SearchRow;
