import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner.jsx';
import { ImCross, ImCheckmark} from 'react-icons/im';
import './Matching.css';

function Matching(){
  const [users, setUsers] = useState([]) ;
  const [index, setIndex] = useState(0);
  const [acc, setAcc] = useState(false);
  const [accId, setAccId] = useState("");
  const [loading, setLoading] = useState(false);
  const [ended, setEnded] = useState(false);

  function goForward(){
    setIndex(index+1);
    console.log(`Updated to ${index}`);
    if(index == users.length)
      setEnded(true);
  }

/*  let data = "";
  if(acc){
    useEffect(() => {
      setLoading(true);
      axios
        .get('http://localhost:5555/users/{accId}')
        .then((response) => {
          data = JSON.stringify(response.data.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log('Could not load user ${accId}');
          setLoading(false);
        })
    })
  }
  else{
    data = JSON.stringify({all : true});
    console.log(data);
  }

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'localhost:5555/users',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};*/
//implementation for user preference


  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/users')
      .then((response) => {
        //setUsers(JSON.stringify(response.data.data));
        setUsers(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      });
  }, []);

  const render = users.slice(index, index+1);
  console.log(index);
  console.log(render);

  return (
    <div>
      {loading ? (<Spinner/>) : (
        <div><h1>Matching Page</h1>
        {render.map((us) => (
          <div className = 'appContainer'>
              <button className = 'SwipeButton' onClick = {goForward}><ImCross/></button>
              <div className = 'matchDiv'>
              </div>
              <button className = 'SwipeButton' onClick = {goForward}><ImCheckmark/></button>
          </div>
        ))}
        <h1 className = {ended ? 'seen' : 'unseen'}></h1>
      </div>
      )}
    </div>
  );
}

export default Matching;
