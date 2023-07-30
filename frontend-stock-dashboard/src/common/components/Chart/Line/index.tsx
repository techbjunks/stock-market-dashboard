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
import { useEffect } from "react";
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
  options: unknown;
  data: unknown;
}

const LineChart = ({ options, data }: LineChartProps): JSX.Element => {
  useEffect(() => {
    return () => {
      ChartJS.unregister();
    };
  }, []);
  return (
    <>
      <Line options={options} data={data} />
    </>
  );
};

export default LineChart;
