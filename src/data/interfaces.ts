import { ReactNode } from 'react'
import { DigestError } from './types'

export interface ReactChildren {
    children: ReactNode
}

export interface ErrorProps {
    error: DigestError
    reset: VoidFunction
}
