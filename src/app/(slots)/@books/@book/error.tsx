'use client'

import { useEffect } from 'react'
import { Component } from '@/data/types'
import { ErrorProps } from '@/data/interfaces'

export default function BookError({ error, reset }: ErrorProps): Component {
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
