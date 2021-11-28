import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="signupPage">
      <div>
        <form action="/signup" method="post">
          <fieldset>
            <legend>
              <h2>New User</h2>
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
            <div id="usernameHelpBlock" className="p1 form-text">
              Your username must be 1-20 characters long and lowercase.
            </div>
            <div class="pass">
              <label for="inputPassword5" class="form-label">
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
              <div id="passwordHelpBlock" className="p1 form-text">
                Your password must be 1-20 characters long, contain letters and
                numbers, and must not contain spaces, special characters, or
                emoji.
              </div>
            </div>
            <button
              type="submit"
              className="createacc btn btn-primary"
              value="Create Account"
            >
              Create Account
            </button>
            <div className="signLog">
              <div id="passwordHelpBlock" className="p1 form-text">
                Already have an account?
              </div>
              <Link to="/login">
                <button type="submit" className="btn btn-success">
                  Log In
                </button>
              </Link>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default Signup;
