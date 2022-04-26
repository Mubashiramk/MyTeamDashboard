import "./sidebarOption.css";
import { NavLink } from "react-router-dom";

export const SidebarOption = (props) => {
  return (
    <NavLink className="navlink" activeClassName="active" to={props.route}>
      <div className="item">
        <div className="icon">
          {props.Icon && <props.Icon className="icon" />}
        </div>
        <div className="title">
          <h3>{props.title}</h3>
        </div>
      </div>
    </NavLink>
  );
};
