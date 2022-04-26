import "./logOut.css";
export const LogOut = (props) => {
  const logOut = () => {
    props.logoutHandler();
  };

  return (
    <div>
      {/* <div className="user_div"> {props.item}</div> */}

      <button className="logout_button" variant="link" onClick={logOut}>
        <div className="user_div"> {props.item}</div>
        Logout
      </button>
      {props.error && <div className="error">{props.error}</div>}
    </div>
  );
};
