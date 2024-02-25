'use client'

import { useEffect } from 'react'
import { Component } from '@/data/types'
import { ErrorProps } from '@/data/interfaces'

export default function GlobalError({ error, reset }: ErrorProps): Component {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <html>
            <body>
                <h2>Something went wrong!</h2>

                <button onClick={reset}>Try again</button>
            </body>
        </html>
    )
}
