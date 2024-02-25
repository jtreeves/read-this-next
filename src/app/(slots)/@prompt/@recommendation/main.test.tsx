import { render, screen } from '@testing-library/react'
import RecommendationPage from './page'

describe('RecommendationPage', () => {
    it('should render the word Recommendation', () => {
        render(<RecommendationPage />)

        const heading: HTMLElement = screen.getByText('Recommendation')

        expect(heading).toBeInTheDocument()
    })
})
