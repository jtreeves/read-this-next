import { FetchError, ServiceError } from '@/data/errors'
import { createFetchOptions } from '@/utilities/create-fetch-options'

export async function starBook(): Promise<any> {
    try {
        const options: RequestInit = createFetchOptions()
        const response: Response = await fetch('/', options)

        if (response.ok) {
            const result: any = await response.json()

            return result
        } else {
            throw new FetchError()
        }
    } catch (error: unknown) {
        throw new ServiceError(starBook.name, error)
    }
}
