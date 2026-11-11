import type { CSSProperties, ReactNode } from "react"
import { Check, Package, ShoppingBag } from "lucide-react"
import type { BusinessDict } from "@/lib/dictionaries/business.en"

/**
 * One illustration per platform, each in two cards: what the customer sees
 * (the widget, with its confirmation toast) and what the business sees (the
 * dashboard). Static, brand-coloured markup — the same shapes the real
 * widgets and dashboards draw, without screenshots that go stale.
 */

type Pages = BusinessDict["pages"]

const LABEL = "font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground"

function Field({ label, value, className = "" }: { label: string; value: string; className?: string }) {
  return (
    <div className={`rounded-md border border-border bg-background px-3 py-2 ${className}`}>
      <p className={LABEL}>{label}</p>
      <p className="mt-0.5 text-sm text-heading">{value}</p>
    </div>
  )
}

function Frame({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col gap-8 pb-10 md:flex-row md:items-start md:gap-5" aria-hidden>
      {children}
    </div>
  )
}

/** Customer-facing card, on the left and set a little lower, with the confirmation toast hanging off its bottom corner. */
function WidgetCard({
  title,
  toastTitle,
  toastDetail,
  children,
}: {
  title: string
  toastTitle: string
  toastDetail: string
  children: ReactNode
}) {
  return (
    <div className="relative z-10 w-full max-w-[340px] rounded-lg border border-border bg-background p-5 shadow-[var(--shadow-card)] md:mt-16 md:w-[54%] md:max-w-none">
      <p className="font-serif text-h3 font-medium text-heading">{title}</p>
      {children}
      <div className="absolute -bottom-10 -left-3 z-20 flex max-w-[250px] items-center gap-3 rounded-lg bg-background p-3 shadow-[0_18px_36px_-16px_rgb(26_18_8/0.45)] md:-left-10">
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brass text-espresso">
          <Check className="h-4 w-4" strokeWidth={2.2} />
        </span>
        <span className="text-xs leading-snug text-muted-foreground">
          <strong className="block font-medium text-heading">{toastTitle}</strong>
          {toastDetail}
        </span>
      </div>
    </div>
  )
}

/** The business's own screen, on the right. */
function DashCard({ title, meta, children }: { title: string; meta: string; children: ReactNode }) {
  return (
    <div className="w-full max-w-[340px] rounded-lg border border-border bg-background p-5 md:w-[46%] md:max-w-none">
      <div className="flex items-baseline justify-between gap-3">
        <p className="font-serif text-h3 font-medium text-heading">{title}</p>
        <p className={LABEL}>{meta}</p>
      </div>
      {children}
    </div>
  )
}

/* ------------------------------------------------------------------ stays */

/** Where a reservation came from: 0 direct, 1 Airbnb, 2 Booking.com. */
const SOURCE_CLASS = [
  "border-brass bg-brass text-espresso",
  "border-primary bg-primary/15 text-primary-deeper",
  "border-espresso bg-espresso/85 text-cream",
]
const DAYS = [12, 13, 14, 15, 16, 17, 18]
/** One row per unit: reservations as [first day column, nights, source]. */
const STAYS: [number, number, 0 | 1 | 2][][] = [
  [
    [1, 2, 1],
    [3, 3, 0],
  ],
  [[2, 4, 2]],
  [
    [1, 3, 0],
    [5, 3, 1],
  ],
]

export function StaysIllustration({ mock }: { mock: Pages["stays"]["mock"] }) {
  return (
    <Frame>
      <WidgetCard title={mock.widgetTitle} toastTitle={mock.confirmed} toastDetail={mock.confirmedSub}>
        <div className="mt-4 grid grid-cols-2 gap-2.5">
          <Field label={mock.checkIn} value={mock.checkInValue} />
          <Field label={mock.checkOut} value={mock.checkOutValue} />
          <Field label={mock.guests} value={mock.guestsValue} className="col-span-2" />
        </div>
        <ul className="mt-3 space-y-2">
          {mock.units.map((unit, index) => (
            <li
              key={unit.name}
              className={`flex items-center justify-between gap-3 rounded-md border px-3 py-2.5 ${
                index === 0 ? "border-espresso bg-surface" : "border-border"
              }`}
            >
              <span className="min-w-0">
                <span className="block text-sm font-medium text-heading">{unit.name}</span>
                <span className={LABEL}>{unit.meta}</span>
              </span>
              <span className="shrink-0 font-serif text-subheading text-heading">{unit.price}</span>
            </li>
          ))}
        </ul>
        <span className="btn btn-primary mt-5 w-full !px-4 !py-3 text-center">{mock.button}</span>
      </WidgetCard>

      <DashCard title={mock.calendarTitle} meta={mock.calendarMeta}>
        <div className="mt-4 grid grid-cols-7 gap-1 text-center">
          {DAYS.map((day) => (
            <span key={day} className={LABEL}>
              {day}
            </span>
          ))}
        </div>
        <div className="mt-2 space-y-3">
          {mock.calendarUnits.map((unit, row) => (
            <div key={unit}>
              <p className="text-xs text-heading">{unit}</p>
              <div className="mt-1 grid grid-cols-7 gap-1 rounded-md bg-surface p-1">
                {(STAYS[row] ?? []).map(([start, nights, source]) => (
                  <span
                    key={start}
                    className={`h-5 rounded-sm border ${SOURCE_CLASS[source]}`}
                    style={{ gridColumn: `${start} / span ${nights}` } as CSSProperties}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
          {mock.legend.map((label, index) => (
            <li key={label} className={`flex items-center gap-1.5 ${LABEL}`}>
              <span className={`h-2.5 w-2.5 rounded-sm border ${SOURCE_CLASS[index]}`} />
              {label}
            </li>
          ))}
        </ul>
      </DashCard>
    </Frame>
  )
}

/* ----------------------------------------------------------- appointments */

/** Day columns: each block is [height in rem, gap before in rem]. */
const AGENDA: [number, number][][] = [
  [
    [4.5, 0],
    [2, 0.75],
    [2.5, 0.5],
  ],
  [
    [1.75, 1],
    [2, 0.5],
    [3.5, 1.25],
  ],
]
const PRO_CLASS = ["border-brass bg-brass/90 text-espresso", "border-primary bg-primary/15 text-primary-deeper"]

export function AppointmentsIllustration({ mock }: { mock: Pages["beauty"]["mock"] }) {
  return (
    <Frame>
      <WidgetCard title={mock.widgetTitle} toastTitle={mock.confirmed} toastDetail={mock.confirmedSub}>
        <p className={`mt-4 ${LABEL}`}>{mock.service}</p>
        <ul className="mt-2 space-y-2">
          {mock.services.map((service, index) => (
            <li
              key={service.name}
              className={`flex items-center justify-between gap-3 rounded-md border px-3 py-2 ${
                index === 0 ? "border-espresso bg-surface" : "border-border"
              }`}
            >
              <span className="text-sm font-medium text-heading">{service.name}</span>
              <span className={`shrink-0 ${LABEL}`}>{service.meta}</span>
            </li>
          ))}
        </ul>
        <p className={`mt-4 ${LABEL}`}>{mock.professional}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {mock.professionals.map((name, index) => (
            <span
              key={name}
              className={`rounded-full border px-3 py-1 text-xs ${
                index === 1 ? "border-espresso bg-espresso text-cream" : "border-border text-heading"
              }`}
            >
              {name}
            </span>
          ))}
        </div>
        <p className={`mt-4 ${LABEL}`}>{mock.time}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {mock.slots.map((slot, index) => (
            <span
              key={slot}
              className={`rounded-full border px-3 py-1 font-mono text-xs ${
                index === 2 ? "border-espresso bg-espresso text-cream" : "border-border text-heading"
              }`}
            >
              {slot}
            </span>
          ))}
        </div>
        <span className="btn btn-primary mt-5 w-full !px-4 !py-3 text-center">{mock.button}</span>
      </WidgetCard>

      <DashCard title={mock.agendaTitle} meta={mock.agendaMeta}>
        <div className="mt-4 grid grid-cols-2 gap-3">
          {mock.columns.map((name, column) => {
            const offset = AGENDA.slice(0, column).reduce((sum, blocks) => sum + blocks.length, 0)
            return (
              <div key={name}>
                <p className={`border-b border-border pb-2 ${LABEL}`}>{name}</p>
                <div className="rounded-b-md bg-surface px-1.5 pb-2 pt-1.5">
                  {(AGENDA[column] ?? []).map(([height, gap], index) => (
                    <span
                      key={index}
                      className={`block overflow-hidden rounded-sm border px-2 py-1 text-[11px] leading-tight ${PRO_CLASS[column % 2]}`}
                      style={{ height: `${height}rem`, marginTop: `${gap}rem` } as CSSProperties}
                    >
                      {mock.blocks[(offset + index) % mock.blocks.length]}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </DashCard>
    </Frame>
  )
}

/* ------------------------------------------------------------------- shop */

export function ShopIllustration({ mock }: { mock: Pages["shops"]["mock"] }) {
  return (
    <Frame>
      <WidgetCard title={mock.shopName} toastTitle={mock.toastTitle} toastDetail={mock.toastDetail}>
        <div className="mt-4 grid grid-cols-2 gap-3">
          {mock.products.map((product, index) => (
            <div key={product.name}>
              <div
                className={`grid aspect-square place-items-center rounded-md border border-border ${
                  index === 0 ? "bg-brass/25" : "bg-primary/10"
                }`}
              >
                <Package className="h-7 w-7 text-primary-deep" strokeWidth={1.25} />
              </div>
              <p className="mt-2 text-sm font-medium leading-snug text-heading">{product.name}</p>
              <p className="font-serif text-subheading text-heading">{product.price}</p>
            </div>
          ))}
        </div>
        <span className="btn btn-primary mt-5 w-full !px-4 !py-3 text-center">{mock.add}</span>
      </WidgetCard>

      <DashCard title={mock.ordersTitle} meta={String(mock.orders.length)}>
        <ul className="mt-4 divide-y divide-border">
          {mock.orders.map((order, index) => (
            <li key={order.id} className="flex items-center justify-between gap-3 py-2.5">
              <span className="flex items-center gap-2.5 font-mono text-sm text-heading">
                <ShoppingBag className="h-4 w-4 text-primary-deep" strokeWidth={1.5} />
                {order.id}
              </span>
              <span
                className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] ${
                  index === 0 ? "border-brass bg-brass text-espresso" : "border-border text-muted-foreground"
                }`}
              >
                {order.status}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-3 rounded-md bg-surface px-3 py-2.5">
          <p className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
            <span className={LABEL}>{mock.basket}</span>
            <span className="text-xs text-heading">{mock.basketMeta}</span>
          </p>
          <span className="mt-2 block rounded-full bg-espresso px-3 py-1.5 text-center font-mono text-[10px] uppercase tracking-[0.12em] text-cream">
            {mock.checkout}
          </span>
        </div>
      </DashCard>
    </Frame>
  )
}
