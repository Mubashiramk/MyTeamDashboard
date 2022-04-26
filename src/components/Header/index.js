import "./header.css";
// import { useState } from "react";
import { Bell } from "../../Icon/bell";
import { Search } from "../../Icon/search";
import { Avatar } from "../../Icon/avatar";
import { useLocation } from "react-router";
import { Dashboard } from "../../Pages/Dashboard";
// import { LogOut } from "../LogOut";

export const Header = (props) => {
  // const [show, setShow] = useState(false);
  let title;
  const location = useLocation();
  if (location.pathname === "/") {
    title = "Dashboard";
  } else if (location.pathname === "/myteam") {
    title = "My Team";
  }
  if (location.pathname === "/task") {
    title = "Task";
  }
  if (location.pathname === "/calendar") {
    title = "Calendar";
  }
  if (location.pathname === "/report") {
    title = "Report";
  }
  if (location.pathname === "/settings") {
    title = "Settings";
  }

  // let title = location.pathname === "/" ? "Dashboard" : "";

  return (
    <div className="head">
      <div className="content">
        <div className="left_div">{title}</div>
        <div className="right_div">
          <div>
            <Bell />
          </div>
          <div>
            <Search />
          </div>
          <div className="avatar">
            <Avatar />
          </div>
        </div>
      </div>
      {/* {show && (
        <div className="logout_div">
          <LogOut
            item={props.item}
            logoutHandler={props.onClickLogout}
            error={props.error}
            onClick={() => setShow((prev) => !prev)}
          />
        </div>
      )} */}
    </div>
  );
};
