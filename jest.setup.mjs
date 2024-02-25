import '@testing-library/jest-dom'

// global.fetch = jest.fn()

jest.mock('node-fetch', () => ({
    default: {
        fetch: jest.fn(() => ({
            data: 'test'
        }))
    }
}))
