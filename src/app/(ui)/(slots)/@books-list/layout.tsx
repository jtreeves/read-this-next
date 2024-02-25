import { Component } from '@/data/types'
import { ReactChildren } from '@/data/interfaces'

export default function BooksListLayout({
    children
}: ReactChildren): Component {
    return <div>{children}</div>
}
