import "./cardFirm.css";

export const CardFirm = (props) => {
  return (
    <div className="cardfirm">
      <div className="cardfirm__header"></div>
      <div className="cardfirm__image">
        <img src={props.data.img} />
      </div>
      <div className="cardfirm__details">
        <div className="cardfirm__name">{props.data.name}</div>
        <div className="cardfirm__email">{props.data.email}</div>
      </div>
      <div className="cardfirm__designation">{props.data.designation}</div>
    </div>
  );
};
