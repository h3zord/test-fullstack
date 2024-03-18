export async function api(path: string, init?: RequestInit) {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL

  const url = new URL(path, baseUrl)

  try {
    const response = await fetch(url, init)

    const data = await response.json()

    if (data.error) throw new Error(data.error)

    return { data }
  } catch (error) {
    let errorMessage = 'Unknown Error'

    if (error instanceof Error) errorMessage = error.message

    throw new Error(errorMessage)
  }
}
