import { Component } from '@/data/types'
import { ReactChildren } from '@/data/interfaces'

export default function BookDetailsLayout({
    children
}: ReactChildren): Component {
    return <div>{children}</div>
}
