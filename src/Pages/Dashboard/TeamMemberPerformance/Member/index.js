import "./member.css";

export const Member = (props) => {
  return (
    <div className="member">
      <div className="member__photo">
        <img src={props.data.img} />
      </div>
      <div className="member__details">
        <div className="member__name">{props.data.name}</div>
        <div className="member__designation">{props.data.designation}</div>
      </div>
      <div className="member__rating">{props.data.rating}</div>
    </div>
  );
};
