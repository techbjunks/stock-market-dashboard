import { useState, useEffect } from "react";

import { initialData, options } from "./constant";
import { LineChartProps, LineChartData } from "./types";
import Chart from "../../../../../common/components/Chart/Line";

const LineChart = ({ chartData, labelPosition = "top", column = 10 }: LineChartProps) => {
  const [data, setData] = useState(initialData);

  const updateChart = () => {
    if (!chartData || !chartData["Time Series (Daily)"]) {
      return;
    }

    const entries: [string, LineChartData[keyof LineChartData]][] =
      Object.entries<LineChartData>(chartData["Time Series (Daily)"]).slice(
        0,
        column
      );

    const updatedData = {
      labels: [] as string[],
      data: [] as number[],
    };

    entries.forEach(([key, dataObj]) => {
      updatedData.labels.unshift(key);
      updatedData.data.unshift(+dataObj["1. open"]);
    });

    const newData = {
      ...data,
      datasets: [
        {
          ...data.datasets[0],
          data: updatedData.data,
        },
      ],
      labels: updatedData.labels,
    };
    setData(newData);
  };

  useEffect(() => {
    updateChart();
    options.plugins.legend.position = labelPosition;
  }, [chartData]);

  return (
    <>
      <Chart options={options} data={data} />
    </>
  );
};

export default LineChart;
