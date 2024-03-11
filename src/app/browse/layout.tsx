import { ReactElement } from 'react'
import { Metadata } from 'next'
import { ReactChildren } from '@/data/interfaces'

export const metadata: Metadata = {
    title: 'Browse'
}

export default function BrowseLayout({
    children
}: ReactChildren): ReactElement {
    return <div>{children}</div>
}
