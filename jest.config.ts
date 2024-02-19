import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
    dir: './'
})

const config: Config = {
    injectGlobals: true,
    testMatch: ['<rootDir>/src/**/*.test.(ts|tsx)'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
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
