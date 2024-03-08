// NEW BASE CLASS

import { FailureStatus } from './enums'

export class CustomError extends Error {
    cause: Error
    status?: FailureStatus

    constructor(cause: unknown, status?: FailureStatus) {
        super()

        this.name = 'CustomError'

        if (cause instanceof Error) {
            this.cause = cause
        } else {
            this.cause = new Error()
        }

        if (status) {
            this.status = status
        } else if (cause instanceof CustomError && cause.status) {
            this.status = cause.status
        }
    }

    protected appendCauseMessage(): void {
        if (this.cause.message) {
            this.message += ': ' + this.cause.message
        }
    }
}

// EXTENSIONS OF NEW BASE CLASS WITH ARGUMENTS

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

// EXTENSIONS OF NEW BASE CLASS WITHOUT ARGUMENTS

export class FetchError extends CustomError {
    constructor() {
        super(null)

        this.name = 'FetchError'
        this.message = 'An error occurred while using the fetch method'
    }
}

// ERRORS WITH STATUS CODES

export class AuthenticationError extends CustomError {
    constructor(cause: unknown) {
        super(cause, FailureStatus.UNAUTHORIZED)

        this.name = 'AuthenticationError'
        this.message = 'User has not been authenticated'

        this.appendCauseMessage()
    }
}

export class AuthorizationError extends CustomError {
    constructor(cause: unknown) {
        super(cause, FailureStatus.FORBIDDEN)

        this.name = 'AuthorizationError'
        this.message = 'User is not authorized to view this resource'

        this.appendCauseMessage()
    }
}

export class NotFoundError extends CustomError {
    constructor(cause: unknown) {
        super(cause, FailureStatus.NOT_FOUND)

        this.name = 'NotFoundError'
        this.message = 'Requested resource could not be found'

        this.appendCauseMessage()
    }
}

export class ServerError extends CustomError {
    constructor(cause: unknown) {
        super(cause, FailureStatus.SERVER_ERROR)

        this.name = 'ServerError'
        this.message =
            'Server encountered an unexpected condition that prevented it from completing the request'

        this.appendCauseMessage()
    }
}
