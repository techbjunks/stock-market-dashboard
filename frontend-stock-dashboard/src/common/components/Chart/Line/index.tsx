import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface LineChartProps {
    options: unknown,
    data: unknown,
}


const LineChart = ({ options, data }: LineChartProps):JSX.Element => {
  return (
    <>
      <Line options={options} data={data} />
    </>
  );
};

export default LineChart;
