import "./overviewTop.css";
import { MyTeamLogo } from "../../../../Icon/nxt_uxui";

export const OverviewTop = () => {
  return (
    <div className="overviewtop">
      <MyTeamLogo />
      <div className="overviewtop__content">
        <h2>Nxt_UXUI</h2>
        <p>A designer team</p>
        <span>nxt.uxui@gmail.com</span>
      </div>
    </div>
  );
};
