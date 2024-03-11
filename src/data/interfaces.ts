import { ReactNode } from 'react'
import { DigestError } from './types'

// PROPS

export interface ErrorProps {
    error: DigestError
    reset: VoidFunction
}

export interface ReactChildren {
    children: ReactNode
}
