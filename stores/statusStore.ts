import { create } from 'zustand'
import type { SystemStatus, HistoricalStatus, Status } from '@/utils/statusData'

interface StatusStore {
  systems: SystemStatus[]
  history: HistoricalStatus[]
  updateSystemStatus: (name: string, status: Status) => void
  addHistoricalEntry: (entry: HistoricalStatus) => void
}

export const useStatusStore = create<StatusStore>((set) => ({
  systems: [
    { name: "API", status: "operational" },
    { name: "Web App", status: "operational" },
    { name: "Database", status: "operational" },
    { name: "CDN", status: "operational" },
  ],
  history: [
    { date: "2023-06-01", status: "operational" },
    { date: "2023-05-30", status: "partial-outage" },
    { date: "2023-05-29", status: "operational" },
    { date: "2023-05-28", status: "major-outage" },
    { date: "2023-05-27", status: "operational" },
  ],
  updateSystemStatus: (name, status) =>
    set((state) => ({
      systems: state.systems.map((sys) =>
        sys.name === name ? { ...sys, status } : sys
      ),
    })),
  addHistoricalEntry: (entry) =>
    set((state) => ({
      history: [entry, ...state.history].slice(0, 7), // Keep last 7 days
    })),
})) 