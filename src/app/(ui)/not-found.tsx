import Link from 'next/link'
import { Component } from '@/data/types'

export default function RootNotFound(): Component {
    return (
        <div>
            <h2>Not Found</h2>

            <p>Could not find requested resource</p>

            <Link href='/'>Return Home</Link>
        </div>
    )
}
