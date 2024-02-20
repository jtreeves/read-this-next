import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
    dir: './'
})

const config = {
    injectGlobals: true,
    testMatch: ['<rootDir>/src/**/*.test.(ts|tsx)'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.mjs'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    },
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    coverageProvider: 'v8'
}

export default createJestConfig(config)
