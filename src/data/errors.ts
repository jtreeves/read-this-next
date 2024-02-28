export class CustomError extends Error {
    callee?: string
    parentError: Error

    constructor(callee: string, inputError: unknown) {
        super(`An error occurred in the ${callee} function`)

        this.name = 'CustomError'
        this.callee = callee

        if (inputError instanceof Error) {
            this.parentError = inputError
        } else {
            this.parentError = new Error('No parent error detected')
        }

        this.updateMessage()
        this.updateStack()
    }

    protected updateMessage(): void {
        this.message += ': ' + this.parentError.message
    }

    private updateStack(): void {
        this.stack += '\n' + this.parentError.stack
    }
}

export class ServiceError extends CustomError {
    service: string

    constructor(service: string, inputError: unknown) {
        super(service, inputError)

        this.name = 'ServiceError'
        this.service = service
        this.message = `An error occurred in the ${this.service} service function`

        this.updateMessage()

        delete this.callee
    }
}

export class DatabaseError extends ServiceError {
    table: string

    constructor(table: string, service: string, inputError: unknown) {
        super(service, inputError)

        this.name = 'DatabaseError'
        this.table = table
        this.message = `A database error occurred with the ${this.table} table as a result of call to the ${this.service} service function`

        this.updateMessage()
    }
}

export class ApiError extends ServiceError {
    api: string

    constructor(api: string, service: string, inputError: unknown) {
        super(service, inputError)

        this.name = 'ApiError'
        this.api = api
        this.message = `An API error occurred with the ${this.api} API as a result of call to the ${this.service} service function`

        this.updateMessage()
    }
}

export class RouteError extends CustomError {
    method: string
    path: string

    constructor(method: string, path: string, inputError: unknown) {
        super(method, inputError)

        this.name = 'RouteError'
        this.method = method
        this.path = path
        this.message = `An error occurred in the ${this.method} method of the ${this.path} route`

        this.updateMessage()

        delete this.callee
    }
}
