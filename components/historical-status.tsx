import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { type HistoricalStatus } from "@/utils/statusData"
import { HistoricalStatusItem } from "./historical-status-item"

export function HistoricalStatus({ data }: { data: HistoricalStatus[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Historical Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {data.map((item) => (
            <HistoricalStatusItem key={item.date} item={item} />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

