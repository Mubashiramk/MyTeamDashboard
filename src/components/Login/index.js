import { useRef, useState } from "react";
import { useAuth } from "../../context/UserAuthContext";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch {
      setError("Failed to Sign In");
    }
    setLoading(false);
  }

  return (
    <div className="signup-div">
      <div className="header">
        <h1>Log In</h1>
      </div>
      <div className="form-div">
        <form onSubmit={handleSubmit}>
          <div>
            {/* {JSON.stringify(currentUser)} */}
            {error && <div className="error">{error}</div>}
          </div>

          <div className="input-div">
            <label>Email</label>
            <br />
            <input type="email" placeholder="" ref={emailRef} required></input>
          </div>
          <div className="input-div">
            <label>Password</label>
            <br />
            <input
              type="password"
              placeholder=""
              ref={passwordRef}
              required
            ></input>
          </div>

          <div>
            <button disabled={loading}>Log In</button>
          </div>
        </form>
      </div>
      <div className="bottom-div">
        Need an account ? <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;
