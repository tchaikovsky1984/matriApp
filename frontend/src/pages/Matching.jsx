import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner.jsx';

function Matching(){
  const [users, setUsers] = useState([]) ;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/users')
      .then((response) => {
        setUsers(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (<Spinner/>) : (
        <div><h1>Matching Page</h1>
        {users.map((user) => (
          <div>
            <h1>{user.name}</h1>
            <h3>{user.age}</h3>
          </div>
        ))}</div>
      )}
    </div>
  );
}

export default Matching;
