import { render, screen } from '@testing-library/react'
import BookDetailsPage from './page'

describe('BookDetailsPage', () => {
    it('should render the word BookDetails', () => {
        render(<BookDetailsPage />)

        const heading: HTMLElement = screen.getByText('BookDetails')

        expect(heading).toBeInTheDocument()
    })
})
