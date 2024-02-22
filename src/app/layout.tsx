import type { JSX } from 'react'
import type { Metadata } from 'next'
import type { NextFont } from 'next/dist/compiled/@next/font'
import { Inter } from 'next/font/google'
import { ReactChildren } from '@/data/interfaces'
import './globals.css'

const inter: NextFont = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Read This Next',
    description: 'Book recommendation app'
}

export default function RootLayout({
    children
}: Readonly<ReactChildren>): JSX.Element {
    return (
        <html lang='en'>
            <body className={inter.className}>{children}</body>
        </html>
    )
}
