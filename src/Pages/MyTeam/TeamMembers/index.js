import { data } from "../../../Assets/data";
import { CardFirm } from "../../../components/CardFirm";
import "./teamMembers.css";

export const TeamMembers = () => {
  return (
    <div className="teammembers">
      <div className="teammembers__heading">
        <h4>Team Members</h4>
      </div>
      <div className="teammembers__content">
        {data.map((post) => {
          return <CardFirm data={post} />;
        })}
      </div>
    </div>
  );
};
