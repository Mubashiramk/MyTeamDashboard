import "./card.css";

export const Card = (props) => {
  return (
    <div className="card" style={{ width: `${props.style}` }}>
      <div className="card__header">
        <h3 className="card__title">{props.title}</h3>
        <span className="card__option"></span>
      </div>
      <props.cardContent cardData={props.cardData} />
      <div className="card__component">{/* <Component /> */}</div>
    </div>
  );
};
