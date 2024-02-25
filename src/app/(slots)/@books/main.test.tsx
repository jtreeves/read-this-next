import { render, screen } from '@testing-library/react'
import BooksPage from './page'

describe('BooksPage', () => {
    it('should render the word Books', () => {
        render(<BooksPage />)

        const heading: HTMLElement = screen.getByText('Books')

        expect(heading).toBeInTheDocument()
    })
})
