import type { Metadata } from 'next'
import type { JSXElement } from '@/data/types'
import { ReactChildren } from '@/data/interfaces'

export const metadata: Metadata = {
    title: 'Browse'
}

export default function BrowseLayout({ children }: ReactChildren): JSXElement {
    return <div>{children}</div>
}
