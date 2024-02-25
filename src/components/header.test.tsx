import { render, screen } from '@testing-library/react'
import { Header } from './header'

describe('Header component', () => {
    it('should render the word Header', () => {
        render(<Header />)

        const content: HTMLElement = screen.getByText('Header')

        expect(content).toBeInTheDocument()
    })
})
