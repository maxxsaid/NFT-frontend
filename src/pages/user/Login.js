import React from "react";

const Login = (props) => {
  const username = React.useRef(null);
  const password = React.useRef(null);

  const handleLogin = (event) => {
    const un = username.current.value;
    const pw = password.current.value;

    props.getToken(un, pw);

    username.current.value = "";
    password.current.value = "";
  };

  return (
    <div>
      <label for="username" className="form-label">
        <h4>Username</h4>
      </label>
      <input type="text" name="username" ref={username} />
      <label for="password" className="form-label">
        <h4>Username</h4>
      </label>
      <input type="password" name="password" ref={password} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
