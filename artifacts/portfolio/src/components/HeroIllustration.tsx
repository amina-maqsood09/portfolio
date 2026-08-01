import React from "react";
import { motion } from "framer-motion";

// Monochrome + Electric Blue palette
const BLUE = "#3B82F6";
const BLUE_LIGHT = "#60A5FA";
const BLUE_DIM = "#1D4ED8";
const EDITOR_BG = "#0D0D0D";
const EDITOR_TITLE = "#111111";
const EDITOR_CARD = "#161616";

const CODE_LINES = [
  { tokens: [{ t: "const ", c: BLUE }, { t: "Portfolio", c: "#93C5FD" }, { t: " = () => {", c: "#6B7280" }] },
  { tokens: [{ t: "  ", c: "" }, { t: "return", c: BLUE }, { t: " (", c: "#6B7280" }] },
  { tokens: [{ t: "    <", c: "#94A3B8" }, { t: "Hero", c: BLUE_LIGHT }, { t: ' theme=', c: "#6B7280" }, { t: '"blue"', c: "#86EFAC" }, { t: " />", c: "#94A3B8" }] },
  { tokens: [{ t: "    <", c: "#94A3B8" }, { t: "Projects", c: BLUE_LIGHT }, { t: " live />", c: "#94A3B8" }] },
  { tokens: [{ t: "    <", c: "#94A3B8" }, { t: "Contact", c: BLUE_LIGHT }, { t: " open />", c: "#94A3B8" }] },
  { tokens: [{ t: "  );", c: "#6B7280" }] },
  { tokens: [{ t: "};", c: "#6B7280" }] },
];

export default function HeroIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none" aria-hidden="true">

      {/* ── Main Code Editor Window ── */}
      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.75, delay: 0.3, ease: "easeOut" }}
        className="relative w-full max-w-[420px]"
      >
        {/* Blue glow behind editor */}
        <div
          className="absolute -inset-8 rounded-3xl blur-[40px] pointer-events-none"
          style={{ background: `${BLUE}18` }}
        />

        {/* Editor frame */}
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{
            background: EDITOR_BG,
            border: `1px solid ${BLUE}28`,
            boxShadow: `0 0 0 1px ${BLUE}14, 0 24px 48px -8px rgba(0,0,0,0.80), 0 0 40px -8px ${BLUE}20`,
          }}
        >
          {/* Title bar */}
          <div
            className="flex items-center gap-2 px-4 py-3 border-b"
            style={{ background: EDITOR_TITLE, borderColor: `${BLUE}14` }}
          >
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 text-xs font-mono" style={{ color: `${BLUE}70` }}>portfolio.tsx</span>
            <div className="ml-auto">
              <span className="text-xs font-mono" style={{ color: `${BLUE}70` }}>TSX</span>
            </div>
          </div>

          {/* Code body */}
          <div className="px-5 py-5 font-mono text-[13px] leading-[1.8] space-y-0.5" style={{ background: EDITOR_BG }}>
            {CODE_LINES.map((line, li) => (
              <motion.div
                key={li}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + li * 0.08, duration: 0.3 }}
                className="flex gap-4"
              >
                <span className="w-4 text-right flex-shrink-0" style={{ color: `${BLUE}25` }}>{li + 1}</span>
                <span>
                  {line.tokens.map((tok, ti) => (
                    <span key={ti} style={{ color: tok.c || "#6B7280" }}>{tok.t}</span>
                  ))}
                  {li === CODE_LINES.length - 1 && (
                    <motion.span
                      className="inline-block w-[2px] h-[14px] ml-0.5 align-middle"
                      style={{ background: BLUE_LIGHT }}
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  )}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Status bar */}
          <div
            className="flex items-center gap-4 px-4 py-2 border-t"
            style={{ background: `${BLUE}18`, borderColor: `${BLUE}14` }}
          >
            <span className="text-[11px] font-mono" style={{ color: BLUE_LIGHT }}>● TypeScript</span>
            <span className="text-[11px] font-mono ml-auto" style={{ color: `${BLUE}40` }}>Ln 7, Col 2</span>
          </div>
        </div>
      </motion.div>

      {/* ── Floating Card: Component preview ── */}
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0, y: [0, -12, 0] }}
        transition={{
          opacity: { duration: 0.5, delay: 0.8 },
          x: { duration: 0.5, delay: 0.8 },
          y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
        }}
        className="absolute -right-4 top-6 w-36 rounded-xl backdrop-blur-md shadow-xl p-3 z-10"
        style={{ background: `${EDITOR_CARD}e8`, border: `1px solid ${BLUE}25` }}
      >
        <p className="text-[10px] font-mono mb-2" style={{ color: `${BLUE}60` }}>Button.tsx</p>
        <div
          className="w-full h-7 rounded-lg flex items-center justify-center"
          style={{
            background: `linear-gradient(135deg, ${BLUE_DIM}, ${BLUE})`,
            boxShadow: `0 4px 12px ${BLUE}35`,
          }}
        >
          <span className="text-[11px] font-semibold text-white">Get Started →</span>
        </div>
        <div className="mt-2 flex gap-1.5">
          <span className="text-[9px] px-1.5 py-0.5 rounded font-mono" style={{ background: `${BLUE}18`, color: BLUE_LIGHT }}>variant</span>
          <span className="text-[9px] px-1.5 py-0.5 rounded font-mono" style={{ background: "rgba(255,255,255,0.06)", color: "#94A3B8" }}>size</span>
        </div>
      </motion.div>

      {/* ── Floating Card: Color tokens ── */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0, y: [0, 10, 0] }}
        transition={{
          opacity: { duration: 0.5, delay: 1.0 },
          x: { duration: 0.5, delay: 1.0 },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 },
        }}
        className="absolute -left-4 bottom-10 w-32 rounded-xl backdrop-blur-md shadow-xl p-3 z-10"
        style={{ background: `${EDITOR_CARD}e8`, border: `1px solid ${BLUE}25` }}
      >
        <p className="text-[10px] font-mono mb-2.5" style={{ color: `${BLUE}60` }}>colors</p>
        <div className="space-y-1.5">
          {[
            { name: "primary", color: BLUE },
            { name: "foreground", color: "#FFFFFF" },
            { name: "surface", color: "#1A1A1A" },
          ].map(({ name, color }) => (
            <div key={name} className="flex items-center gap-2">
              <span
                className="w-4 h-4 rounded flex-shrink-0 shadow-sm"
                style={{ backgroundColor: color, border: `1px solid ${BLUE}20` }}
              />
              <span className="text-[10px] font-mono" style={{ color: `${BLUE}60` }}>{name}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Floating mini: performance metric ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [20, 8, 20] }}
        transition={{
          opacity: { duration: 0.4, delay: 1.2 },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
        }}
        className="absolute right-2 bottom-2 rounded-xl backdrop-blur-md shadow-xl px-3 py-2.5 flex items-center gap-2.5 z-10"
        style={{ background: `${EDITOR_CARD}e8`, border: `1px solid ${BLUE}25` }}
      >
        <div className="relative w-8 h-8 flex-shrink-0">
          <svg viewBox="0 0 36 36" className="w-8 h-8 -rotate-90">
            <circle cx="18" cy="18" r="14" fill="none" stroke="#1E293B" strokeWidth="4" />
            <circle cx="18" cy="18" r="14" fill="none" stroke={BLUE} strokeWidth="4"
              strokeDasharray="88" strokeDashoffset="9" strokeLinecap="round" />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-[9px] font-bold" style={{ color: BLUE_LIGHT }}>90</span>
        </div>
        <div>
          <p className="text-[11px] font-semibold" style={{ color: "rgba(148,197,250,0.85)" }}>Perf Score</p>
          <p className="text-[9px] font-mono" style={{ color: "#86EFAC" }}>Lighthouse ✓</p>
        </div>
      </motion.div>

      {/* ── Floating mini: responsive indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, -6, 0] }}
        transition={{
          opacity: { duration: 0.4, delay: 1.4 },
          y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.4 },
        }}
        className="absolute -left-2 top-8 rounded-lg backdrop-blur-md px-2.5 py-1.5 flex items-center gap-1.5 z-10"
        style={{ border: `1px solid ${BLUE}35`, background: `${BLUE}14` }}
      >
        <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
          <rect x="0" y="0" width="7" height="8" rx="1" stroke={BLUE_LIGHT} strokeWidth="1.2" />
          <rect x="8.5" y="2" width="3.5" height="6" rx="0.8" stroke="#94A3B8" strokeWidth="1.2" />
        </svg>
        <span className="text-[10px] font-mono" style={{ color: `${BLUE}70` }}>responsive</span>
      </motion.div>

      {/* ── Decorative floating dots — blue tones ── */}
      {[
        { cx: "88%", cy: "18%", r: 3, color: BLUE, delay: 0 },
        { cx: "12%", cy: "70%", r: 2, color: "#94A3B8", delay: 1 },
        { cx: "80%", cy: "82%", r: 2.5, color: BLUE_LIGHT, delay: 2 },
        { cx: "20%", cy: "22%", r: 2, color: "#60A5FA", delay: 0.5 },
      ].map((dot, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: dot.cx, top: dot.cy,
            width: dot.r * 2, height: dot.r * 2,
            backgroundColor: dot.color,
            boxShadow: `0 0 ${dot.r * 3}px ${dot.color}`,
          }}
          animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.4, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: dot.delay }}
        />
      ))}

    </div>
  );
}
