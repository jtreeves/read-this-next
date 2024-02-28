import { ServiceError } from '@/data/errors'

export async function findManyBooks(): Promise<string> {
    try {
        const result: string = await ''

        return result
    } catch (error: unknown) {
        throw new ServiceError(findManyBooks.name, error)
    }
}
