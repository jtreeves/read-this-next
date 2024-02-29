export class CustomError extends Error {
    cause: Error

    constructor(cause: unknown) {
        super()

        this.name = 'CustomError'

        if (cause instanceof Error) {
            this.cause = cause
        } else {
            this.cause = new Error()
        }
    }

    protected appendCauseMessage(): void {
        if (this.cause.message) {
            this.message += ': ' + this.cause.message
        }
    }
}

export class ServiceError extends CustomError {
    service: string

    constructor(service: string, cause: unknown) {
        super(cause)

        this.name = 'ServiceError'
        this.service = service
        this.message = `An error occurred in the ${this.service} service function`

        this.appendCauseMessage()
    }
}

export class RouteError extends CustomError {
    method: string
    path: string

    constructor(method: string, path: string, cause: unknown) {
        super(cause)

        this.name = 'RouteError'
        this.method = method
        this.path = path
        this.message = `An error occurred in the ${this.method} method of the ${this.path} route`

        this.appendCauseMessage()
    }
}

export class DatabaseError extends CustomError {
    table: string

    constructor(table: string, cause: unknown) {
        super(cause)

        this.name = 'DatabaseError'
        this.table = table
        this.message = `A database error occurred with the ${this.table} table`

        this.appendCauseMessage()
    }
}

export class ApiError extends CustomError {
    api: string

    constructor(api: string, cause: unknown) {
        super(cause)

        this.name = 'ApiError'
        this.api = api
        this.message = `An API error occurred with the ${this.api} API`

        this.appendCauseMessage()
    }
}

export class FetchError extends CustomError {
    constructor(cause: unknown) {
        super(cause)

        this.name = 'FetchError'
        this.message = 'An error occurred while using the fetch method'

        this.appendCauseMessage()
    }
}

export class AuthError extends CustomError {
    constructor(cause: unknown) {
        super(cause)

        this.name = 'AuthError'
    }
}

export class AuthenticationError extends AuthError {
    constructor(cause: unknown) {
        super(cause)

        this.name = 'AuthenticationError'
        this.message = 'User has not been authenticated'

        this.appendCauseMessage()
    }
}

export class AuthorizationError extends AuthError {
    constructor(cause: unknown) {
        super(cause)

        this.name = 'AuthorizationError'
        this.message = 'User is not authorized to view this resource'

        this.appendCauseMessage()
    }
}
