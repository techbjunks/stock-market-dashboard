export interface LineChartData {
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
}

export interface LineChartProps {
  chartData: { [key: string]: LineChartData };
  labelPosition?: string | undefined;
  column?: number | undefined;
}
