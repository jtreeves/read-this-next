import type { JSXElement } from '@/data/types'
import { ReactChildren } from '@/data/interfaces'

export default function PromptLayout({ children }: ReactChildren): JSXElement {
    return <div>{children}</div>
}
