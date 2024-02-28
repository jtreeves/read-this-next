import { HttpMethod, NextFetchRequestConfig } from '@/data/types'

export function createFetchOptions(
    method: HttpMethod = 'GET',
    headers?: HeadersInit,
    body?: BodyInit,
    cache?: RequestCache,
    next?: NextFetchRequestConfig
): RequestInit {
    const options: RequestInit = {
        method
    }

    if (headers) options.headers = headers
    if (body) options.body = body
    if (cache) options.cache = cache
    if (next) options.next = next

    return options
}
