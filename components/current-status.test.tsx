import { render } from '@testing-library/react'
import { CurrentStatus } from './current-status'
import { expect, test, vi } from 'vitest'
import { page } from '@vitest/browser/context'

test('renders all system statuses', async () => {
  vi.mock('@/stores/statusStore', () => ({
    useStatusStore: vi.fn((selector) => selector({ systems: [
      { name: "API", status: "operational" },
      { name: "Web App", status: "operational" },
      { name: "Database", status: "operational" }
    ]}))
  }))

  const { baseElement } = render(<CurrentStatus />)
  const screen = page.elementLocator(baseElement)
  
  await expect.element(screen.getByText('API')).toBeInTheDocument()
  await expect.element(screen.getByText('Web App')).toBeInTheDocument()
  await expect.element(screen.getByText('Database')).toBeInTheDocument()
})
