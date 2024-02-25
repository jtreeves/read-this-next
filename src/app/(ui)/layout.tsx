import type { Metadata } from 'next'
import type { NextFont } from 'next/dist/compiled/@next/font'
import { Inter } from 'next/font/google'
import type { JSXElement } from '@/data/types'
import { ReactChildren } from '@/data/interfaces'
import '../globals.css'

const inter: NextFont = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Read This Next',
    description: 'Book recommendation app'
}

export default function RootLayout({ children }: ReactChildren): JSXElement {
    return (
        <html lang='en'>
            <body className={inter.className}>{children}</body>
        </html>
    )
}
