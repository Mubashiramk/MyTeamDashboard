import "./sidebar.css";
import { CalendarIcon } from "../../Icon/calendar";
import { DashboardIcon } from "../../Icon/dashboard";
import { TeamIcon } from "../../Icon/team";
import { SettingsIcon } from "../../Icon/settings";
import { ReportIcon } from "../../Icon/report";
import { TaskIcon } from "../../Icon/task";
import { SidebarOption } from "./SidebarOption";
import { LogOut } from "../LogOut";

export const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <div className="sidebar_head">
        <span>TEAM 1</span>
      </div>
      <div className="sidebar_list">
        <SidebarOption Icon={DashboardIcon} title="Dashboard" route="/" />
        <SidebarOption Icon={TeamIcon} title="My Team" route="/myteam" />
        <SidebarOption Icon={TaskIcon} title="Task" route="/task" />
        <SidebarOption Icon={CalendarIcon} title="Calendar" route="/calendar" />
        <SidebarOption Icon={ReportIcon} title="Report" route="/report" />
        <SidebarOption Icon={SettingsIcon} title="Settings" route="/settings" />
      </div>
      <div>
        <div className="sidebar_logout">
          <LogOut
            item={props.item}
            logoutHandler={props.onClickLogout}
            error={props.error}
          />
        </div>
      </div>
    </div>
  );
};
