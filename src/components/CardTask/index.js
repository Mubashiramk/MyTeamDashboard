import "./cardTask.css";
import { CardElement } from "../CardElement";

export const CardTask = (props) => {
  let data = props.data;
  return (
    <div className="cardtask">
      <div className="cardtask__header">
        <p style={{ color: `${props.style}` }}>{props.taskHeader}</p>
        <span>...</span>
      </div>
      <div className="cardtask__element">
        {data.map((post) => {
          return <CardElement data={post} />;
        })}
      </div>
    </div>
  );
};
