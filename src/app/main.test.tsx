import { render, screen } from '@testing-library/react'
import HomePage from './page'

describe('HomePage', () => {
    it('should render a heading', () => {
        render(<HomePage />)

        const heading = screen.getByRole('heading', { level: 1 })

        expect(heading).toBeInTheDocument()
    })
})
