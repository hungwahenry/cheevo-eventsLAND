export class ApiError extends Error {
  readonly status: number
  readonly code?: string
  readonly errors?: Record<string, string[]>
  readonly requestId?: string

  constructor(params: {
    message: string
    status: number
    code?: string
    errors?: Record<string, string[]>
    requestId?: string
  }) {
    super(params.message)
    this.name = "ApiError"
    this.status = params.status
    this.code = params.code
    this.errors = params.errors
    this.requestId = params.requestId
  }

  get isNotFound(): boolean {
    return this.status === 404
  }
}

export function isApiError(error: unknown): error is ApiError {
  return error instanceof ApiError
}
