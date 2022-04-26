import { Card } from "../../components/Card";
import { TaskActivities } from "./TaskActivities";
import { progressComponent } from "./ProgressComponent";
import "./dashboard.css";

export const Dashboard = () => {
  let width = "200px";
  let height = "100px";

  return (
    <div className="dashboard">
      <div className="dashboard__top">
        <div className="dashboard__progress">
          <Card
            title="Works"
            style={width}
            cardData={{
              percentage: 50,
              quantity: 75,
              description: "Works Today",
            }}
            cardContent={progressComponent}
          />
          <Card
            title="Analytics"
            style={width}
            cardData={{
              percentage: 25,
              quantity: 310,
              description: "Analytics Today",
            }}
            cardContent={progressComponent}
          />
          <Card
            title="Statistics"
            style={width}
            cardData={{
              percentage: 59,
              quantity: 75,
              description: "Statistics Today",
            }}
            cardContent={progressComponent}
          />
          <Card
            title="Tasks"
            style={width}
            cardData={{
              percentage: 75,
              quantity: 15,
              description: "Tasks Today",
            }}
            cardContent={progressComponent}
          />
        </div>
        <div className="dashboard__taskactivities">
          <Card
            title="Task Activities"
            cardData={{
              percentage: 66,
            }}
            cardContent={TaskActivities}
          />
        </div>
      </div>
      <div className="dashboard__bottom">
        <Card
          title="Team Activities"
          cardData={{
            percentage: 75,
            quantity: 15,
            description: "Tasks Today",
          }}
          cardContent={progressComponent}
        />
        <Card
          title="Team Member Performance"
          cardData={{
            percentage: 75,
            quantity: 15,
            description: "Tasks Today",
          }}
          cardContent={progressComponent}
        />
      </div>
    </div>
  );
};
