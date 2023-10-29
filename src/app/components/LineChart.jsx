"use client";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
  Legend,
  Tooltip,
  Filler,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Filler
);

const salesData = [
  { day: 1, sales: 7 },
  { day: 2, sales: 6 },
  { day: 3, sales: 5.5 },
  { day: 4, sales: 4.5 },
  { day: 5, sales: 5 },
  { day: 6, sales: 6 },
  { day: 7, sales: 7.5 },
  { day: 8, sales: 5.7 },
  { day: 9, sales: 3 },
  { day: 10, sales: 10 },
  { day: 11, sales: 20 },
  { day: 12, sales: 12 },
  { day: 13, sales: 4 },
  { day: 14, sales: 3 },
  { day: 15, sales: 9 },
  { day: 16, sales: 0 },
  { day: 17, sales: 30 },
  { day: 18, sales: 35 },
  { day: 19, sales: 10 },
  { day: 20, sales: 20 },
  { day: 21, sales: 12 },
  { day: 22, sales: 4 },
  { day: 23, sales: 3 },
  { day: 24, sales: 9 },
  { day: 25, sales: 0 },
  { day: 26, sales: 30 },
  { day: 27, sales: 35 },
  { day: 28, sales: 10 },
  { day: 29, sales: 20 },
  { day: 30, sales: 12 },
];

function LineChart() {
  const data = {
    labels: salesData.map((data) => data.day),
    datasets: [
      {
        label: "Revenue",
        data: salesData.map((data) => data.sales),
        borderColor: "#B8F82F",
        borderWidth: 3,
        tension: 0.5,
        fill: false,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    plugins: {},
    responsive: true,
  };

  return (
    <div
      style={{
        width: "800px",
        cursor: "pointer",
      }}
    >
      <div className="m-auto ml-8 relative">
        <Line data={data} options={options}></Line>
        <div className="w-32 h-5 bg-white z-10 absolute left-[40%] top-1"></div>
      </div>
    </div>
  );
}

export default LineChart;
