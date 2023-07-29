import { useState, useEffect } from "react";
import Chart from '../../../../../common/components/Chart/Line'

const initialData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
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
      text: "Chart",
    },
  },
};

interface ChartData {
  [key: string]: {
    open: string;
    high: string;
    low: string;
    close: string;
    volume: string;
  };
}

const LineChart = ({ chartData }: ChartData) => {
  const [data, setData] = useState(initialData);

  const updateChartData = () => {
    if (!chartData || !chartData["Time Series (Daily)"]) {
      return;
    }

    const entries: [string, ChartData[keyof ChartData]][] = Object.entries<ChartData>(
      chartData["Time Series (Daily)"]
    ).slice(0, 10);
    
    const updatedData = {
      labels: [] as string[],
      data: [] as number[],
    };
    
    entries.forEach(([key, dataObj]) => {
      updatedData.labels.unshift(key);
      updatedData.data.unshift(+dataObj['1. open']);
    });

    const newData = {
      ...data,
      datasets: [
        {
          ...data.datasets[0],
          data: updatedData.data
        },
      ],
      labels: updatedData.labels,
    };
    setData(newData);
  };

  useEffect(() => {
    updateChartData();
  }, []);

  return (
    <>
      <Chart options={options} data={data} />
    </>
  );
};

export default LineChart;
