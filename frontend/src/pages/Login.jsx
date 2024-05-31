import React from 'react';

function Login(props){
  const loginGoogle = () => {
    window.open("http://localhost:5555/auth/google/callback","_self");
  }
  return (
    <div>
      <h1>Login Page</h1>
      <div className = 'logSquare'>
        <h3>Click to Login through Google</h3>
        <h5>Unfortunately, Login is only available through Google right now.</h5>
        <button className = 'google-login' onClick = {loginGoogle}>Login</button>
      </div>
    </div>
  );
}

export default Login;
