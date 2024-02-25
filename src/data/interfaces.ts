import type { ReactNode } from 'react'
import type { DigestError } from './types'

export interface ReactChildren {
    children: ReactNode
}

export interface ErrorProps {
    error: DigestError
    reset: VoidFunction
}
