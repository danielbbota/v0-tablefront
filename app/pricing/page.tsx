"use client";

import { useState } from "react";
import Link from "next/link";

const CHECK = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: "2px" }}>
    <circle cx="8" cy="8" r="8" fill="#C9954A" fillOpacity="0.15"/>
    <path d="M4.5 8.5L6.5 10.5L11.5 5.5" stroke="#C9954A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const X_ICON = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: "2px" }}>
    <circle cx="8" cy="8" r="8" fill="#ffffff" fillOpacity="0.5"/>
    <path d="M5.5 5.5L10.5 10.5M10.5 5.5L5.5 10.5" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const INFO = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{flexShrink:0, marginTop:"1px"}}>
    <circle cx="7" cy="7" r="6.5" stroke="#C9954A" strokeOpacity="0.4"/>
    <path d="M7 6.5V9.5M7 4.5V5" stroke="#C9954A" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

const SCOPE_RULES = [
  {
    icon: "✅",
    label: "Always included in monthly plans",
    items: [
      "6-month plan: 1 menu & content update included per contract period",
      "12-month plan: 2 menu & content updates included per contract period",
      "Opening hours and contact details edits",
      "Small text or description edits",
    ],
  },
  {
    icon: "⚠️",
    label: "Limited — visual menu subscribers only",
    items: [
      "Full menu redesign or restructure counts as 1 full update",
      "Adding entirely new menu sections or categories counts as 1 full update",
      "Full photo reshoots requiring bulk image work counted as 1 full update",
    ],
  },
  {
    icon: "🚫",
    label: "Never included — quoted separately",
    items: [
      "New pages beyond original scope",
      "E-commerce, online ordering or loyalty systems",
      "Custom illustrations or photography shoots",
      "POS or accounting software integrations",
      "Social media or Google Ads management",
      "Print menus, signage or brand materials",
    ],
  },
];

const PLANS = [
  {
    id: "onetime",
    label: "One-Time Build",
    badge: null,
    priceDisplay: "1,500",
    priceSub: "one-time · starting price",
    commitment: "No monthly fees. You own the site.",
    highlight: false,
    note: "Base build includes a clean PDF menu guests can open and download — simple, fast, professional. Full visual menu available as add-on (+CHF 500).",
    features: [
      { text: "Custom mobile-first design", included: true },
      { text: "PDF menu (open & download)", included: true },
      { text: "Reservation system integration", included: true },
      { text: "Google Maps, hours & WhatsApp click-to-call", included: true },
      { text: "Local SEO setup", included: true },
      { text: "Basic analytics dashboard", included: true },
      { text: "30 days post-launch support", included: true },
      { text: "Training & handover session", included: true },
      { text: "Monthly menu & content updates", included: false },
      { text: "Ongoing maintenance & fixes", included: false },
    ],
  },
  {
    id: "sub6",
    label: "Monthly — 6 Months",
    badge: null,
    priceDisplay: "149",
    priceSub: "per month · starting price",
    commitment: "6-month commitment. Cancel after.",
    highlight: false,
    note: "Base includes PDF menu. Add full visual menu integration for +CHF 500 build fee and +CHF 60/mo for updates. Includes 1 menu & content update per contract period.",
    features: [
      { text: "Custom mobile-first design", included: true },
      { text: "PDF menu (open & download)", included: true },
      { text: "Reservation system integration", included: true },
      { text: "Google Maps, hours & WhatsApp click-to-call", included: true },
      { text: "Local SEO setup", included: true },
      { text: "Basic analytics dashboard", included: true },
      { text: "30 days post-launch support", included: true },
      { text: "Training & handover session", included: true },
      { text: "1 menu & content update included", included: true, note: "Per contract period" },
      { text: "Ongoing maintenance & fixes", included: true },
    ],
  },
  {
    id: "sub12",
    label: "Monthly — 12 Months",
    badge: "BEST VALUE",
    priceDisplay: "149",
    priceSub: "per month · starting price",
    commitment: "1 month free — effective ~8% saving.",
    highlight: true,
    note: "Base includes PDF menu. Add full visual menu integration for +CHF 500 build fee and +CHF 60/mo for updates. Includes 2 menu & content updates per contract period.",
    features: [
      { text: "Custom mobile-first design", included: true },
      { text: "PDF menu (open & download)", included: true },
      { text: "Reservation system integration", included: true },
      { text: "Google Maps, hours & WhatsApp click-to-call", included: true },
      { text: "Local SEO setup", included: true },
      { text: "Basic analytics dashboard", included: true },
      { text: "30 days post-launch support", included: true },
      { text: "Training & handover session", included: true },
      { text: "2 menu & content updates included", included: true, note: "Per contract period" },
      { text: "Ongoing maintenance & fixes", included: true },
    ],
    extra: "12 months billed monthly + 1 month free",
  },
];

const ADDONS = [
  {
    id: "menu_visual",
    icon: "🍽️",
    label: "Full Visual Menu Integration",
    price: "+CHF 500",
    priceSub: "one-time build fee",
    desc: "Every dish and drink built directly into the site — photos, descriptions, allergens, and prices. Guests browse your menu like a magazine, no PDF needed.",
    scopeNote: "Subscription clients: +CHF 60/mo covers monthly updates (price changes, seasonal swaps, photo replacements). Full menu restructures limited to 2× per year.",
    tag: null,
    fixed: 500,
  },
  {
    id: "speed",
    icon: "⚡",
    label: "48-Hour Emergency Launch",
    price: "+CHF 800",
    priceSub: null,
    desc: "Reopening after renovation or lost your site? We go live in 48 hours so your reputation doesn't take a hit.",
    scopeNote: null,
    tag: null,
    fixed: 800,
  },
  {
    id: "guarantee",
    icon: "🛡",
    label: "30-Day Money-Back Guarantee",
    price: "+CHF 600",
    priceSub: null,
    desc: "Not happy within 30 days? Full refund. We're confident enough in the work to carry the risk.",
    scopeNote: null,
    tag: null,
    fixed: 600,
  },
  {
    id: "updates_monthly",
    icon: "✏️",
    label: "Monthly Update Service",
    price: "+CHF 79/mo",
    priceSub: null,
    desc: "Menu changes, specials, photos, hours — handled fast, no login needed. Best for owners who update content regularly throughout the year.",
    scopeNote: "Covers: price edits, seasonal swaps, photo replacements, PDF menu swaps. Full menu restructures: max 2× per year.",
    tag: "One-time plan only",
    fixed: 79,
    isMonthly: true,
  },
  {
    id: "updates_ondemand",
    icon: "🖊️",
    label: "Per-Update (Pay as You Go)",
    price: "From CHF 80",
    priceSub: null,
    desc: "Need an extra update beyond your included allowance, or on a one-time plan? Pay per update based on scope. No monthly commitment.",
    scopeNote: "Final price confirmed before each update based on what needs changing.",
    tag: null,
    fixed: null,
  },
  {
    id: "support60",
    icon: "📞",
    label: "60-Day Post-Launch Support",
    price: "+CHF 400",
    priceSub: null,
    desc: "Dedicated support and weekly check-in calls for 60 days after launch. Zero surprises, zero stress.",
    scopeNote: null,
    tag: null,
    fixed: 400,
  },
  {
    id: "reports",
    icon: "📊",
    label: "3-Month Performance Reports",
    price: "+CHF 350",
    priceSub: null,
    desc: "Monthly report showing visitor numbers, top pages, and reservation conversion — so you can see the results in real numbers.",
    scopeNote: null,
    tag: null,
    fixed: 350,
  },
];

const INCLUDED_ALL = [
  "Custom mobile-first design",
  "7-day delivery",
  "Local SEO setup",
  "Reservation system",
  "30-day support",
  "Training & handover",
];

export default function PricingPage() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [scopeOpen, setScopeOpen] = useState(false);

  const toggleAddon = (id) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const isSubscription = selectedPlan === "sub6" || selectedPlan === "sub12";
  const hasVisualMenu = selectedAddons.includes("menu_visual");
  const hasVariableAddon = selectedAddons.includes("updates_ondemand");

  const totalAddons = selectedAddons.reduce((sum, id) => {
    const a = ADDONS.find((x) => x.id === id);
    if (!a || !a.fixed) return sum;
    if (a.isMonthly) return sum;
    return sum + a.fixed;
  }, 0);

  const totalMonthly = selectedAddons.reduce((sum, id) => {
    const a = ADDONS.find((x) => x.id === id);
    if (!a || !a.fixed || !a.isMonthly) return sum;
    return sum + a.fixed;
  }, 0) + (hasVisualMenu && isSubscription ? 60 : 0);

  return (
    <div style={{ background: "#F5EFE0", minHeight: "100vh", padding: "0 0 80px" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Lora:wght@400;500&family=Syne:wght@400;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        /* Navbar Styles */
        .p-nav { 
          position: sticky; 
          top: 0; 
          z-index: 100; 
          background: rgba(26, 18, 8, 0.95); 
          backdrop-filter: blur(4px); 
          border-bottom: 1px solid #3A3228; 
        }
        .p-nav-inner { 
          max-width: 960px; 
          margin: 0 auto; 
          padding: 0 24px; 
          height: 80px; 
          display: flex; 
          align-items: center; 
          justify-content: space-between; 
        }
        .p-nav-back { 
          font-family: 'Syne', sans-serif; 
          font-size: 13px; 
          font-weight: 600; 
          text-transform: uppercase; 
          letter-spacing: 0.08em; 
          color: #EDE8DC; 
          text-decoration: none; 
          display: flex; 
          align-items: center; 
          gap: 6px; 
          transition: color 0.2s; 
        }
        .p-nav-back:hover { 
          color: #C9954A; 
        }
        .p-nav-btn { 
          background: #C9954A; 
          color: #1A1208; 
          font-family: 'Syne', sans-serif; 
          font-size: 13px; 
          font-weight: 700; 
          letter-spacing: 0.08em; 
          text-transform: uppercase; 
          text-decoration: none; 
          padding: 11px 20px; 
          border-radius: 8px; 
          transition: opacity 0.2s; 
        }
        .p-nav-btn:hover { 
          opacity: 0.9; 
        }

        /* Page Content Styles */
        .pw { max-width: 960px; margin: 0 auto; padding: 60px 24px 0; font-family: 'Lora', serif; color: #3a3020; }
        .eyebrow { font-family: 'Syne', sans-serif; font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: #C9954A; margin-bottom: 14px; }
        .hero-title { font-family: 'Playfair Display', serif; font-size: clamp(32px, 5vw, 52px); font-weight: 700; line-height: 1.15; color: #1E1E1E; margin-bottom: 16px; }
        .hero-title span { color: #C9954A; }
        .hero-sub { font-family: 'Lora', serif; font-size: 16px; color: #3a3020; line-height: 1.7; max-width: 580px; margin-bottom: 32px; }
        .strip { display: flex; flex-direction: column; gap: 10px; margin-bottom: 48px; }
        @media (min-width: 768px) { .strip { flex-direction: row; flex-wrap: wrap; gap: 10px 20px; } }
        .strip-item { display: flex; align-items: center; gap: 7px; font-family: 'Syne', sans-serif; font-size: 13px; color: #3a3020; }
        .sec-title { font-family: 'Playfair Display', serif; font-size: clamp(22px, 3vw, 30px); font-weight: 700; color: #1E1E1E; margin-bottom: 8px; }
        .sec-sub { font-family: 'Lora', serif; font-size: 14px; color: #7a6a55; margin-bottom: 28px; line-height: 1.6; }
        .plans-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-bottom: 40px; }
        
        /* Plan Card Standard (Light) Style */
        .plan-card { background: #FFFFFF; border: 1.5px solid #E8E0D0; border-radius: 14px; padding: 28px 24px; cursor: pointer; transition: border-color 0.2s, box-shadow 0.2s; position: relative; color: #1E1E1E; }
        .plan-card:hover { border-color: #C9954A; }
        .plan-card.sel { border-color: #C9954A; box-shadow: 0 0 0 3px rgba(201,149,74,0.08); background: rgba(201,149,74,0.08); }
        
        /* Plan Card Highlight (Selected Theme) Style */
        .plan-card.hl { background: #FFFFFF; color: #1E1E1E; border-color: #C9954A; }
        .plan-card.hl .plan-lbl { color: #B85C38; }
        .plan-card.hl .plan-from { color: #7a6a55; }
        .plan-card.hl .plan-price { color: #1E1E1E; }
        .plan-card.hl .plan-psub { color: #7a6a55; }
        .plan-card.hl .plan-commit { color: #7a6a55; }
        .plan-card.hl .plan-note { color: #7a6a55; }
        .plan-card.hl .feat-row { color: #1E1E1E; }
        .plan-card.hl .feat-row.dim { color: #A8A090; }
        .plan-card.hl .plan-div { border-top-color: #E8E0D0; }
        .plan-card.hl .sel-btn { border-color: #E8E0D0; color: #7a6a55; }
        .plan-card.hl .sel-btn:hover { border-color: #C9954A; color: #C9954A; }
        .plan-card.hl .sel-btn.act { background: #C9954A; border-color: #C9954A; color: #1A1208; }

        .plan-badge { position: absolute; top: -11px; left: 50%; transform: translateX(-50%); background: #C9954A; color: #1A1208; font-family: 'Syne', sans-serif; font-size: 10px; font-weight: 700; letter-spacing: 0.12em; padding: 3px 12px; border-radius: 20px; white-space: nowrap; }
        .plan-lbl { font-family: 'Syne', sans-serif; font-size: 13px; font-weight: 600; color: #C9954A; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 16px; }
        .plan-from { font-family: 'Lora', serif; font-size: 11px; color: #7a6a55; margin-bottom: 2px; }
        .plan-price { font-family: 'Playfair Display', serif; font-size: 42px; font-weight: 700; color: #C9954A; line-height: 1; }
        .plan-cur { font-size: 18px; vertical-align: super; }
        .plan-psub { font-family: 'Lora', serif; font-size: 12px; color: #7a6a55; margin-top: 4px; }
        .plan-commit { font-family: 'Lora', serif; font-size: 13px; color: #3a3020; margin-top: 8px; }
        .plan-extra { font-family: 'Syne', sans-serif; font-size: 12px; color: #C9954A; margin-top: 6px; }
        .plan-note { font-family: 'Lora', serif; font-size: 12px; color: #7a6a55; margin-top: 10px; line-height: 1.5; font-style: italic; }
        .plan-div { border: none; border-top: 1px solid #E8E0D0; margin: 18px 0; }
        .feat-row { display: flex; align-items: flex-start; gap: 9px; margin-bottom: 9px; font-family: 'Lora', serif; font-size: 13.5px; color: #1E1E1E; line-height: 1.4; }
        .feat-row.dim { opacity: 0.4; color: #7a6a55; }
        .feat-note { font-family: 'Lora', serif; font-size: 11px; color: #7a6a55; margin: -6px 0 9px 25px; font-style: italic; }
        
        .sel-btn { margin-top: 20px; width: 100%; padding: 11px; border-radius: 8px; border: 1.5px solid #E8E0D0; background: transparent; color: #7a6a55; font-family: 'Syne', sans-serif; font-size: 13px; cursor: pointer; transition: all 0.2s; }
        .sel-btn:hover { border-color: #C9954A; color: #C9954A; }
        .sel-btn.act { background: #C9954A; border-color: #C9954A; color: #1A1208; font-weight: 700; }
        
        .dot-div { text-align: center; color: #C9954A; font-size: 20px; letter-spacing: 6px; margin: 40px 0; }
        
        .scope-toggle { display: flex; align-items: center; gap: 10px; background: #FFFFFF; border: 1px solid #E8E0D0; border-radius: 10px; padding: 14px 18px; cursor: pointer; margin-bottom: 0; transition: border-color 0.2s; }
        .scope-toggle:hover { border-color: #C9954A; }
        .scope-toggle-label { font-family: 'Lora', serif; font-size: 14px; color: #3a3020; flex: 1; }
        .scope-toggle-arrow { font-size: 11px; color: #C9954A; transition: transform 0.2s; }
        .scope-toggle-arrow.open { transform: rotate(180deg); }
        .scope-body { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px; background: #FFFFFF; border: 1px solid #E8E0D0; border-top: none; border-radius: 0 0 10px 10px; padding: 24px 20px; margin-bottom: 40px; }
        .scope-col-head { display: flex; align-items: center; gap: 8px; font-family: 'Syne', sans-serif; font-size: 12px; font-weight: 600; color: #1E1E1E; margin-bottom: 14px; letter-spacing: 0.04em; }
        .scope-item { display: flex; align-items: flex-start; gap: 8px; margin-bottom: 8px; font-family: 'Lora', serif; font-size: 13px; color: #3a3020; line-height: 1.45; }
        .scope-dot-green { width: 6px; height: 6px; border-radius: 50%; background: #4a7c4e; flex-shrink: 0; margin-top: 5px; }
        .scope-dot-amber { width: 6px; height: 6px; border-radius: 50%; background: #B85C38; flex-shrink: 0; margin-top: 5px; }
        .scope-dot-red { width: 6px; height: 6px; border-radius: 50%; background: #7c3a3a; flex-shrink: 0; margin-top: 5px; }
        
        .addons-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px; margin-bottom: 40px; }
        .addon-card { background: #FFFFFF; border: 1.5px solid #E8E0D0; border-radius: 12px; padding: 18px 18px 16px; cursor: pointer; transition: border-color 0.2s, box-shadow 0.2s; position: relative; }
        .addon-card:hover { border-color: #C9954A; }
        .addon-card.sel { border-color: #C9954A; box-shadow: 0 0 0 3px rgba(201,149,74,0.08); background: rgba(201,149,74,0.08); }
        .addon-chk { position: absolute; top: 14px; right: 14px; width: 20px; height: 20px; border-radius: 50%; border: 1.5px solid #E8E0D0; background: transparent; display: flex; align-items: center; justify-content: center; transition: all 0.2s; }
        .addon-card.sel .addon-chk { background: #C9954A; border-color: #C9954A; }
        .addon-top { display: flex; gap: 12px; align-items: flex-start; }
        .addon-icon { font-size: 22px; flex-shrink: 0; margin-top: 2px; }
        .addon-body { flex: 1; min-width: 0; }
        .addon-hdr { display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; margin-bottom: 6px; }
        .addon-lbl { font-family: 'Syne', sans-serif; font-size: 13.5px; font-weight: 600; color: #1E1E1E; line-height: 1.3; }
        .addon-price-wrap { text-align: right; flex-shrink: 0; padding-right: 32px; }
        .addon-price { font-family: 'Playfair Display', serif; font-size: 15px; font-weight: 700; color: #C9954A; white-space: nowrap; }
        .addon-psub { font-family: 'Lora', serif; font-size: 10px; color: #7a6a55; }
        .addon-desc { font-family: 'Lora', serif; font-size: 13px; color: #3a3020; line-height: 1.55; }
        .addon-sub-badge { margin-top: 8px; font-family: 'Syne', sans-serif; font-size: 11px; color: #C9954A; background: rgba(201,149,74,0.08); border-radius: 6px; padding: 4px 8px; display: inline-block; }
        .addon-tag { margin-top: 8px; font-family: 'Syne', sans-serif; font-size: 11px; color: #3a3020; background: #F5EFE0; border-radius: 6px; padding: 3px 8px; display: inline-block; border: 1px solid #E8E0D0; }
        .addon-scope { display: flex; gap: 7px; align-items: flex-start; margin-top: 10px; padding-top: 10px; border-top: 1px solid #E8E0D0; font-family: 'Lora', serif; font-size: 12px; color: #7a6a55; line-height: 1.5; }
        
        .sum-box { background: #FFFFFF; border: 1.5px solid #E8E0D0; border-radius: 14px; padding: 28px 28px 24px; margin-bottom: 20px; }
        .sum-row { display: flex; justify-content: space-between; align-items: flex-start; gap: 16px; padding: 10px 0; border-bottom: 1px solid #E8E0D0; }
        .sum-lbl { font-family: 'Lora', serif; font-size: 14px; color: #3a3020; }
        .sum-val { font-family: 'Syne', sans-serif; font-size: 14px; color: #1E1E1E; text-align: right; }
        .sum-total { display: flex; justify-content: space-between; align-items: flex-start; gap: 16px; padding-top: 16px; margin-top: 4px; }
        .sum-total-lbl { font-family: 'Playfair Display', serif; font-size: 18px; font-weight: 700; color: #1E1E1E; }
        .sum-total-val { font-family: 'Playfair Display', serif; font-size: 22px; font-weight: 700; color: #C9954A; text-align: right; }
        .sum-var-note { font-size: 11px; color: #C9954A; margin-top: 5px; font-family: 'Lora', serif; }
        .sum-empty { text-align: center; color: #7a6a55; font-size: 14px; padding: 24px 0; font-family: 'Lora', serif; }
        .cta-note { margin-top: 18px; font-size: 12px; color: #7a6a55; text-align: center; line-height: 1.65; font-family: 'Lora', serif; }
      `}</style>

      {/* Simple Navbar */}
      <nav className="p-nav">
        <div className="p-nav-inner">
          <Link href="/" className="p-nav-back">
            ← Back to Home
          </Link>
          <a href="https://calendly.com/daniel-tablesfront/30min" target="_blank" rel="noopener noreferrer" className="p-nav-btn">
            BOOK A FREE CALL
          </a>
        </div>
      </nav>

      <div className="pw">
        <div className="eyebrow">Hospitality Website Packages</div>
        <h1 className="hero-title">A website that works<br /><span>as hard as you do.</span></h1>
        <p className="hero-sub">Built by people who actually worked in hospitality. Every package includes a custom, mobile-first site live in 7 days — protecting your reputation and driving direct reservations.</p>
        <div className="strip">
          {INCLUDED_ALL.map((item, i) => (
            <div className="strip-item" key={i}><CHECK /><span>{item}</span></div>
          ))}
        </div>
        
        <div className="sec-title">Choose your plan</div>
        <div className="sec-sub">All plans start with a clean, professional site with PDF menu. Scope what you need with add-ons below.</div>
        
        <div className="plans-grid">
          {PLANS.map((plan) => (
            <div key={plan.id} className={`plan-card${plan.highlight ? " hl" : ""}${selectedPlan === plan.id ? " sel" : ""}`} onClick={() => setSelectedPlan(selectedPlan === plan.id ? null : plan.id)}>
              {plan.badge && <div className="plan-badge">{plan.badge}</div>}
              <div className="plan-lbl">{plan.label}</div>
              <div className="plan-from">Starting from</div>
              <div className="plan-price"><span className="plan-cur">CHF </span>{plan.priceDisplay}</div>
              <div className="plan-psub">{plan.priceSub}</div>
              <div className="plan-commit">{plan.commitment}</div>
              {plan.extra && <div className="plan-extra">��� {plan.extra}</div>}
              <div className="plan-note">{plan.note}</div>
              <hr className="plan-div" />
              {plan.features.map((f, i) => (
                <div key={i}>
                  <div className={`feat-row${f.included ? "" : " dim"}`}>{f.included ? <CHECK /> : <X_ICON />}<span>{f.text}</span></div>
                  {f.note && <div className="feat-note">↳ {f.note}</div>}
                </div>
              ))}
              <button className={`sel-btn${selectedPlan === plan.id ? " act" : ""}`}>{selectedPlan === plan.id ? "✓ Selected" : "Select this plan"}</button>
            </div>
          ))}
        </div>
        
        <div className="dot-div">· · ·</div>
        
        <div className="sec-title">What's included — and what's not</div>
        <div className="sec-sub">Read this before you sign. Clear scope protects us both.</div>
        <div className="scope-toggle" onClick={() => setScopeOpen(!scopeOpen)}>
          <span style={{ fontSize: "15px" }}>📋</span>
          <span className="scope-toggle-label">View full scope rules — monthly updates, limits & exclusions</span>
          <span className={`scope-toggle-arrow${scopeOpen ? " open" : ""}`}>▼</span>
        </div>
        {scopeOpen && (
          <div className="scope-body">
            {SCOPE_RULES.map((col, ci) => (
              <div className="scope-col" key={ci}>
                <div className="scope-col-head"><span>{col.icon}</span><span>{col.label}</span></div>
                {col.items.map((item, ii) => (
                  <div className="scope-item" key={ii}>
                    <div className={ci === 0 ? "scope-dot-green" : ci === 1 ? "scope-dot-amber" : "scope-dot-red"} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
        
        <div className="sec-title">Upgrade your package</div>
        <div className="sec-sub">Optional add-ons — mix and match based on what matters most.</div>
        
        <div className="addons-grid">
          {ADDONS.map((addon) => {
            const isSel = selectedAddons.includes(addon.id);
            return (
              <div key={addon.id} className={`addon-card${isSel ? " sel" : ""}`} onClick={() => toggleAddon(addon.id)}>
                <div className="addon-chk">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5L4 7L8 3" stroke="#1A1208" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="addon-top">
                  <div className="addon-icon">{addon.icon}</div>
                  <div className="addon-body">
                    <div className="addon-hdr">
                      <div className="addon-lbl">{addon.label}</div>
                      <div className="addon-price-wrap">
                        <div className="addon-price">{addon.price}</div>
                        {addon.priceSub && <div className="addon-psub">{addon.priceSub}</div>}
                      </div>
                    </div>
                    <div className="addon-desc">{addon.desc}</div>
                    {addon.id === "menu_visual" && isSubscription && (<div className="addon-sub-badge">+ CHF 60/mo for updates on subscription</div>)}
                    {addon.tag && <div className="addon-tag">{addon.tag}</div>}
                  </div>
                </div>
                {addon.scopeNote && (<div className="addon-scope"><INFO /><span>{addon.scopeNote}</span></div>)}
              </div>
            );
          })}
        </div>
        
        <div className="dot-div">· · ·</div>
        
        <div className="sec-title">Your Investment</div>
        <div className="sec-sub">Live summary based on your selections above.</div>
        
        <div className="sum-box">
          {!selectedPlan && selectedAddons.length === 0 ? (
            <div className="sum-empty">Select a plan above to see your investment summary.</div>
          ) : (
            <>
              {selectedPlan && (() => {
                const plan = PLANS.find(p => p.id === selectedPlan);
                return (<div className="sum-row"><span className="sum-lbl">{plan.label}</span><span className="sum-val">{selectedPlan === "onetime" ? "From CHF 1,500" : "From CHF 149/mo"}</span></div>);
              })()}
              {selectedAddons.map((id) => {
                const a = ADDONS.find((x) => x.id === id);
                const showSubSurcharge = id === "menu_visual" && isSubscription;
                return (<div className="sum-row" key={id}><span className="sum-lbl">{a.label}{showSubSurcharge ? " (incl. +CHF 60/mo update fee)" : ""}</span><span className="sum-val">{a.price}{showSubSurcharge ? " + CHF 60/mo" : ""}</span></div>);
              })}
              <div className="sum-total">
                <span className="sum-total-lbl">Total</span>
                <div>
                  <div className="sum-total-val">
                    {selectedPlan === "onetime" ? `From CHF ${(1500 + totalAddons).toLocaleString()}` : selectedPlan ? `From CHF ${149 + totalMonthly}/mo${(totalAddons - (hasVisualMenu ? 500 : 0)) > 0 ? ` + CHF ${totalAddons - (hasVisualMenu ? 500 : 0)}` : ""}${hasVisualMenu ? " + CHF 500 build" : ""}` : totalAddons > 0 ? `CHF ${totalAddons}` : "—"}
                  </div>
                  {hasVariableAddon && (<div className="sum-var-note">+ Per-update cost quoted separately (from CHF 80)</div>)}
                </div>
              </div>
            </>
          )}
        </div>
        
        <p className="cta-note">
          All prices in Swiss Francs (CHF) · 7-day build from materials received · No hidden fees<br />
          Final price confirmed after understanding your full scope. This page was prepared for you after our call.
        </p>
      </div>
    </div>
  );
}
