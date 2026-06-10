import { notFound } from "next/navigation"

/** Catch-all so unknown paths render the localized 404 with a proper 404 status. */
export default function CatchAll() {
  notFound()
}
