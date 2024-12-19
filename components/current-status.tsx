import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SystemStatus, getOverallStatus, getStatusColor } from "@/utils/statusData"

export function CurrentStatus({ systems }: { systems: SystemStatus[] }) {
  const overallStatus = getOverallStatus(systems);
  const statusColor = getStatusColor(overallStatus);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Current Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2 mb-4">
          <div className={`w-3 h-3 rounded-full ${statusColor}`} />
          <span className="font-semibold capitalize">{overallStatus.replace("'-'", "'")}</span>
        </div>
        <div className="grid gap-2">
          {systems.map((system) => (
            <div key={system.name} className="flex items-center justify-between">
              <span>{system.name}</span>
              <div className={`w-2 h-2 rounded-full ${getStatusColor(system.status)}`} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

