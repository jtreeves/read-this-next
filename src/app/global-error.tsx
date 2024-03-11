'use client'

import { ReactElement, useEffect } from 'react'
import { ErrorProps } from '@/data/interfaces'

export default function GlobalError({
    error,
    reset
}: ErrorProps): ReactElement {
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
