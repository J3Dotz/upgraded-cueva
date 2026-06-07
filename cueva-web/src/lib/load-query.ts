import type { ClientPerspective, QueryParams } from '@sanity/client'
import { sanityClient } from 'sanity:client'

const token = import.meta.env.SANITY_API_READ_TOKEN

function parsePerspective(raw: string | undefined): ClientPerspective | undefined {
  if (!raw) return undefined
  const decoded = decodeURIComponent(raw)
  if (decoded.startsWith('[')) {
    try { return JSON.parse(decoded) as ClientPerspective } catch { return undefined }
  }
  return decoded as ClientPerspective
}

export async function loadQuery<T>({
  query,
  params,
  perspectiveCookie,
}: {
  query: string
  params?: QueryParams
  perspectiveCookie?: string
}) {
  const draftMode = !!perspectiveCookie
  if (draftMode && !token) {
    throw new Error('SANITY_API_READ_TOKEN is required for Visual Editing.')
  }
  const perspective: ClientPerspective = draftMode
    ? (parsePerspective(perspectiveCookie) ?? 'drafts')
    : 'published'

  const { result, resultSourceMap } = await sanityClient
    .withConfig({ useCdn: false, ...(draftMode ? { token } : {}) })
    .fetch<T>(query, params ?? {}, {
      filterResponse: false,
      perspective,
      resultSourceMap: draftMode ? 'withKeyArraySelector' : false,
      stega: draftMode,
    })

  return { data: result, sourceMap: resultSourceMap, perspective }
}
