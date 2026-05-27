"use client";

import { useState } from "react";
import Link from "next/link";
import { LanguageProvider, useLanguage } from "@/lib/language-context";
import { t, Language } from "@/lib/translations";
import { ChevronDown } from "lucide-react";

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

const languages = [
  { code: "EN" as Language, label: "English" },
  { code: "DE" as Language, label: "Deutsch" },
  { code: "PT" as Language, label: "Português" },
];

function PricingContent() {
  const { currentLang, setCurrentLang } = useLanguage();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [scopeOpen, setScopeOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const SCOPE_RULES = [
    {
      icon: "✅",
      labelKey: "scope_always_included" as const,
      itemKeys: ["scope_item_1", "scope_item_2", "scope_item_3", "scope_item_4"] as const,
    },
    {
      icon: "⚠️",
      labelKey: "scope_limited" as const,
      itemKeys: ["scope_item_5", "scope_item_6", "scope_item_7"] as const,
    },
    {
      icon: "🚫",
      labelKey: "scope_never" as const,
      itemKeys: ["scope_item_8", "scope_item_9", "scope_item_10", "scope_item_11", "scope_item_12", "scope_item_13"] as const,
    },
  ];

  const PLANS = [
    {
      id: "onetime",
      labelKey: "plan_onetime_label" as const,
      badge: null,
      priceDisplay: "1,500",
      priceSubKey: "plan_onetime_pricesub" as const,
      commitmentKey: "plan_onetime_commitment" as const,
      highlight: false,
      noteKey: "plan_onetime_note" as const,
      features: [
        { textKey: "feat_custom_design" as const, included: true },
        { textKey: "feat_pdf_menu" as const, included: true },
        { textKey: "feat_reservation" as const, included: true },
        { textKey: "feat_google_maps" as const, included: true },
        { textKey: "feat_local_seo" as const, included: true },
        { textKey: "feat_analytics" as const, included: true },
        { textKey: "feat_30_days" as const, included: true },
        { textKey: "feat_training" as const, included: true },
        { textKey: "feat_monthly_updates" as const, included: false },
        { textKey: "feat_ongoing_maintenance" as const, included: false },
      ],
    },
    {
      id: "sub6",
      labelKey: "plan_sub6_label" as const,
      badge: null,
      priceDisplay: "149",
      priceSubKey: "plan_sub6_pricesub" as const,
      commitmentKey: "plan_sub6_commitment" as const,
      highlight: false,
      noteKey: "plan_sub6_note" as const,
      features: [
        { textKey: "feat_custom_design" as const, included: true },
        { textKey: "feat_pdf_menu" as const, included: true },
        { textKey: "feat_reservation" as const, included: true },
        { textKey: "feat_google_maps" as const, included: true },
        { textKey: "feat_local_seo" as const, included: true },
        { textKey: "feat_analytics" as const, included: true },
        { textKey: "feat_30_days" as const, included: true },
        { textKey: "feat_training" as const, included: true },
        { textKey: "feat_1_update" as const, included: true, noteKey: "feat_per_contract" as const },
        { textKey: "feat_ongoing_maintenance" as const, included: true },
      ],
    },
    {
      id: "sub12",
      labelKey: "plan_sub12_label" as const,
      badgeKey: "plan_sub12_badge" as const,
      priceDisplay: "149",
      priceSubKey: "plan_sub12_pricesub" as const,
      commitmentKey: "plan_sub12_commitment" as const,
      highlight: true,
      noteKey: "plan_sub12_note" as const,
      extraKey: "plan_sub12_extra" as const,
      features: [
        { textKey: "feat_custom_design" as const, included: true },
        { textKey: "feat_pdf_menu" as const, included: true },
        { textKey: "feat_reservation" as const, included: true },
        { textKey: "feat_google_maps" as const, included: true },
        { textKey: "feat_local_seo" as const, included: true },
        { textKey: "feat_analytics" as const, included: true },
        { textKey: "feat_30_days" as const, included: true },
        { textKey: "feat_training" as const, included: true },
        { textKey: "feat_2_updates" as const, included: true, noteKey: "feat_per_contract" as const },
        { textKey: "feat_ongoing_maintenance" as const, included: true },
      ],
    },
  ];

  const ADDONS = [
    {
      id: "menu_visual",
      icon: "🍽️",
      labelKey: "addon_visual_menu_label" as const,
      priceKey: "addon_visual_menu_price" as const,
      priceSubKey: "addon_visual_menu_pricesub" as const,
      descKey: "addon_visual_menu_desc" as const,
      scopeNoteKey: "addon_visual_menu_scope" as const,
      subBadgeKey: "addon_visual_menu_sub_badge" as const,
      tag: null,
      fixed: 500,
    },
    {
      id: "speed",
      icon: "⚡",
      labelKey: "addon_emergency_label" as const,
      priceKey: "addon_emergency_price" as const,
      priceSubKey: null,
      descKey: "addon_emergency_desc" as const,
      scopeNoteKey: null,
      subBadgeKey: null,
      tag: null,
      fixed: 800,
    },
    {
      id: "guarantee",
      icon: "🛡",
      labelKey: "addon_guarantee_label" as const,
      priceKey: "addon_guarantee_price" as const,
      priceSubKey: null,
      descKey: "addon_guarantee_desc" as const,
      scopeNoteKey: null,
      subBadgeKey: null,
      tag: null,
      fixed: 600,
    },
    {
      id: "updates_monthly",
      icon: "✏️",
      labelKey: "addon_monthly_update_label" as const,
      priceKey: "addon_monthly_update_price" as const,
      priceSubKey: null,
      descKey: "addon_monthly_update_desc" as const,
      scopeNoteKey: "addon_monthly_update_scope" as const,
      subBadgeKey: null,
      tagKey: "addon_monthly_update_tag" as const,
      fixed: 79,
      isMonthly: true,
    },
    {
      id: "updates_ondemand",
      icon: "🖊️",
      labelKey: "addon_ondemand_label" as const,
      priceKey: "addon_ondemand_price" as const,
      priceSubKey: null,
      descKey: "addon_ondemand_desc" as const,
      scopeNoteKey: "addon_ondemand_scope" as const,
      subBadgeKey: null,
      tag: null,
      fixed: null,
    },
    {
      id: "support60",
      icon: "📞",
      labelKey: "addon_support60_label" as const,
      priceKey: "addon_support60_price" as const,
      priceSubKey: null,
      descKey: "addon_support60_desc" as const,
      scopeNoteKey: null,
      subBadgeKey: null,
      tag: null,
      fixed: 400,
    },
    {
      id: "reports",
      icon: "📊",
      labelKey: "addon_reports_label" as const,
      priceKey: "addon_reports_price" as const,
      priceSubKey: null,
      descKey: "addon_reports_desc" as const,
      scopeNoteKey: null,
      subBadgeKey: null,
      tag: null,
      fixed: 350,
    },
  ];

  const INCLUDED_ALL_KEYS = [
    "strip_custom_design",
    "strip_7_day",
    "strip_local_seo",
    "strip_reservation",
    "strip_30_day",
    "strip_training",
  ] as const;

  const toggleAddon = (id: string) => {
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
        .p-nav-right {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .p-nav-lang {
          position: relative;
        }
        .p-nav-lang-btn {
          font-family: 'Syne', sans-serif;
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #EDE8DC;
          background: transparent;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 4px;
          transition: color 0.2s;
        }
        .p-nav-lang-btn:hover {
          color: #C9954A;
        }
        .p-nav-lang-dropdown {
          position: absolute;
          top: 100%;
          right: 0;
          margin-top: 8px;
          min-width: 100px;
          background: rgba(26, 18, 8, 0.98);
          border: 1px solid #3A3228;
          border-radius: 8px;
          overflow: hidden;
        }
        .p-nav-lang-option {
          display: block;
          width: 100%;
          padding: 10px 16px;
          font-family: 'Syne', sans-serif;
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #EDE8DC;
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: left;
          transition: all 0.2s;
        }
        .p-nav-lang-option:hover {
          background: rgba(201, 149, 74, 0.1);
          color: #C9954A;
        }
        .p-nav-lang-option.active {
          background: rgba(201, 149, 74, 0.15);
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
            ← {t("pricing_back", currentLang)}
          </Link>
          <div className="p-nav-right">
            {/* Language Selector */}
            <div className="p-nav-lang">
              <button
                className="p-nav-lang-btn"
                onClick={() => setIsLangOpen(!isLangOpen)}
              >
                {currentLang}
                <ChevronDown 
                  style={{ 
                    width: 12, 
                    height: 12, 
                    transition: "transform 0.2s",
                    transform: isLangOpen ? "rotate(180deg)" : "rotate(0deg)"
                  }} 
                />
              </button>
              {isLangOpen && (
                <div className="p-nav-lang-dropdown">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className={`p-nav-lang-option ${currentLang === lang.code ? "active" : ""}`}
                      onClick={() => {
                        setCurrentLang(lang.code);
                        setIsLangOpen(false);
                      }}
                    >
                      {lang.code}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <a href="https://calendly.com/daniel-tablesfront/30min" target="_blank" rel="noopener noreferrer" className="p-nav-btn">
              {t("nav_cta", currentLang)}
            </a>
          </div>
        </div>
      </nav>

      <div className="pw">
        <div className="eyebrow">{t("pricing_eyebrow", currentLang)}</div>
        <h1 className="hero-title">{t("pricing_headline_1", currentLang)}<br /><span>{t("pricing_headline_2", currentLang)}</span></h1>
        <p className="hero-sub">{t("pricing_sub", currentLang)}</p>
        <div className="strip">
          {INCLUDED_ALL_KEYS.map((key, i) => (
            <div className="strip-item" key={i}><CHECK /><span>{t(key, currentLang)}</span></div>
          ))}
        </div>
        
        <div className="sec-title">{t("pricing_choose", currentLang)}</div>
        <div className="sec-sub">{t("pricing_choose_sub", currentLang)}</div>
        
        <div className="plans-grid">
          {PLANS.map((plan) => (
            <div key={plan.id} className={`plan-card${plan.highlight ? " hl" : ""}${selectedPlan === plan.id ? " sel" : ""}`} onClick={() => setSelectedPlan(selectedPlan === plan.id ? null : plan.id)}>
              {plan.badgeKey && <div className="plan-badge">{t(plan.badgeKey, currentLang)}</div>}
              <div className="plan-lbl">{t(plan.labelKey, currentLang)}</div>
              <div className="plan-from">{t("pricing_starting_from", currentLang)}</div>
              <div className="plan-price"><span className="plan-cur">CHF </span>{plan.priceDisplay}</div>
              <div className="plan-psub">{t(plan.priceSubKey, currentLang)}</div>
              <div className="plan-commit">{t(plan.commitmentKey, currentLang)}</div>
              {plan.extraKey && <div className="plan-extra">✓ {t(plan.extraKey, currentLang)}</div>}
              <div className="plan-note">{t(plan.noteKey, currentLang)}</div>
              <hr className="plan-div" />
              {plan.features.map((f, i) => (
                <div key={i}>
                  <div className={`feat-row${f.included ? "" : " dim"}`}>{f.included ? <CHECK /> : <X_ICON />}<span>{t(f.textKey, currentLang)}</span></div>
                  {f.noteKey && <div className="feat-note">↳ {t(f.noteKey, currentLang)}</div>}
                </div>
              ))}
              <button className={`sel-btn${selectedPlan === plan.id ? " act" : ""}`}>{selectedPlan === plan.id ? `✓ ${t("pricing_selected", currentLang)}` : t("pricing_select", currentLang)}</button>
            </div>
          ))}
        </div>
        
        <div className="dot-div">· · ·</div>
        
        <div className="sec-title">{t("pricing_included_title", currentLang)}</div>
        <div className="sec-sub">{t("pricing_included_sub", currentLang)}</div>
        <div className="scope-toggle" onClick={() => setScopeOpen(!scopeOpen)}>
          <span style={{ fontSize: "15px" }}>📋</span>
          <span className="scope-toggle-label">{t("pricing_scope_toggle", currentLang)}</span>
          <span className={`scope-toggle-arrow${scopeOpen ? " open" : ""}`}>▼</span>
        </div>
        {scopeOpen && (
          <div className="scope-body">
            {SCOPE_RULES.map((col, ci) => (
              <div className="scope-col" key={ci}>
                <div className="scope-col-head"><span>{col.icon}</span><span>{t(col.labelKey, currentLang)}</span></div>
                {col.itemKeys.map((itemKey, ii) => (
                  <div className="scope-item" key={ii}>
                    <div className={ci === 0 ? "scope-dot-green" : ci === 1 ? "scope-dot-amber" : "scope-dot-red"} />
                    <span>{t(itemKey, currentLang)}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
        
        <div className="sec-title">{t("pricing_addons_title", currentLang)}</div>
        <div className="sec-sub">{t("pricing_addons_sub", currentLang)}</div>
        
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
                      <div className="addon-lbl">{t(addon.labelKey, currentLang)}</div>
                      <div className="addon-price-wrap">
                        <div className="addon-price">{t(addon.priceKey, currentLang)}</div>
                        {addon.priceSubKey && <div className="addon-psub">{t(addon.priceSubKey, currentLang)}</div>}
                      </div>
                    </div>
                    <div className="addon-desc">{t(addon.descKey, currentLang)}</div>
                    {addon.id === "menu_visual" && isSubscription && addon.subBadgeKey && (<div className="addon-sub-badge">{t(addon.subBadgeKey, currentLang)}</div>)}
                    {addon.tagKey && <div className="addon-tag">{t(addon.tagKey, currentLang)}</div>}
                  </div>
                </div>
                {addon.scopeNoteKey && (<div className="addon-scope"><INFO /><span>{t(addon.scopeNoteKey, currentLang)}</span></div>)}
              </div>
            );
          })}
        </div>
        
        <div className="dot-div">· · ·</div>
        
        <div className="sec-title">{t("pricing_summary_title", currentLang)}</div>
        <div className="sec-sub">{t("pricing_summary_sub", currentLang)}</div>
        
        <div className="sum-box">
          {!selectedPlan && selectedAddons.length === 0 ? (
            <div className="sum-empty">{t("pricing_empty", currentLang)}</div>
          ) : (
            <>
              {selectedPlan && (() => {
                const plan = PLANS.find(p => p.id === selectedPlan);
                if (!plan) return null;
                return (<div className="sum-row"><span className="sum-lbl">{t(plan.labelKey, currentLang)}</span><span className="sum-val">{selectedPlan === "onetime" ? "From CHF 1,500" : "From CHF 149/mo"}</span></div>);
              })()}
              {selectedAddons.map((id) => {
                const a = ADDONS.find((x) => x.id === id);
                if (!a) return null;
                const showSubSurcharge = id === "menu_visual" && isSubscription;
                return (<div className="sum-row" key={id}><span className="sum-lbl">{t(a.labelKey, currentLang)}{showSubSurcharge ? " (incl. +CHF 60/mo update fee)" : ""}</span><span className="sum-val">{t(a.priceKey, currentLang)}{showSubSurcharge ? " + CHF 60/mo" : ""}</span></div>);
              })}
              <div className="sum-total">
                <span className="sum-total-lbl">{t("pricing_total", currentLang)}</span>
                <div>
                  <div className="sum-total-val">
                    {selectedPlan === "onetime" ? `From CHF ${(1500 + totalAddons).toLocaleString()}` : selectedPlan ? `From CHF ${149 + totalMonthly}/mo${(totalAddons - (hasVisualMenu ? 500 : 0)) > 0 ? ` + CHF ${totalAddons - (hasVisualMenu ? 500 : 0)}` : ""}${hasVisualMenu ? " + CHF 500 build" : ""}` : totalAddons > 0 ? `CHF ${totalAddons}` : "—"}
                  </div>
                  {hasVariableAddon && (<div className="sum-var-note">{t("pricing_var_note", currentLang)}</div>)}
                </div>
              </div>
            </>
          )}
        </div>
        
        <p className="cta-note">
          {t("pricing_note", currentLang)}<br />
          {t("pricing_note_2", currentLang)}
        </p>
      </div>
    </div>
  );
}

export default function PricingPage() {
  return (
    <LanguageProvider>
      <PricingContent />
    </LanguageProvider>
  );
}
