import "./projectActivity.css";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const ProjectActivity = () => {
  return (
    <div className="projectactivity">
      <div className="projectactivity__bardiv">
        <div className="projectactivity__bar">
          <CircularProgressbar
            value={75}
            text={"75%"}
            width={20}
            strokeWidth={6}
            styles={buildStyles({
              textColor: "rgba(57, 84, 255, 1)",
              pathColor: "rgba(57, 84, 255, 1)",
            })}
            Clockwise
          />
        </div>
      </div>
    </div>
  );
};
