import { ApiError } from "@/lib/api/errors"
import type { ApiErrorBody, ApiSuccess } from "@/lib/api/types"
import { serverConfig } from "@/lib/server/config"

type ServerFetchOptions = {
  next?: NextFetchRequestConfig
  cache?: RequestCache
  headers?: Record<string, string>
}

export async function serverFetch<T>(
  path: string,
  options: ServerFetchOptions = {}
): Promise<T> {
  const url = `${serverConfig.apiBaseUrl}/${path.replace(/^\//, "")}`

  const response = await fetch(url, {
    method: "GET",
    headers: { Accept: "application/json", ...options.headers },
    cache: options.cache,
    next: options.next,
  })

  if (!response.ok) {
    const body = (await response.json().catch(() => null)) as
      | ApiErrorBody
      | null
    throw new ApiError({
      message: body?.message ?? `Request failed (${response.status})`,
      status: response.status,
      code: body?.code,
      errors: body?.errors,
      requestId: body?.request_id,
    })
  }

  const envelope = (await response.json()) as ApiSuccess<T>
  return envelope.data
}
