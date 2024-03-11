import { render, screen } from '@testing-library/react'
import HomePage from './page'

describe('HomePage view', () => {
    it('should render a heading matching name of site', () => {
        render(<HomePage />)

        const heading: HTMLElement = screen.getByRole('heading', { level: 1 })

        expect(heading.textContent).toEqual('Read This Next')
    })
})
