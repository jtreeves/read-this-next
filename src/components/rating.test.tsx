import { render, screen } from '@testing-library/react'
import { Rating } from './rating'

describe('Rating component', () => {
    it('should render the word Rating', () => {
        render(<Rating />)

        const content: HTMLElement = screen.getByText('Rating')

        expect(content).toBeInTheDocument()
    })
})
