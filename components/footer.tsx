import Link from "next/link"

const footerLinks = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#leaders", label: "Our Team" },
  { href: "https://calendly.com/daniel-tablesfront/30min", label: "Book a Call" },
  { href: "/pricing", label: "Pricing" },
]

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Brand Column */}
          <div>
            <Link href="/" className="font-serif text-2xl font-bold tracking-wide text-foreground">
              TableFront
            </Link>
            <p className="mt-4 font-sans text-sm leading-relaxed text-foreground/60">
              Websites built for hospitality. By people who lived it.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="font-mono text-sm uppercase tracking-wider text-primary">
              Navigation
            </h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-foreground/60 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-border pt-8">
          <p className="font-sans text-sm text-foreground/40">
            tablesfront.com · © 2026 TableFront · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
