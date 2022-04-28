import "./cardElement.css";
import { Tick } from "../../Icon/tick";
import { Pin } from "../../Icon/pin";

export const CardElement = (props) => {
  return (
    <div className="cardelement">
      <img src={props.data.img} />
      <h3>{props.data.title}</h3>
      <p>{props.data.text}</p>
      <div className="cardelement__label">
        <div className="items">
          <Pin />
          <p>10</p>
        </div>
        <div className="items">
          <Tick />
          <p>3/5</p>
        </div>

        <div className="left">
          <p>2W left</p>
        </div>
      </div>
      <div className="line">
        <div className="subline"></div>
      </div>
    </div>
  );
};
