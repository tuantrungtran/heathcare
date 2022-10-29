import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
} from "chart.js";
import { Line } from "react-chartjs-2";
import { getRandomNumber } from "../../utils/functions";

import "./styles.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

export const options = {
  responsive: true,
  scales: {
    x: {
      display: true,
      gridLines: {
        display: false
      }
    },
    y: {
      display: false
    }
  }
};

const labels = [
  "6月",
  "7月",
  "8月",
  "9月",
  "10月",
  "11月",
  "12月",
  "1月",
  "2月",
  "3月",
  "4月",
  "5月"
];

export const data = {
  labels,
  datasets: [
    {
      label: "",
      data: labels.map(() => getRandomNumber(1, 100)),
      borderColor: "#FFCC21"
    },
    {
      label: "",
      data: labels.map(() => getRandomNumber(1, 100)),
      borderColor: "#8FE9D0"
    }
  ]
};

const BodyWeight = () => {
  return (
    <div className="body-weight-container">
      <Line
        options={{ ...options, maintainAspectRatio: false }}
        data={data}
        width={"100%"}
      />
    </div>
  );
};

export default BodyWeight;
