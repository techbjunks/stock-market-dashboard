import { StockDetail } from "../../../../common/types/stock";

export interface StockTableProps {
  data: StockDetail;
}

export interface InfoItemType {
  title: string;
  value: string;
  color: string;
}
