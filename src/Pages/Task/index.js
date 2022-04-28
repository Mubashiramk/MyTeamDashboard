import "./task.css";
import { CardTask } from "../../components/CardTask";
import { newProjectdata } from "../../Assets/newProjectData";
import { workinProgressData } from "../../Assets/workinProgressData";
import { UnderReview } from "../../Assets/underReview";
import { Completed } from "../../Assets/completedData";

export const Task = () => {
  let color1 = "rgba(57, 84, 255, 1)";
  let color2 = "rgba(248, 198, 22, 1)";
  let color3 = "rgba(149, 57, 255, 1)";
  let color4 = "rgba(0, 222, 147, 1)";

  return (
    <div className="task">
      <div>
        <CardTask
          taskHeader="New Project"
          style={color1}
          data={newProjectdata}
        />
      </div>
      <div>
        <CardTask
          taskHeader="Work in Progress"
          style={color2}
          data={workinProgressData}
        />
      </div>
      <div>
        <CardTask taskHeader="Under Review" style={color3} data={UnderReview} />
      </div>
      <div>
        <CardTask taskHeader="Completed" style={color4} data={Completed} />
      </div>
    </div>
  );
};
