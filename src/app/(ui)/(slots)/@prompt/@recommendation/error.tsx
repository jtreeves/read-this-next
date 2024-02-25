'use client'

import { useEffect } from 'react'
import type { JSXElement } from '@/data/types'
import { ErrorProps } from '@/data/interfaces'

export default function RecommendationError({
    error,
    reset
}: ErrorProps): JSXElement {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div>
            <h2>Something went wrong!</h2>

            <button onClick={reset}>Try again</button>
        </div>
    )
}
