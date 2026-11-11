"use client"

import { useLayoutEffect, useRef, useState, type CSSProperties } from "react"
import { Check, Clock } from "lucide-react"
import type { Dictionary } from "@/lib/dictionaries/en"

type Tour = Dictionary["reservations"]["tour"]
type Status = "arrived" | "seated" | "no_show" | null
type TableState = "free" | "reserved" | "arrived" | "seated"

interface Booking {
  id: string
  time: string
  name: string
  party: number
  table: string | null
  phone: string
  note: string
  status: Status
}

/** Online cover cap per slot for the demo restaurant. */
const CAP = 30
const SLOTS = ["18:30", "19:00", "19:30", "20:00", "20:30", "21:00"]

/** Casa Marisa's dining room, in the same units the real floor-plan editor uses. */
const TABLES: { id: string; round: boolean; x: number; y: number; w: number; h: number; seats: number }[] = [
  { id: "1", round: true, x: 80, y: 170, w: 100, h: 100, seats: 2 },
  { id: "2", round: false, x: 230, y: 175, w: 90, h: 90, seats: 2 },
  { id: "3", round: false, x: 370, y: 175, w: 150, h: 90, seats: 6 },
  { id: "4", round: true, x: 570, y: 170, w: 100, h: 100, seats: 4 },
  { id: "5", round: false, x: 720, y: 175, w: 90, h: 90, seats: 4 },
  { id: "6", round: true, x: 860, y: 170, w: 100, h: 100, seats: 2 },
  { id: "7", round: false, x: 80, y: 350, w: 150, h: 90, seats: 4 },
  { id: "8", round: true, x: 290, y: 345, w: 100, h: 100, seats: 4 },
  { id: "9", round: false, x: 450, y: 350, w: 90, h: 90, seats: 2 },
  { id: "10", round: true, x: 600, y: 345, w: 100, h: 100, seats: 4 },
  { id: "11", round: false, x: 760, y: 350, w: 150, h: 90, seats: 6 },
  { id: "12", round: true, x: 940, y: 350, w: 80, h: 80, seats: 2 },
]

/** The example evening — fixed facts; names and notes come from the dictionary. */
const SEED: Omit<Booking, "name" | "note">[] = [
  { id: "b1", time: "19:00", party: 6, table: "3", phone: "+351 913 220 418", status: "seated" },
  { id: "b2", time: "19:00", party: 2, table: "8", phone: "+351 926 114 902", status: "seated" },
  { id: "b3", time: "19:30", party: 2, table: "9", phone: "+33 6 12 48 90 31", status: "seated" },
  { id: "b4", time: "19:30", party: 4, table: "10", phone: "+351 912 870 233", status: "arrived" },
  { id: "b5", time: "20:00", party: 3, table: "5", phone: "+351 934 551 760", status: null },
  { id: "b6", time: "20:30", party: 5, table: "11", phone: "+351 917 003 845", status: null },
  { id: "b7", time: "20:30", party: 2, table: null, phone: "+351 961 402 377", status: null },
]

/** [fill, stroke, text] per table state — the dashboard's own palette. */
const COL: Record<TableState | "no_show", [string, string, string]> = {
  free: ["#FFFFFF", "#B8AB8D", "#1A1208"],
  reserved: ["#FDF6EC", "#C9954A", "#1A1208"],
  arrived: ["#C9954A", "#C9954A", "#1A1208"],
  seated: ["#4A7C4E", "#4A7C4E", "#FFFFFF"],
  no_show: ["#7C3A3A", "#7C3A3A", "#FFFFFF"],
}

const STATUS_BTN: Record<Exclude<Status, null>, string> = {
  arrived: "bg-brass border-brass text-espresso",
  seated: "bg-[#4A7C4E] border-[#4A7C4E] text-cream",
  no_show: "bg-[#7C3A3A] border-[#7C3A3A] text-cream",
}

const fill = (template: string, values: Record<string, string | number>) =>
  template.replace(/\{(\w+)\}/g, (_, key) => String(values[key] ?? ""))

/**
 * A working, client-side replica of the booking widget and the dashboard:
 * the visitor books a table as a guest, then handles that booking as the
 * team — day view, then floor map. Fictional restaurant and guests, nothing
 * is sent anywhere. Initial state is constant so server and client agree.
 */
export function InteractiveTour({ dict }: { dict: Tour }) {
  const topRef = useRef<HTMLDivElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const [step, setStep] = useState(0)
  const [bookings, setBookings] = useState<Booking[]>(() =>
    SEED.map((b, i) => ({ ...b, name: dict.guests[i]?.name ?? "", note: dict.guests[i]?.note ?? "" })),
  )
  const [widget, setWidget] = useState({
    day: dict.widget.days[0],
    party: 4,
    time: "20:00",
    name: dict.widget.defaultName,
    phone: dict.widget.defaultPhone,
    done: false,
  })
  const [confirmed, setConfirmed] = useState<{ name: string; party: number; day: string; time: string } | null>(null)
  const [newId, setNewId] = useState<string | null>(null)
  const [walkN, setWalkN] = useState(2)
  const [picking, setPicking] = useState<string | null>(null) // booking id or "walk"

  const guestsWord = (n: number) => (n === 1 ? dict.widget.guestOne : dict.widget.guestMany)
  const coversAt = (time: string) =>
    bookings.filter((b) => b.time === time && b.status !== "no_show").reduce((sum, b) => sum + b.party, 0)
  const tableState = (id: string): { st: TableState; b: Booking | null } => {
    const b = bookings.find((x) => x.table === id && x.status !== "no_show")
    if (!b) return { st: "free", b: null }
    return { st: (b.status as TableState | null) ?? "reserved", b }
  }

  /*
   * One screen, whatever the language or the state of the demo: the CSS steps
   * in globals.css scale the stage by viewport height; this shrinks it a
   * little further when the content is still taller than the room left under
   * the heading (German labels wrap, a confirmed booking adds e-mails).
   */
  useLayoutEffect(() => {
    const fitStage = () => {
      const stage = stageRef.current
      const top = topRef.current
      const cell = stage?.parentElement
      if (!stage || !top || !cell) return
      stage.style.zoom = ""
      if (!window.matchMedia("(min-width: 768px)").matches) return
      const room = window.innerHeight - 96 - (cell.getBoundingClientRect().top - top.getBoundingClientRect().top)
      let zoom = Number.parseFloat(getComputedStyle(stage).zoom) || 1
      for (let i = 0; i < 6; i++) {
        const height = cell.getBoundingClientRect().height
        if (height <= room || zoom <= 0.5) break
        zoom = Math.max(0.5, zoom * (room / height) * 0.98)
        stage.style.zoom = String(zoom)
      }
    }
    fitStage()
    window.addEventListener("resize", fitStage)
    return () => window.removeEventListener("resize", fitStage)
  }, [step, bookings, confirmed, picking, widget.done])

  const go = (next: number) => {
    setStep(next)
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  /* ---------- widget ---------- */
  const isDemoDay = widget.day === dict.widget.days[0]
  const freeSlots = SLOTS.filter((t) => !isDemoDay || coversAt(t) + widget.party <= CAP)
  const chosenTime = freeSlots.includes(widget.time) ? widget.time : (freeSlots[0] ?? "")

  const confirmBooking = () => {
    const name = widget.name.trim() || dict.widget.defaultName
    if (isDemoDay && chosenTime) {
      const id = `n${Date.now()}`
      setBookings((prev) => [
        ...prev.filter((b) => b.id !== newId),
        { id, time: chosenTime, name, party: widget.party, table: null, phone: widget.phone, note: dict.onlineNote, status: null },
      ])
      setNewId(id)
    }
    setConfirmed({ name, party: widget.party, day: widget.day, time: chosenTime })
    setWidget((w) => ({ ...w, name, time: chosenTime, done: true }))
  }

  /* ---------- day view & map ---------- */
  const setStatus = (id: string, status: Exclude<Status, null>) =>
    setBookings((prev) => prev.map((b) => (b.id === id ? { ...b, status: b.status === status ? null : status } : b)))

  const clickTable = (id: string) => {
    if (!picking || tableState(id).st !== "free") return
    if (picking === "walk") {
      setBookings((prev) => [
        ...prev,
        { id: `w${Date.now()}`, time: "20:00", name: dict.dash.walkInName, party: walkN, table: id, phone: dict.dash.seatedAt, note: "", status: "seated" },
      ])
    } else {
      setBookings((prev) => prev.map((b) => (b.id === picking ? { ...b, table: id } : b)))
    }
    setPicking(null)
  }

  const active = bookings.filter((b) => b.status !== "no_show")
  const usedSlots = SLOTS.filter((t) => bookings.some((b) => b.time === t))
  const current = dict.steps[step]
  const first = confirmed?.name.split(" ")[0] ?? ""

  return (
    <div ref={topRef} className="scroll-mt-20">
      {/* Compact heading with the step pills on its first row, so the whole tour fits one laptop screen. */}
      <div className="reveal">
        <div className="flex flex-wrap items-center justify-between gap-x-10 gap-y-3">
          <p className="eyebrow">{dict.eyebrow}</p>

          {/* Step pills */}
          <nav className="flex flex-wrap gap-2" aria-label={dict.eyebrow}>
            {dict.steps.map((s, i) => (
              <button
                key={s.label}
                type="button"
                onClick={() => go(i)}
                aria-current={i === step ? "step" : undefined}
                className={`flex min-h-10 items-center gap-2.5 rounded-full px-4 py-2 font-mono text-xs uppercase tracking-[0.1em] transition-colors ${
                  i === step ? "bg-espresso text-cream" : "text-foreground/70 hover:bg-surface hover:text-heading"
                }`}
              >
                <span
                  className={`grid h-5 w-5 place-items-center rounded-full text-[11px] font-bold ${
                    i === step ? "bg-brass text-espresso" : "bg-surface text-muted-foreground"
                  }`}
                >
                  {i + 1}
                </span>
                {s.label}
              </button>
            ))}
          </nav>
        </div>
        <h2 className="mt-2 font-serif text-h2 font-medium text-heading text-balance">{dict.headline}</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{dict.sub}</p>
      </div>

      <div className="mt-6 grid items-start gap-10 md:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:gap-12">
        {/* Narration */}
        <div className="md:sticky md:top-28">
          <p className="eyebrow">{current.eyebrow}</p>
          <h3 className="mt-3 font-serif text-h2 font-medium text-heading text-balance lg:text-h3">{current.headline}</h3>
          <p className="mt-3 text-[0.9375rem] leading-relaxed text-foreground/80">{current.body1}</p>
          <p className="mt-3 text-[0.9375rem] leading-relaxed text-foreground/80">{current.body2}</p>
          <div className="mt-5 border-l-2 border-brass pl-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-brass">{current.tryLabel}</p>
            <p className="mt-1 text-sm leading-relaxed text-heading">{current.tryText}</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {step > 0 && (
              <button type="button" onClick={() => go(step - 1)} className="btn btn-outline !px-5 !py-3">
                ← {dict.back}
              </button>
            )}
            {step < dict.steps.length - 1 ? (
              <button type="button" onClick={() => go(step + 1)} className="btn btn-primary !px-5 !py-3">
                {dict.next[step]} →
              </button>
            ) : (
              <button type="button" onClick={() => go(0)} className="btn btn-primary !px-5 !py-3">
                {dict.restart}
              </button>
            )}
          </div>
        </div>

        {/* Stage — scaled down on shorter screens: `.tour-stage` steps in globals.css, refined by `fitStage` */}
        <div className="min-w-0">
          <div ref={stageRef} className="tour-stage" key={step}>
            {step === 0 && (
              <div className="grid gap-6 md:grid-cols-2 md:items-start">
                {/* Phone with the guest site + widget */}
                <div className="mx-auto w-full max-w-[380px] rounded-[40px] bg-espresso p-[11px] shadow-[var(--shadow-card)]">
                  <div className="overflow-hidden rounded-[30px] bg-[#FAF7EE]">
                    <div className="flex h-[150px] flex-col justify-end md:h-[104px] bg-[linear-gradient(180deg,rgba(26,18,8,.05),rgba(26,18,8,.82)),radial-gradient(120px_90px_at_70%_30%,rgba(255,190,110,.65),transparent_70%),linear-gradient(135deg,#6B3A1F,#2C1A0C)] px-[18px] py-4 text-cream">
                      <p className="font-serif text-[26px] leading-none">{dict.restaurant}</p>
                      <p className="mt-1.5 text-xs opacity-85">{dict.restaurantSub}</p>
                    </div>
                    <div className="m-3.5 rounded-[14px] border border-border bg-white p-4" aria-live="polite">
                      {widget.done && confirmed ? (
                        <div className="px-2 py-7 text-center">
                          <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#4A7C4E] text-white motion-safe:animate-in motion-safe:zoom-in-50 motion-safe:duration-500">
                            <Check className="h-8 w-8" strokeWidth={3} />
                          </span>
                          <p className="mt-3.5 font-serif text-[21px] text-heading">{dict.widget.confirmed}</p>
                          <p className="mt-1 text-sm tabular-nums text-muted-foreground">
                            {dict.widget.tableFor} {confirmed.party} · {confirmed.day} · {confirmed.time}
                          </p>
                          <button
                            type="button"
                            onClick={() => setWidget((w) => ({ ...w, done: false }))}
                            className="mt-3.5 text-sm font-semibold text-primary-deep underline underline-offset-4"
                          >
                            {dict.widget.again}
                          </button>
                        </div>
                      ) : (
                        <>
                          <p className="font-serif text-[21px] text-heading">{dict.widget.title}</p>
                          <WidgetLabel id="tour-day">{dict.widget.date}</WidgetLabel>
                          <div className="grid grid-cols-3 gap-1.5" role="group" aria-labelledby="tour-day">
                            {dict.widget.days.map((d) => (
                              <Chip key={d} pressed={d === widget.day} onClick={() => setWidget((w) => ({ ...w, day: d }))}>
                                {d}
                              </Chip>
                            ))}
                          </div>
                          <WidgetLabel id="tour-party">{dict.widget.guests}</WidgetLabel>
                          <div className="flex items-center gap-2" role="group" aria-labelledby="tour-party">
                            <Stepper
                              label={dict.widget.fewer}
                              disabled={widget.party <= 1}
                              onClick={() => setWidget((w) => ({ ...w, party: Math.max(1, w.party - 1) }))}
                            >
                              −
                            </Stepper>
                            <span className="min-w-[90px] text-center text-sm font-semibold tabular-nums text-heading">
                              {widget.party} {guestsWord(widget.party)}
                            </span>
                            <Stepper
                              label={dict.widget.more}
                              disabled={widget.party >= 12}
                              onClick={() => setWidget((w) => ({ ...w, party: Math.min(12, w.party + 1) }))}
                            >
                              +
                            </Stepper>
                          </div>
                          <WidgetLabel id="tour-time">{dict.widget.time}</WidgetLabel>
                          <div className="grid grid-cols-3 gap-1.5" role="group" aria-labelledby="tour-time">
                            {freeSlots.length ? (
                              freeSlots.map((t) => (
                                <Chip key={t} pressed={t === chosenTime} onClick={() => setWidget((w) => ({ ...w, time: t }))}>
                                  {t}
                                </Chip>
                              ))
                            ) : (
                              <span className="col-span-3 text-xs text-muted-foreground">{dict.widget.noSlots}</span>
                            )}
                          </div>
                          <label htmlFor="tour-name" className="mb-1.5 mt-2.5 block text-xs font-semibold text-heading/60">
                            {dict.widget.name}
                          </label>
                          <input
                            id="tour-name"
                            value={widget.name}
                            onChange={(e) => setWidget((w) => ({ ...w, name: e.target.value }))}
                            autoComplete="off"
                            className="min-h-[42px] w-full rounded-[10px] border border-border bg-white px-3 py-2.5 text-sm text-heading"
                          />
                          <label htmlFor="tour-phone" className="mb-1.5 mt-2.5 block text-xs font-semibold text-heading/60">
                            {dict.widget.phone}
                          </label>
                          <input
                            id="tour-phone"
                            value={widget.phone}
                            onChange={(e) => setWidget((w) => ({ ...w, phone: e.target.value }))}
                            inputMode="tel"
                            autoComplete="off"
                            className="min-h-[42px] w-full rounded-[10px] border border-border bg-white px-3 py-2.5 text-sm text-heading"
                          />
                          <button
                            type="button"
                            onClick={confirmBooking}
                            disabled={!freeSlots.length}
                            className="mt-3.5 min-h-[46px] w-full rounded-[10px] bg-primary-deep py-3 text-[15px] font-bold text-white transition-colors hover:bg-primary-deeper disabled:opacity-50"
                          >
                            {dict.widget.book}
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* The two emails */}
                <div className="grid gap-3.5" aria-live="polite">
                  {confirmed ? (
                    <>
                      <Mail
                        to={`${dict.mails.to} ${confirmed.name}`}
                        meta={dict.mails.now}
                        subject={dict.mails.guestSubject}
                        body={fill(dict.mails.guestBody, { first })}
                        detail={`${confirmed.day} ${dict.mails.at} ${confirmed.time} · ${confirmed.party} ${guestsWord(confirmed.party)}`}
                        foot={dict.mails.cancelLine}
                      />
                      <Mail
                        to={`${dict.mails.to} ${dict.restaurant}`}
                        meta={dict.mails.newTag}
                        tag
                        subject={dict.mails.ownerSubject}
                        body={dict.mails.ownerBody}
                        detail={`${confirmed.name} · ${confirmed.party} ${guestsWord(confirmed.party)} · ${confirmed.day} ${dict.mails.at} ${confirmed.time}`}
                        foot={dict.mails.ownerManage}
                        delay
                      />
                      {confirmed.day !== dict.widget.days[0] && (
                        <p className="rounded-2xl border-[1.5px] border-dashed border-border p-5 text-sm leading-relaxed text-muted-foreground">
                          {dict.mails.otherDay}
                        </p>
                      )}
                    </>
                  ) : (
                    <p className="rounded-2xl border-[1.5px] border-dashed border-border p-5 text-sm leading-relaxed text-muted-foreground">
                      {dict.mails.empty}
                    </p>
                  )}
                </div>
              </div>
            )}

            {step === 1 && (
              <Frame url={dict.url}>
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3">
                  <Brand name={dict.restaurant} />
                  <AppNav items={dict.dash.nav} active={0} />
                </div>
                <div className="p-4 md:p-5">
                  <h4 className="font-serif text-[24px] leading-tight text-heading">
                    {dict.dash.dayTitle}
                    <span className="ml-2.5 inline-block rounded-full bg-brass/20 px-2.5 py-1 align-middle font-mono text-[11px] font-bold uppercase tracking-wider text-primary-deep">
                      {dict.dash.today}
                    </span>
                  </h4>
                  <p className="mt-1 text-sm tabular-nums text-muted-foreground">
                    {bookings.length} {dict.dash.bookings} · {active.reduce((s, b) => s + b.party, 0)} {dict.dash.guests}
                  </p>
                  <div className="mt-4 grid gap-3.5 lg:grid-cols-2">
                    {usedSlots.map((t) => {
                      const c = coversAt(t)
                      const pct = Math.min(100, Math.round((c / CAP) * 100))
                      const color = pct >= 100 ? "#7C3A3A" : pct >= 75 ? "#8C4225" : "#C9954A"
                      return (
                        <section key={t} className="overflow-hidden rounded-2xl border border-border bg-white">
                          <header className="border-b border-border bg-surface/50 px-4 py-2.5">
                            <div className="flex items-baseline justify-between">
                              <b className="font-serif text-lg font-medium text-heading">{t}</b>
                              <span className="text-xs tabular-nums text-muted-foreground">
                                {c}/{CAP} {dict.dash.guests}
                              </span>
                            </div>
                            <div
                              className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-border/60"
                              role="progressbar"
                              aria-valuenow={c}
                              aria-valuemin={0}
                              aria-valuemax={CAP}
                              aria-label={`${t}: ${c}/${CAP}`}
                            >
                              <i className="block h-full rounded-full transition-[width] duration-500" style={{ width: `${pct}%`, background: color }} />
                            </div>
                          </header>
                          {bookings
                            .filter((b) => b.time === t)
                            .map((b) => (
                              <div
                                key={b.id}
                                className={`flex flex-wrap items-center justify-between gap-2.5 border-t border-border/60 px-4 py-2.5 first-of-type:border-t-0 ${
                                  b.id === newId ? "bg-brass/15" : ""
                                }`}
                              >
                                <div className="min-w-0 text-sm">
                                  <b className="font-semibold text-heading">{b.name}</b>
                                  <em className="ml-1 not-italic text-heading/50">× {b.party}</em>
                                  {b.table && (
                                    <span className="ml-1.5 rounded-md bg-surface px-1.5 py-px text-[11px] font-bold text-heading/70">
                                      {dict.dash.table} {b.table}
                                    </span>
                                  )}
                                  <small className="mt-0.5 block text-xs text-heading/50">
                                    {b.phone}
                                    {b.note ? ` · ${b.note}` : ""}
                                  </small>
                                </div>
                                <div className="flex gap-1.5">
                                  {(["arrived", "seated", "no_show"] as const).map((s) => (
                                    <button
                                      key={s}
                                      type="button"
                                      onClick={() => setStatus(b.id, s)}
                                      aria-pressed={b.status === s}
                                      className={`min-h-[34px] rounded-full border px-2.5 py-1.5 text-xs font-semibold transition-colors ${
                                        b.status === s ? STATUS_BTN[s] : "border-border bg-white text-heading/55 hover:border-brass hover:text-heading"
                                      }`}
                                    >
                                      {s === "arrived" ? dict.dash.arrived : s === "seated" ? dict.dash.seated : dict.dash.noShow}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            ))}
                        </section>
                      )
                    })}
                  </div>
                </div>
              </Frame>
            )}

            {step === 2 && (
              <Frame url={dict.url}>
                <div className="grid gap-4 p-4 md:p-5 xl:grid-cols-[minmax(0,250px)_minmax(0,1fr)]">
                  <div className="grid content-start gap-3">
                    <div className="rounded-2xl border border-border bg-white p-4">
                      <p className="font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-heading/50">{dict.dash.walkIn}</p>
                      <div className="mt-2.5 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <Stepper label={dict.widget.fewer} disabled={walkN <= 1} onClick={() => setWalkN((n) => Math.max(1, n - 1))}>
                            −
                          </Stepper>
                          <b className="w-6 text-center text-sm tabular-nums text-heading">{walkN}</b>
                          <Stepper label={dict.widget.more} disabled={walkN >= 12} onClick={() => setWalkN((n) => Math.min(12, n + 1))}>
                            +
                          </Stepper>
                        </div>
                        <button
                          type="button"
                          onClick={() => setPicking("walk")}
                          className="min-h-10 rounded-[10px] bg-[#4A7C4E] px-3.5 py-2.5 text-[13px] font-bold text-cream"
                        >
                          {dict.dash.seatGuests}
                        </button>
                      </div>
                    </div>
                    <div className="overflow-hidden rounded-2xl border border-border bg-white">
                      <div className="flex items-baseline justify-between border-b border-border bg-surface/50 px-4 py-2">
                        <b className="font-serif font-medium text-heading">{dict.dash.tonight}</b>
                        <span className="text-xs text-heading/50">
                          {active.length} {dict.dash.bookings}
                        </span>
                      </div>
                      {active.map((b) => {
                        const st: TableState | null = b.table ? ((b.status as TableState | null) ?? "reserved") : null
                        return (
                          <button
                            key={b.id}
                            type="button"
                            onClick={() => {
                              if (b.table) return
                              setPicking((p) => (p === b.id ? null : b.id))
                            }}
                            className={`flex w-full items-center gap-2 border-t border-border/50 px-4 py-2.5 text-left first-of-type:border-t-0 hover:bg-surface/40 ${
                              picking === b.id ? "bg-brass/20" : ""
                            } ${b.table ? "cursor-default" : ""}`}
                          >
                            <i
                              className="h-3 w-3 shrink-0 rounded-full border-[2.5px]"
                              style={
                                st
                                  ? { borderColor: COL[st][1], background: COL[st][0] }
                                  : { borderColor: "#8C4225", background: "#fff", borderStyle: "dashed" }
                              }
                            />
                            <span className="min-w-0 flex-1 text-sm">
                              <b className="font-semibold text-heading">{b.name}</b>
                              <em className="ml-1 not-italic text-heading/50">× {b.party}</em>
                              <small className={`mt-0.5 block text-xs ${b.table ? "text-heading/50" : "font-semibold text-primary-deep"}`}>
                                {b.time} · {b.table ? `${dict.dash.table} ${b.table}` : dict.dash.noTable}
                              </small>
                            </span>
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-2.5">
                      <AppNav items={dict.dash.zones} active={0} />
                      <span className="flex items-center gap-2 rounded-xl bg-espresso px-3.5 py-1.5 font-serif font-bold tabular-nums text-cream">
                        <Clock className="h-4 w-4 text-brass" aria-hidden />
                        20:00
                      </span>
                    </div>
                    <ul className="my-2.5 flex flex-wrap gap-3 text-xs text-heading/65">
                      {(["free", "reserved", "arrived", "seated", "no_show"] as const).map((s, i) => (
                        <li key={s} className="flex items-center gap-1.5">
                          <i className="h-3 w-3 rounded-full border-[2.5px]" style={{ borderColor: COL[s][1], background: COL[s][0] }} />
                          {dict.dash.legend[i]}
                        </li>
                      ))}
                    </ul>
                    {picking && (
                      <div className="mb-2.5 flex items-center justify-between gap-2.5 rounded-xl border border-brass bg-brass/10 px-3.5 py-2.5 text-sm text-heading">
                        <span>
                          {picking === "walk"
                            ? fill(dict.dash.hintWalk, { n: walkN, guests: guestsWord(walkN) })
                            : dict.dash.hintBooking}
                        </span>
                        <button
                          type="button"
                          onClick={() => setPicking(null)}
                          className="shrink-0 text-sm font-semibold text-primary-deep underline underline-offset-4"
                        >
                          {dict.dash.cancel}
                        </button>
                      </div>
                    )}
                    <div className="overflow-x-auto rounded-[14px] border border-border bg-white p-2">
                      <svg viewBox="0 0 1040 520" role="group" aria-label={dict.dash.mapLabel} className="block h-auto w-full min-w-[440px]">
                        <rect width="1040" height="520" rx="14" fill="#FAF7EE" />
                        <rect width="1040" height="10" rx="3" fill="#D6CBB2" />
                        <rect width="10" height="520" rx="3" fill="#D6CBB2" />
                        <rect x="1030" width="10" height="520" rx="3" fill="#D6CBB2" />
                        <rect y="510" width="820" height="10" rx="3" fill="#D6CBB2" />
                        <rect x="830" y="508" width="140" height="12" rx="4" fill="#C9954A" />
                        <g transform="translate(40,40)">
                          <rect width="420" height="70" rx="10" fill="#EDE8DC" stroke="#C9954A" strokeWidth="2" />
                          <text x="210" y="42" textAnchor="middle" fontSize="18" fill="#6B5F4B" fontWeight="600" letterSpacing="2">
                            {dict.dash.bar}
                          </text>
                        </g>
                        <g transform="translate(960,30)">
                          <circle cx="25" cy="25" r="25" fill="#4A7C4E" opacity=".25" />
                          <circle cx="25" cy="25" r="12" fill="#4A7C4E" opacity=".6" />
                        </g>
                        <text x="560" y="480" textAnchor="middle" fontSize="16" fill="#8A7F6A" fontWeight="600" letterSpacing="1">
                          {dict.dash.room}
                        </text>
                        {TABLES.map((t) => {
                          const { st, b } = tableState(t.id)
                          const [f, s, tx] = COL[st]
                          const pickable = picking && st === "free"
                          const sub = b
                            ? b.name.length > 13
                              ? `${b.name.split(" ")[0]} ${(b.name.split(" ")[1] ?? "").slice(0, 1)}.`
                              : b.name
                            : `${t.seats} ${dict.dash.seats}`
                          const label = `${dict.dash.table} ${t.id}, ${b ? `${b.name}, ` : ""}${dict.dash.legend[["free", "reserved", "arrived", "seated"].indexOf(st)]}`
                          return (
                            <g
                              key={t.id}
                              transform={`translate(${t.x},${t.y})`}
                              role="button"
                              tabIndex={0}
                              aria-label={label}
                              onClick={() => clickTable(t.id)}
                              onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                  e.preventDefault()
                                  clickTable(t.id)
                                }
                              }}
                              className={`outline-none ${pickable ? "cursor-pointer" : picking ? "cursor-not-allowed" : ""}`}
                            >
                              {t.round ? (
                                <circle
                                  cx={t.w / 2}
                                  cy={t.h / 2}
                                  r={t.w / 2}
                                  fill={f}
                                  stroke={pickable ? "#C9954A" : s}
                                  strokeWidth={pickable ? 4 : 2.5}
                                  className="transition-[fill,stroke] duration-300"
                                />
                              ) : (
                                <rect
                                  width={t.w}
                                  height={t.h}
                                  rx="12"
                                  fill={f}
                                  stroke={pickable ? "#C9954A" : s}
                                  strokeWidth={pickable ? 4 : 2.5}
                                  className="transition-[fill,stroke] duration-300"
                                />
                              )}
                              <text x={t.w / 2} y={t.h / 2 - 2} textAnchor="middle" fontSize="20" fontWeight="700" fill={tx}>
                                {t.id}
                              </text>
                              <text x={t.w / 2} y={t.h / 2 + 18} textAnchor="middle" fontSize="12" fill={b ? tx : "#8A7F6A"} opacity=".9">
                                {sub}
                              </text>
                            </g>
                          )
                        })}
                      </svg>
                    </div>
                  </div>
                </div>
              </Frame>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ---------- small pieces ---------- */

function WidgetLabel({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <span id={id} className="mb-1.5 mt-2.5 block text-xs font-semibold text-heading/60">
      {children}
    </span>
  )
}

function Chip({ pressed, onClick, children }: { pressed: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={pressed}
      className={`min-h-10 rounded-[10px] border px-1 py-2 text-[13px] font-semibold tabular-nums transition-colors ${
        pressed ? "border-primary-deep bg-primary-deep text-white" : "border-border bg-white text-heading hover:border-primary-deep"
      }`}
    >
      {children}
    </button>
  )
}

function Stepper({
  label,
  disabled,
  onClick,
  children,
}: {
  label: string
  disabled: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="h-10 w-10 rounded-[10px] border border-border bg-white text-lg text-muted-foreground disabled:cursor-default disabled:opacity-40"
    >
      {children}
    </button>
  )
}

function Mail({
  to,
  meta,
  tag,
  subject,
  body,
  detail,
  foot,
  delay,
}: {
  to: string
  meta: string
  tag?: boolean
  subject: string
  body: string
  detail: string
  foot: string
  delay?: boolean
}) {
  return (
    <article
      className="rounded-2xl border border-border bg-white px-5 py-4 shadow-[0_1px_3px_rgba(26,18,8,.06),0_4px_12px_rgba(26,18,8,.05)] motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-3 motion-safe:duration-500 motion-safe:fill-mode-both"
      style={delay ? ({ animationDelay: "350ms" } as CSSProperties) : undefined}
    >
      <div className="flex justify-between gap-2 text-xs text-muted-foreground">
        <span>{to}</span>
        {tag ? (
          <span className="rounded-full bg-brass px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-espresso">{meta}</span>
        ) : (
          <span>{meta}</span>
        )}
      </div>
      <p className="mt-2 font-serif text-[21px] text-heading">{subject}</p>
      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
      <span className="mt-2.5 inline-block rounded-lg bg-background px-2.5 py-1.5 text-[13px] font-semibold tabular-nums text-heading">{detail}</span>
      <p className="mt-2.5 text-xs text-primary-deep">{foot}</p>
    </article>
  )
}

function Frame({ url, children }: { url: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-[22px] border border-border bg-[#FAF7EE] shadow-[var(--shadow-card)]">
      <div className="flex h-10 items-center gap-[7px] border-b border-border bg-surface px-3.5">
        <i className="inline-block h-[11px] w-[11px] rounded-full bg-border" />
        <i className="inline-block h-[11px] w-[11px] rounded-full bg-border" />
        <i className="inline-block h-[11px] w-[11px] rounded-full bg-border" />
        <span className="ml-3 truncate rounded-lg bg-background px-3 py-1 text-xs text-muted-foreground">{url}</span>
      </div>
      {children}
    </div>
  )
}

function Brand({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded-[11px] bg-espresso font-serif text-cream">{name.charAt(0)}</span>
      <span>
        <b className="block font-serif text-[17px] font-medium leading-tight text-heading">{name}</b>
        <small className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-brass">TableFront</small>
      </span>
    </div>
  )
}

function AppNav({ items, active }: { items: string[]; active: number }) {
  return (
    <div className="flex flex-wrap gap-0.5" aria-hidden>
      {items.map((item, i) => (
        <span
          key={item}
          className={`rounded-full px-3 py-1.5 text-[13px] ${i === active ? "bg-espresso text-cream" : "text-heading/60"}`}
        >
          {item}
        </span>
      ))}
    </div>
  )
}
