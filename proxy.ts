import { NextResponse, type NextRequest } from "next/server"
import { locales, defaultLocale } from "@/lib/i18n/config"

function detectLocale(request: NextRequest): string {
  const header = request.headers.get("accept-language") ?? ""
  const preferred = header
    .split(",")
    .map((part) => part.split(";")[0]!.trim().toLowerCase())
    .filter(Boolean)

  for (const tag of preferred) {
    const base = tag.split("-")[0]!
    if ((locales as readonly string[]).includes(base)) return base
  }
  return defaultLocale
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  )
  if (hasLocale) return

  const locale = detectLocale(request)
  const url = request.nextUrl.clone()
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  // Skip static files (anything with a dot), Next internals, API routes and the standalone intake form.
  matcher: ["/((?!_next|api|buildform|.*\\..*).*)"],
}
