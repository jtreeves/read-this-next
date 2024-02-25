import { Metadata } from 'next'
import { Component } from '@/data/types'
import { ReactChildren } from '@/data/interfaces'

export const metadata: Metadata = {
    title: 'Browse'
}

export default function BrowseLayout({ children }: ReactChildren): Component {
    return <div>{children}</div>
}
