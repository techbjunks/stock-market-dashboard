import { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const initialData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [400, 550, 600, 700, 800, 900, 1000],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [300, 450, 500, 600, 700, 800, 900],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const LineChart = () => {
  const [data, setData] = useState(initialData);

  const generateRandomData = () => {
    const newData = {
      ...data,
      datasets: data.datasets.map((dataset) => ({
        ...dataset,
        data: data.labels.map(() => Math.floor(Math.random() * 1000)),
      })),
    };
    setData(newData);
  };

  useState(() => {
    generateRandomData();
  }, []);

  return (
    <div>
      <button onClick={generateRandomData}>Generate Random Data</button>
      <Line options={options} data={data} />
    </div>
  );
};

export default LineChart;
