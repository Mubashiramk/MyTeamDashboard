import "./overviewBody.css";
import { SettingsIcon } from "../../../../Icon/settings";
import { ProjectActivity } from "./ProjectActivity";
import { TotalTeamMember } from "./TotalTeamMember";
import { Ceo } from "./Ceo";

export const OverviewBody = () => {
  return (
    <div className="overviewbody">
      <div className="overviewbody__header">
        <h4>Project Ativity</h4>
        <SettingsIcon />
      </div>
      <ProjectActivity />
      <Ceo />
      <TotalTeamMember />
    </div>
  );
};
