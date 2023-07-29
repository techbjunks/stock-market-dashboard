import { useState, useEffect } from "react";
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

const rawData = {
  MetaData: {
    "1. Information": "Daily Prices (open, high, low, close) and Volumes",
    "2. Symbol": "AAPL",
    "3. Last Refreshed": "2023-07-26",
    "4. Output Size": "Compact",
    "5. Time Zone": "US/Eastern",
  },
  "Time Series (Daily)": {
    "2023-07-26": {
      open: "193.6700",
      high: "195.6400",
      low: "193.3200",
      close: "194.5000",
      volume: "47471868",
    },
    "2023-07-25": {
      open: "193.3300",
      high: "194.4400",
      low: "192.9150",
      close: "193.6200",
      volume: "37283201",
    },
  },
};

const initialData = {
  labels: ["Bhag ja", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Dataset 1",
      data: [400, 550, 600, 700, 800, 900, 1000],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const LineChart = ({ chartData }) => {
  const [data, setData] = useState(initialData);

  const updateChartData = () => {
    if (!chartData || !chartData["Time Series (Daily)"]) {
      return;
    }

    const getData = Object.values(chartData["Time Series (Daily)"]).map((data) => {
      return +data['1. open'];
    })

    const newData = {
      ...data,
      datasets: [
        {
          ...data.datasets[0],
          data: getData
        },
      ],
      labels: Object.keys(chartData["Time Series (Daily)"]),
    };
    setData(newData);
  };

  useEffect(() => {
    updateChartData();
  }, []);

  return (
    <>
      <Line options={options} data={data} />
    </>
  );
};

export default LineChart;
