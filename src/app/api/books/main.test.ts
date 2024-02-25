import { GET } from './route'

describe('GET function for books endpoint', () => {
    it('should be a function', () => {
        expect(typeof GET).toBe('function')
    })
})
