import { StockDetail } from "../../../../common/types/stock";

export interface StockTableProps {
  data: StockDetail;
  isLoading: boolean;
}

export interface InfoItemType {
  title: string;
  value: string;
  color: string;
}
