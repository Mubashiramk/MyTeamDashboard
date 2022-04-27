import "./myTeam.css";
import { Overview } from "./Overview";
import { TeamMembers } from "./TeamMembers";

export const MyTeam = () => {
  return (
    <div className="myteam">
      <div className="myteam__overview">
        <Overview />
      </div>
      <div className="myteam__teammembers">
        <TeamMembers />
      </div>
    </div>
  );
};
