import { ServiceError } from '@/data/errors'

export async function obtainRecommendations(): Promise<string> {
    try {
        const result: string = await ''

        return result
    } catch (error: unknown) {
        throw new ServiceError(obtainRecommendations.name, error)
    }
}
