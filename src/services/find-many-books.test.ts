import { findManyBooks } from './find-many-books'

describe('findManyBooks utility', () => {
    it('should be a function', () => {
        expect(typeof findManyBooks).toBe('function')
    })
})
