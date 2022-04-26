import { useRef, useState } from "react";
import { useAuth } from "../../context/UserAuthContext";
import "./signUp.css";
import { Link } from "react-router-dom";

const Signp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("password does not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      setSuccess("You have successfully signed in");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  return (
    <div className="signup-div">
      <div className="header">
        <h1>Sign Up</h1>
      </div>
      <div className="form-div">
        <form onSubmit={handleSubmit}>
          <div>
            {/* {JSON.stringify(currentUser)} */}
            {error && <div className="error">{error}</div>}
          </div>
          <div>
            {/* {JSON.stringify(currentUser)} */}
            {success && <div className="success">{success}</div>}
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
          <div className="input-div">
            <label>Confirm Password</label>
            <br />
            <input
              type="password"
              placeholder=""
              ref={passwordConfirmRef}
              required
            ></input>
          </div>
          <div>
            <button disabled={loading}>Sign Up</button>
          </div>
        </form>
      </div>
      <div className="bottom-div">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </div>
  );
};

export default Signp;
