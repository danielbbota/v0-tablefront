import Link from "next/link"

const footerLinks = [
  { href: "#pain-points", label: "Why TableFront" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#leaders", label: "Who We Are" },
]

const socialLinks = [
  { href: "https://twitter.com/tablefront", label: "Twitter" },
  { href: "https://instagram.com/tablefront", label: "Instagram" },
  { href: "https://linkedin.com/company/tablefront", label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand Column */}
          <div>
            <Link href="/" className="font-serif text-2xl font-bold tracking-wide text-foreground">
              TableFront
            </Link>
            <p className="mt-4 font-sans text-sm leading-relaxed text-foreground/60">
              Websites built for hospitality.
              <br />
              By people who lived it.
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

          {/* Social Column */}
          <div>
            <h4 className="font-mono text-sm uppercase tracking-wider text-primary">
              Connect
            </h4>
            <ul className="mt-4 space-y-3">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm text-foreground/60 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-border pt-8">
          <p className="font-sans text-sm text-foreground/40">
            &copy; {new Date().getFullYear()} TableFront. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
