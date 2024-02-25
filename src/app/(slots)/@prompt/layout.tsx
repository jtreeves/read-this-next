import { Component } from '@/data/types'
import { PromptLayoutProps } from '@/data/interfaces'

export default function PromptLayout({
    children,
    recommendation
}: PromptLayoutProps): Component {
    return (
        <div>
            {children}

            {recommendation}
        </div>
    )
}
