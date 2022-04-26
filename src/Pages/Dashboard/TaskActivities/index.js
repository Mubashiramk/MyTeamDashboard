import "./taskActivities.css";
import { Bar } from "react-chartjs-2";

export const TaskActivities = () => {
  return (
    <div>
      <div>
        <Bar
          data={{
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [
              {
                label: "Recieved",
                data: [100, 110, 130, 110, 70, 105],
                backgroundColor: "#3954FF",
                barThickness: 6,
              },
              {
                label: "Completed",
                data: [50, 90, 105, 100, 40, 90],
                backgroundColor: "#FFD339",
                barThickness: 6,
              },
            ],
          }}
          height={271}
          width={400}
          options={{
            maintainAspectRatio: false,
            barPercentage: 0.5,
            categoryPercentage: 0.5,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
            legend: {
              labels: {},
            },
          }}
        />
      </div>
    </div>
  );
};
