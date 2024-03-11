export type DigestError = Error & { digest?: string }

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

export type NextFetchRequestConfig = {
    revalidate?: number | false
    tags?: string[]
}
