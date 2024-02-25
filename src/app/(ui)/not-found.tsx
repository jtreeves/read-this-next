import Link from 'next/link'
import type { JSXElement } from '@/data/types'

export default function RootNotFound(): JSXElement {
    return (
        <div>
            <h2>Not Found</h2>

            <p>Could not find requested resource</p>

            <Link href='/'>Return Home</Link>
        </div>
    )
}
