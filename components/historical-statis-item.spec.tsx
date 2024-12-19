import { render, screen } from '@testing-library/react'
import { HistoricalStatusItem } from './historical-status-item'
import { expect, test } from 'vitest'

test('renders date and status correctly', () => {
  const mockItem = {
    date: '2023-05-30',
    status: 'partial-outage' as const
  }

  render(<HistoricalStatusItem item={mockItem} />)

  expect(screen.getByText('2023-05-30')).toBeInTheDocument()
  expect(screen.getByText('partial outage')).toBeInTheDocument()
})
