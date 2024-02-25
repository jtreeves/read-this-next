import { render, screen } from '@testing-library/react'
import BooksListPage from './page'

describe('BooksListPage', () => {
    it('should render the word BooksList', () => {
        render(<BooksListPage />)

        const heading: HTMLElement = screen.getByText('BooksList')

        expect(heading).toBeInTheDocument()
    })
})
