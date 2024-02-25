import { Metadata } from 'next'
import { Component } from '@/data/types'
import { ReactChildren } from '@/data/interfaces'

export const metadata: Metadata = {
    title: 'Dashboard'
}

export default function DashboardLayout({
    children
}: ReactChildren): Component {
    return <div>{children}</div>
}
