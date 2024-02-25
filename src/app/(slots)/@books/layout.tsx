import { Component } from '@/data/types'
import { BooksLayoutProps } from '@/data/interfaces'

export default function BooksLayout({
    children,
    book
}: BooksLayoutProps): Component {
    return (
        <div>
            {children}

            {book}
        </div>
    )
}
