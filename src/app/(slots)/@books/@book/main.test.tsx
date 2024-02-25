import { render, screen } from '@testing-library/react'
import BookPage from './page'

describe('BookPage', () => {
    it('should render the word Book', () => {
        render(<BookPage />)

        const heading: HTMLElement = screen.getByText('Book')

        expect(heading).toBeInTheDocument()
    })
})
