import type { JSX } from 'react'

export type JSXElement = JSX.Element

export type DigestError = Error & { digest?: string }
