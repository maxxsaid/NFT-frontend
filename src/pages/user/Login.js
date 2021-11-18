function Login() {
  return (
    <div className="loginPage">
      <div>
        <form action="/user/login" method="post">
          <fieldset>
            <legend>
              <h2>Login</h2>
            </legend>
            <label for="inputUsername5" className="form-label">
              <h4>Username</h4>
              <input
                type="text"
                name="username"
                required
                id="inputUsername5"
                className="form-control"
                aria-describedby="usernameHelpBlock"
              />
            </label>
            <label for="inputPassword5" className="form-label">
              <h4>Password</h4>
              <input
                type="password"
                name="password"
                required
                id="inputPassword5"
                className="form-control"
                aria-describedby="passwordHelpBlock"
              />
            </label>
            <input type="submit" className="btn btn-success" value="Login" />
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default Login;
