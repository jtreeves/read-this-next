import { ReactNode } from 'react'
import { DigestError } from './types'

export interface ReactChildren {
    children: ReactNode
}

export interface ErrorProps {
    error: DigestError
    reset: VoidFunction
}

export interface BooksLayoutProps extends ReactChildren {
    book: ReactNode
}

export interface PromptLayoutProps extends ReactChildren {
    recommendation: ReactNode
}
