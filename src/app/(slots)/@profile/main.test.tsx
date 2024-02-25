import { render, screen } from '@testing-library/react'
import ProfilePage from './page'

describe('ProfilePage', () => {
    it('should render the word Profile', () => {
        render(<ProfilePage />)

        const heading: HTMLElement = screen.getByText('Profile')

        expect(heading).toBeInTheDocument()
    })
})
