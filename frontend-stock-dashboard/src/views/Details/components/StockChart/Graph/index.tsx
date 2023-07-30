import { useState, useEffect } from "react";

import { initialData, options } from "./constant";
import { LineChartProps, LineChartData } from "./types";
import Chart from "../../../../../common/components/Chart/Line";

const MINIMUM_CHART_DAYS = 3;

const LineChart = ({
  chartData,
  column = 7,
  labelPosition = "top",
}: LineChartProps) => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const updateChart = () => {
      if (!chartData || !chartData["Time Series (Daily)"]) {
        return;
      }
  
      const entries: [string, LineChartData[keyof LineChartData]][] =
        Object.entries<LineChartData>(chartData["Time Series (Daily)"]).slice(
          0,
          column > MINIMUM_CHART_DAYS ? column : MINIMUM_CHART_DAYS
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
    updateChart();
    options.plugins.legend.position = labelPosition;
    options.plugins.title.text = `Last ${
      column > MINIMUM_CHART_DAYS ? column : MINIMUM_CHART_DAYS
    } days`;
  }, [chartData, column, labelPosition]);

  return (
    <>
      <Chart options={options} data={data} />
    </>
  );
};

export default LineChart;
