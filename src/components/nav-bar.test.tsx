import { render, screen } from '@testing-library/react'
import { NavBar } from './nav-bar'

describe('NavBar component', () => {
    it('should render the word NavBar', () => {
        render(<NavBar />)

        const content: HTMLElement = screen.getByText('NavBar')

        expect(content).toBeInTheDocument()
    })
})
