import { render, screen } from '@testing-library/react'
import BrowsePage from './page'

describe('BrowsePage', () => {
    it('should render the word Browse', () => {
        render(<BrowsePage />)

        const heading: HTMLElement = screen.getByText('Browse')

        expect(heading).toBeInTheDocument()
    })
})
