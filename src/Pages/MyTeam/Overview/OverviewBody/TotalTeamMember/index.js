import "./totalTeamMember.css";
import { Pie } from "react-chartjs-2";

export const TotalTeamMember = () => {
  return (
    <div className="totalteammembers">
      <div>
        <p>Total Team Member</p>
      </div>
      <div className="chartdiv">
        <h1>25</h1>
        <div className="chartdiv__chart">
          <Pie
            data={{
              labels: ["Female", "Male"],
              datasets: [
                {
                  backgroundColor: ["#3954FF", "#FFD339"],
                  data: [65, 35],
                },
              ],
            }}
            width={30}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};
