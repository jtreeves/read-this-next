import { ServiceError } from '@/data/errors'

export async function starBook(): Promise<string> {
    try {
        const result: string = await ''

        return result
    } catch (error: unknown) {
        throw new ServiceError(starBook.name, error)
    }
}
