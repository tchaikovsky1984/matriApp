import React from 'react';

function Login(props){

  if(Object.keys(props.ax).length > 0 ){
    return (
      <div className = 'logSquare'>
        <h1>Please logout to login as another user.</h1>
      </div>
      );
  }

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
