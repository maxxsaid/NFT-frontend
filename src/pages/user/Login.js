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
    <div className="loginPage">
      <div className="mb-3">
        <label for="username" className="form-label">
          <h4>Username</h4>
        </label>
        <input
          className="form-control"
          type="text"
          name="username"
          ref={username}
        />
      </div>
      <div className="mb-3">
        <label for="password" className="form-label">
          <h4>Password</h4>
        </label>
        <input
          className="form-control"
          type="password"
          name="password"
          ref={password}
        />
        <div className="btnloginpage">
          <button className="btn btn-primary" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
