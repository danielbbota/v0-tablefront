import { Check } from "lucide-react"
import type { Dictionary } from "@/lib/dictionaries/en"

type Mock = Dictionary["reservations"]["mock"]

/** Tonight's floor: 0 = free, 1 = seated, 2 = arriving. Rounds are `r`. */
const TABLES: { seats: number; state: 0 | 1 | 2; r?: boolean }[] = [
  { seats: 2, state: 1 },
  { seats: 4, state: 1, r: true },
  { seats: 2, state: 0 },
  { seats: 6, state: 2 },
  { seats: 4, state: 1 },
  { seats: 2, state: 2, r: true },
  { seats: 4, state: 0 },
  { seats: 8, state: 1, r: true },
  { seats: 2, state: 1 },
  { seats: 4, state: 2 },
  { seats: 2, state: 0, r: true },
]
const STATE_CLASS = {
  0: "border-border bg-background text-muted-foreground",
  1: "border-brass bg-brass text-espresso",
  2: "border-primary bg-primary/15 text-primary-deeper",
}
const LEGEND_CLASS = ["border-border bg-background", "border-brass bg-brass", "border-primary bg-primary/15"]

function Field({ label, value }: { label: string; value?: string }) {
  return (
    <div className="rounded-md border border-border bg-background px-3 py-2">
      <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">{label}</p>
      {value ? (
        <p className="mt-0.5 text-sm text-heading">{value}</p>
      ) : (
        <span className="mt-1.5 block h-2 w-2/3 rounded-full bg-border" />
      )}
    </div>
  )
}

/**
 * The reservation platform in two cards: the guest-facing widget with its
 * confirmation toast, and the team's live floor map. Static, brand-coloured
 * markup — the same shapes the real widget and dashboard draw, without
 * screenshots that go stale. Used by the home teaser and the /reservations
 * page.
 */
export function ReservationsIllustration({ mock }: { mock: Mock }) {
  return (
    <div className="relative md:min-h-[720px]" aria-hidden>
      {/* Guest widget */}
      <div className="relative z-10 w-full max-w-[340px] rounded-lg border border-border bg-background p-5 shadow-[var(--shadow-card)] md:absolute md:bottom-0 md:left-0">
        <p className="font-serif text-h3 font-medium text-heading">{mock.widgetTitle}</p>
        <div className="mt-4 grid grid-cols-2 gap-2.5">
          <Field label={mock.date} value={mock.dateValue} />
          <Field label={mock.party} value={mock.partyValue} />
        </div>
        <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">{mock.time}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {mock.slots.map((slot, index) => (
            <span
              key={slot}
              className={`rounded-full border px-3 py-1 font-mono text-xs ${
                index === 3 ? "border-espresso bg-espresso text-cream" : "border-border text-heading"
              }`}
            >
              {slot}
            </span>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2.5">
          <Field label={mock.name} />
          <Field label={mock.phone} />
        </div>
        <span className="btn btn-primary mt-5 w-full !px-4 !py-3 text-center">{mock.button}</span>

        {/* Confirmation toast */}
        <div className="absolute -left-3 bottom-[4.5rem] z-20 flex max-w-[240px] items-center gap-3 rounded-lg bg-background p-3 shadow-[0_18px_36px_-16px_rgb(26_18_8/0.45)] md:-left-10">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brass text-espresso">
            <Check className="h-4 w-4" strokeWidth={2.2} />
          </span>
          <span className="text-xs leading-snug text-muted-foreground">
            <strong className="block font-medium text-heading">{mock.confirmed}</strong>
            {mock.confirmedSub}
          </span>
        </div>
      </div>

      {/* Team floor map */}
      <div className="mt-8 w-full max-w-[300px] rounded-lg border border-border bg-surface p-5 md:absolute md:right-0 md:top-0 md:mt-0">
        <div className="flex items-baseline justify-between gap-3">
          <p className="font-serif text-h3 font-medium text-heading">{mock.floorTitle}</p>
          <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">{mock.floorCovers}</p>
        </div>
        <div className="mt-4 h-2 rounded-full bg-espresso/80" />
        <div className="mt-4 grid grid-cols-4 gap-3">
          {TABLES.map((table, index) => (
            <span
              key={index}
              className={`grid aspect-square place-items-center border font-mono text-xs ${STATE_CLASS[table.state]} ${
                table.r ? "rounded-full" : "rounded-md"
              } ${table.seats >= 6 && !table.r ? "col-span-2 aspect-auto" : ""}`}
            >
              {table.seats}
            </span>
          ))}
        </div>
        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
          {mock.legend.map((label, index) => (
            <li key={label} className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
              <span className={`h-2.5 w-2.5 rounded-sm border ${LEGEND_CLASS[index]}`} />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
