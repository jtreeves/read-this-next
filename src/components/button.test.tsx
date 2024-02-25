import { render, screen } from '@testing-library/react'
import { Button } from './button'

describe('Button component', () => {
    it('should render the word Button', () => {
        render(<Button />)

        const content: HTMLElement = screen.getByText('Button')

        expect(content).toBeInTheDocument()
    })
})
