import { Line } from "react-chartjs-2";

export const TeamActivities = () => {
  return (
    <div>
      <Line
        height={261}
        data={{
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [
            {
              label: "NewConfirmed/Date",
              data: [120, 90, 130, 110, 70, 105],
              fill: true,
              backgroundColor: "rgba(57, 84, 255, 0.18)",
              borderColor: "#3954FF",
            },
          ],
        }}
        options={{
          elements: {
            line: {
              tension: 0.5, // disables bezier curves
            },
          },
          maintainAspectRatio: false,
          scales: {
            "x-axis": {
              display: true,
              grid: {
                display: false,
              },
            },
            "y-axis": {
              type: "linear",
              position: "left",
              ticks: {
                display: false,
                beginAtZero: true,
                stepSize: 25,
              },
              grid: {
                display: true,
              },
            },
          },
        }}
      />
    </div>
  );
};
