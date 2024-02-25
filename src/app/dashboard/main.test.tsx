import { render, screen } from '@testing-library/react'
import DashboardPage from './page'

describe('DashboardPage', () => {
    it('should render the word Dashboard', () => {
        render(<DashboardPage />)

        const heading: HTMLElement = screen.getByText('Dashboard')

        expect(heading).toBeInTheDocument()
    })
})
