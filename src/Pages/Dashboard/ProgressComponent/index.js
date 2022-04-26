import "./progress.css";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const progressComponent = (props) => {
  let color = "";
  if (props.data.percentage <= 25) color = "#FF6D39";
  else if (props.data.percentage <= 50) color = "#FFD339";
  else if (props.data.percentage < 75) color = "#9539FF";
  else color = "#3954FF";
  return (
    <div className="progressCard">
      <div className="progressCard__bar">
        <CircularProgressbar
          value={props.data.percentage}
          text={`${props.data.percentage}%`}
          strokeWidth={6}
          styles={buildStyles({
            textColor: color,
            pathColor: color,
          })}
          counterClockwise
        />
      </div>

      <div className="progressCard__label">
        <h4>{props.data.quantity}</h4>
        <p>{props.data.description}</p>
      </div>
    </div>
  );
};
