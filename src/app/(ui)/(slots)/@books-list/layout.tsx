import type { JSXElement } from '@/data/types'
import { ReactChildren } from '@/data/interfaces'

export default function BooksListLayout({
    children
}: ReactChildren): JSXElement {
    return <div>{children}</div>
}
