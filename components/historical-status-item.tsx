import type { HistoricalStatus } from "../utils/statusData";
import { getStatusColor } from "../utils/statusData";

interface HistoricalStatusItemProps {
  item: HistoricalStatus;
}

export function HistoricalStatusItem({ item }: HistoricalStatusItemProps) {
  return (
    <div className="flex items-center justify-between">
      <span>{item.date}</span>
      <div className="flex items-center space-x-2">
        <span className="capitalize">{item.status.replace("-", " ")}</span>
        <div className={`w-2 h-2 rounded-full ${getStatusColor(item.status)}`} />
      </div>
    </div>
  );
} 