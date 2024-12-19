export type Status = "operational" | "partial-outage" | "major-outage";

export type SystemStatus = {
  name: string;
  status: Status;
};

export type HistoricalStatus = {
  date: string;
  status: Status;
};

export const currentStatus: SystemStatus[] = [
  { name: "API", status: "operational" },
  { name: "Web App", status: "operational" },
  { name: "Database", status: "operational" },
  { name: "CDN", status: "operational" },
];

export const historicalData: HistoricalStatus[] = [
  { date: "2023-06-01", status: "operational" },
  { date: "2023-05-30", status: "partial-outage" },
  { date: "2023-05-29", status: "operational" },
  { date: "2023-05-28", status: "major-outage" },
  { date: "2023-05-27", status: "operational" },
  { date: "2023-05-26", status: "operational" },
  { date: "2023-05-25", status: "partial-outage" },
];

export function getOverallStatus(statuses: SystemStatus[]): Status {
  if (statuses.every(s => s.status === "operational")) return "operational";
  if (statuses.some(s => s.status === "major-outage")) return "major-outage";
  return "partial-outage";
}

export function getStatusColor(status: Status): string {
  switch (status) {
    case "operational":
      return "bg-green-500";
    case "partial-outage":
      return "bg-yellow-500";
    case "major-outage":
      return "bg-red-500";
    default:
      return "bg-gray-500";
  }
}

