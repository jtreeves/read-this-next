import { render, screen } from '@testing-library/react'
import PromptPage from './page'

describe('PromptPage', () => {
    it('should render the word Prompt', () => {
        render(<PromptPage />)

        const heading: HTMLElement = screen.getByText('Prompt')

        expect(heading).toBeInTheDocument()
    })
})
