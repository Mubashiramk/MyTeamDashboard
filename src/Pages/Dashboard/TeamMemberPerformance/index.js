import "./teamMemberPerformance.css";
import { data } from "../../../Assets/data";
import { Member } from "./Member";

export const TeamMemberPerformance = () => {
  let sorteddata = data
    .sort(function (a, b) {
      return a.rating < b.rating ? 1 : -1;
    })
    .slice(0, 4);
  return (
    <div className="member__performance">
      {sorteddata.map((post) => {
        return <Member data={post} />;
      })}
    </div>
  );
};
