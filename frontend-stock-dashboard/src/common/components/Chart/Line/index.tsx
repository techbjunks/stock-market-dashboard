import React from "react";
import { Line } from "react-chartjs-2";

interface Props {
  data: Record<string, any>;
}

const LineChart: React.FC<Props> = ({ data }) => {
  const chartData = {
    labels: Object.keys(data["Time Series (Daily)"]),
    datasets: [
      {
        label: "Stock Price",
        data: Object.values(data["Time Series (Daily)"]).map((item: any) =>
          parseFloat(item.close)
        ),
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: "time",
        time: {
          unit: "day",
          displayFormats: {
            day: "MMM DD",
          },
        },
        ticks: {
          maxTicksLimit: 5,
        },
      },
      y: {
        ticks: {
          callback: (value:unknown) => `$${value}`,
        },
      },
    },
  };

  return <Line data={chartData} options={chartOptions} />;
};

export default LineChart;
