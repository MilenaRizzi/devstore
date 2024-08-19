import { env } from '@/env'

export function api(path: string, init?: RequestInit) {
  const baseUrl = env.NEXT_PUBLIC_API_BASE_URL
  const apiPrefi = '/api'
  const url = new URL(apiPrefi.concat(path), baseUrl)

  return fetch(url, init)
}

/* se eu chamasse a função api com api('/products')
a linha da url   const url = new URL(path, baseUrl) estaria unindo /products com a base URL que esta vindo do env */
