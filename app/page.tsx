import { CurrentStatus } from "@/components/current-status"
import { HistoricalStatus } from "@/components/historical-status"

export default function StatusPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center">System Status</h1>
        <CurrentStatus />
        <HistoricalStatus />
      </div>
    </div>
  )
}

