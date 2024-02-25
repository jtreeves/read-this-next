import { render, screen } from '@testing-library/react'
import { Modal } from './modal'

describe('Modal component', () => {
    it('should render the word Modal', () => {
        render(<Modal />)

        const content: HTMLElement = screen.getByText('Modal')

        expect(content).toBeInTheDocument()
    })
})
