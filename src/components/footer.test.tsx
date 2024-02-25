import { render, screen } from '@testing-library/react'
import { Footer } from './footer'

describe('Footer component', () => {
    it('should render the word Footer', () => {
        render(<Footer />)

        const content: HTMLElement = screen.getByText('Footer')

        expect(content).toBeInTheDocument()
    })
})
