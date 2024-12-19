"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HistoricalStatusItem } from "./historical-status-item"
import { useStatusStore } from "@/stores/statusStore"

export function HistoricalStatus() {
  const history = useStatusStore((state) => state.history)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Historical Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {history.map((item) => (
            <HistoricalStatusItem key={item.date} item={item} />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

