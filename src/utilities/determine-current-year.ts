export function determineCurrentYear(): number {
    const now: Date = new Date()
    const year: number = now.getFullYear()

    return year
}
