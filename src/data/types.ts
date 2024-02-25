import { JSX } from 'react'

export type Component = JSX.Element

export type DigestError = Error & { digest?: string }
