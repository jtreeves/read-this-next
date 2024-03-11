import { ReactElement } from 'react'
import { Metadata } from 'next'
import { ReactChildren } from '@/data/interfaces'

export const metadata: Metadata = {
    title: 'Dashboard'
}

export default function DashboardLayout({
    children
}: ReactChildren): ReactElement {
    return <div>{children}</div>
}
