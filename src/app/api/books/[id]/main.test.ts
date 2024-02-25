import { GET } from './route'

describe('GET function for books ID endpoint', () => {
    it('should be a function', () => {
        expect(typeof GET).toBe('function')
    })
})
