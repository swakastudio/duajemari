
const BASE_URL = "https://www.duajemari.com"

export type UrlFormat =
  | "Pria - Nama Wanita"
  | "Wanita - Pria"
  | "The Wedding"
  | "Custom"

export interface UrlSuggestion {
  format: UrlFormat
  slug: string
  url: string
}

export function cleanSlug(value: string): string {
  return String(value || "")
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-+/g, "-")
}

export function buildInvitationUrl(slug: string): string {
  const clean = cleanSlug(slug)

  if (!clean) return ""

  return `${BASE_URL}/${clean}`
}

export function buildUrlSuggestions(
  groomNickname: string,
  brideNickname: string,
  customSlug = ""
): UrlSuggestion[] {
  const groom = cleanSlug(groomNickname)
  const bride = cleanSlug(brideNickname)

  if (!groom || !bride) return []

  const suggestions: UrlSuggestion[] = [
    {
      format: "Pria - Nama Wanita",
      slug: `${groom}-${bride}`,
      url: buildInvitationUrl(`${groom}-${bride}`),
    },
    {
      format: "Wanita - Pria",
      slug: `${bride}-${groom}`,
      url: buildInvitationUrl(`${bride}-${groom}`),
    },
    {
      format: "The Wedding",
      slug: `thewedding-${groom}-${bride}`,
      url: buildInvitationUrl(`thewedding-${groom}-${bride}`),
    },
  ]

  const custom = cleanSlug(customSlug)

  if (custom) {
    suggestions.push({
      format: "Custom",
      slug: custom,
      url: buildInvitationUrl(custom),
    })
  }

  return suggestions
}
