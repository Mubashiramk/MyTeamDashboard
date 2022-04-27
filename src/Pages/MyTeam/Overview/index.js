import "./overview.css";
import { OverviewTop } from "./OverviewTop";
import { OverviewBody } from "./OverviewBody";

export const Overview = () => {
  return (
    <div className="overview">
      <div>
        <OverviewTop />
      </div>
      <div>
        <OverviewBody />
      </div>
    </div>
  );
};
