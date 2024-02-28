import { render, screen } from '@testing-library/react'
import BrowseIdPage from './page'

describe('BrowseIdPage view', () => {
    it('should render the word BrowseId', () => {
        render(<BrowseIdPage />)

        const heading: HTMLElement = screen.getByText('BrowseId')

        expect(heading).toBeInTheDocument()
    })
})
