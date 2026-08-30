import React from "react";
import { motion } from "framer-motion";

// VS Code Dark+ palette
const EDITOR_BG = "#1E1E1E";
const TITLE_BAR = "#3C3C3C";
const TAB_BAR = "#2D2D2D";
const STATUS_BAR = "#007ACC";
const LINE_NUM_COL = "#858585";
const PLAIN = "#D4D4D4";
const KEYWORD = "#569CD6";   // const, return, from
const COMPONENT = "#4EC9B0";   // React components
const JSX_PUNCT = "#808080";   // < >  / />
const STRING = "#CE9178";   // string literals
const ATTR_NAME = "#9CDCFE";   // JSX attribute names
const IMPORT_NAME = "#D7BA7D";   // import { … }
const ACCENT = "#007ACC";   // blue accent

const CODE_LINES = [
  { num: 1, tokens: [{ t: "import ", c: KEYWORD }, { t: "React", c: IMPORT_NAME }, { t: " from ", c: KEYWORD }, { t: "'react'", c: STRING }] },
  { num: 2, tokens: [{ t: "import ", c: KEYWORD }, { t: "{ motion }", c: IMPORT_NAME }, { t: " from ", c: KEYWORD }, { t: "'framer-motion'", c: STRING }] },
  { num: 3, tokens: [] },
  { num: 4, tokens: [{ t: "const ", c: KEYWORD }, { t: "Portfolio", c: "#DCDCAA" }, { t: " = () => {", c: PLAIN }] },
  { num: 5, tokens: [{ t: "  return (", c: PLAIN }] },
  { num: 6, tokens: [{ t: "    ", c: "" }, { t: "<", c: JSX_PUNCT }, { t: "Hero", c: COMPONENT }, { t: " ", c: "" }, { t: "theme", c: ATTR_NAME }, { t: "=", c: PLAIN }, { t: '"blue"', c: STRING }, { t: " />", c: JSX_PUNCT }] },
  { num: 7, tokens: [{ t: "    ", c: "" }, { t: "<", c: JSX_PUNCT }, { t: "Projects", c: COMPONENT }, { t: " ", c: "" }, { t: "live", c: ATTR_NAME }, { t: " />", c: JSX_PUNCT }] },
  { num: 8, tokens: [{ t: "    ", c: "" }, { t: "<", c: JSX_PUNCT }, { t: "Contact", c: COMPONENT }, { t: " ", c: "" }, { t: "open", c: ATTR_NAME }, { t: " />", c: JSX_PUNCT }] },
  { num: 9, tokens: [{ t: "  );", c: PLAIN }] },
  { num: 10, tokens: [{ t: "};", c: PLAIN }], cursor: true },
];

export default function HeroIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none" aria-hidden="true">

      {/* ── Soft glow behind the editor ── */}
      <div
        className="absolute inset-[-20px] rounded-3xl blur-[60px] pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 50% 50%, ${ACCENT}22 0%, transparent 70%)` }}
      />

      {/* ── Editor window ── */}
      <motion.div
        initial={{ opacity: 0, y: 28, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
        className="relative w-full max-w-[440px]"
        style={{
          filter: "drop-shadow(0 32px 64px rgba(0,0,0,0.45)) drop-shadow(0 2px 8px rgba(0,122,204,0.15))",
        }}
      >
        <div
          className="rounded-xl overflow-hidden"
          style={{ border: "1px solid rgba(255,255,255,0.08)" }}
        >
          {/* ── Title bar ── */}
          <div
            className="flex items-center gap-2 px-4 py-2.5"
            style={{ background: TITLE_BAR }}
          >
            <span className="w-3 h-3 rounded-full bg-[#FF5F57] shadow-[0_0_4px_#FF5F5740]" />
            <span className="w-3 h-3 rounded-full bg-[#FEBC2E] shadow-[0_0_4px_#FEBC2E40]" />
            <span className="w-3 h-3 rounded-full bg-[#28C840] shadow-[0_0_4px_#28C84040]" />
            <div className="flex-1 flex items-center justify-center">
              <span className="text-[11px] font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>
                Portfolio.tsx — amina-portfolio
              </span>
            </div>
          </div>

          {/* ── Tab bar ── */}
          <div
            className="flex items-end gap-0 px-2 pt-1.5"
            style={{ background: TAB_BAR }}
          >
            {/* Active tab */}
            <div
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-t-md text-[12px]"
              style={{ background: EDITOR_BG, color: PLAIN, borderTop: `1px solid ${ACCENT}`, borderLeft: "1px solid rgba(255,255,255,0.08)", borderRight: "1px solid rgba(255,255,255,0.08)" }}
            >
              <span style={{ color: COMPONENT }}>⬡</span> Portfolio.tsx
            </div>
            {/* Inactive tab */}
            <div
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-t-md text-[12px] ml-0.5"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              Hero.tsx
            </div>
          </div>

          {/* ── Code body ── */}
          <div
            className="px-0 py-3 font-mono text-[12.5px] leading-[1.75]"
            style={{ background: EDITOR_BG }}
          >
            {CODE_LINES.map((line, li) => (
              <motion.div
                key={li}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 + li * 0.06, duration: 0.25 }}
                className="flex gap-0 px-4"
                style={line.num === 6 ? { background: "rgba(255,255,255,0.04)" } : {}}
              >
                {/* Line number */}
                <span
                  className="w-7 text-right flex-shrink-0 mr-5 select-none"
                  style={{ color: LINE_NUM_COL }}
                >
                  {line.num}
                </span>
                {/* Tokens */}
                <span className="flex-1">
                  {line.tokens.map((tok, ti) => (
                    <span key={ti} style={{ color: tok.c || PLAIN }}>{tok.t}</span>
                  ))}
                  {line.cursor && (
                    <motion.span
                      className="inline-block w-[2px] h-[13px] ml-[1px] align-middle"
                      style={{ background: ACCENT }}
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
                    />
                  )}
                </span>
              </motion.div>
            ))}
          </div>

          {/* ── Status bar ── */}
          <div
            className="flex items-center px-4 py-1 text-[11px] font-mono gap-4"
            style={{ background: STATUS_BAR, color: "rgba(255,255,255,0.9)" }}
          >
            <span>◎ main</span>
            <span className="flex items-center gap-1">⚠ 0 &nbsp; ⊘ 0</span>
            <span className="ml-auto">TypeScript · UTF-8 · TSX</span>
          </div>
        </div>
      </motion.div>

      {/* ── Floating card: component preview ── */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
        transition={{
          opacity: { duration: 0.4, delay: 0.9 },
          x: { duration: 0.4, delay: 0.9 },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.6 },
        }}
        className="hidden md:block absolute -right-4 top-8 w-38 rounded-xl shadow-xl p-3 z-10"
        style={{
          background: "rgba(30,30,30,0.92)",
          border: "1px solid rgba(255,255,255,0.1)",
          backdropFilter: "blur(12px)",
          width: "148px",
        }}
      >
        <p className="text-[10px] font-mono mb-2" style={{ color: "rgba(255,255,255,0.35)" }}>Button.tsx</p>
        <div
          className="w-full h-7 rounded-md flex items-center justify-center text-[11px] font-semibold text-white"
          style={{
            background: "linear-gradient(135deg, #1D4ED8, #2563EB)",
            boxShadow: "0 4px 14px rgba(37,99,235,0.5)",
          }}
        >
          Get Started →
        </div>
        <div className="mt-2 flex gap-1.5">
          <span
            className="text-[9px] px-1.5 py-0.5 rounded font-mono"
            style={{ background: "rgba(37,99,235,0.2)", color: "#93C5FD" }}
          >
            variant
          </span>
          <span
            className="text-[9px] px-1.5 py-0.5 rounded font-mono"
            style={{ background: "rgba(255,255,255,0.07)", color: "#6B7280" }}
          >
            size
          </span>
        </div>
      </motion.div>

      {/* ── Floating card: color tokens ── */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0, y: [0, 9, 0] }}
        transition={{
          opacity: { duration: 0.4, delay: 1.1 },
          x: { duration: 0.4, delay: 1.1 },
          y: { duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 },
        }}
        className="hidden md:block absolute -left-4 bottom-12 w-32 rounded-xl shadow-xl p-3 z-10"
        style={{
          background: "rgba(30,30,30,0.92)",
          border: "1px solid rgba(255,255,255,0.1)",
          backdropFilter: "blur(12px)",
        }}
      >
        <p className="text-[10px] font-mono mb-2.5" style={{ color: "rgba(255,255,255,0.35)" }}>tokens.ts</p>
        <div className="space-y-1.5">
          {[
            { name: "primary", color: "#2563EB" },
            { name: "surface", color: "#F8FAFC" },
            { name: "text", color: "#0F172A" },
          ].map(({ name, color }) => (
            <div key={name} className="flex items-center gap-2">
              <span
                className="w-4 h-4 rounded-sm flex-shrink-0"
                style={{ backgroundColor: color, border: "1px solid rgba(255,255,255,0.12)" }}
              />
              <span className="text-[10px] font-mono" style={{ color: "rgba(255,255,255,0.4)" }}>{name}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Floating mini: perf score ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: [16, 4, 16] }}
        transition={{
          opacity: { duration: 0.35, delay: 1.3 },
          y: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 },
        }}
        className="hidden md:flex absolute right-3 bottom-4 rounded-xl shadow-xl px-3 py-2.5 flex items-center gap-2.5 z-10"
        style={{
          background: "rgba(30,30,30,0.92)",
          border: "1px solid rgba(255,255,255,0.1)",
          backdropFilter: "blur(12px)",
        }}
      >
               <div
          className="relative w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center"
          style={{
            background: "conic-gradient(#34D399 0% 90%, rgba(255,255,255,0.12) 90% 100%)",
          }}
        >
          <div
            className="w-6 h-6 rounded-full flex items-center justify-center"
            style={{ background: "#1E1E1E" }}
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
              <path d="M13 2L3 14h7l-1 8 11-14h-7l1-6z" fill="#34D399" />
            </svg>
          </div>
        </div>
        <div>
          <p className="text-[11px] font-semibold" style={{ color: "rgba(255,255,255,0.75)" }}>Lighthouse</p>
          <p className="text-[9px] font-mono" style={{ color: "#86EFAC" }}>Performance ✓</p>
        </div>
      </motion.div>

      {/* ── Floating mini: responsive badge ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, -5, 0] }}
        transition={{
          opacity: { duration: 0.3, delay: 1.5 },
          y: { duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
        }}
        className="hidden md:flex absolute -left-2 top-10 rounded-lg px-2.5 py-1.5 flex items-center gap-1.5 z-10"
        style={{
          background: "rgba(0,122,204,0.15)",
          border: "1px solid rgba(0,122,204,0.4)",
          backdropFilter: "blur(8px)",
        }}
      >
        <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
          <rect x="0" y="0" width="7" height="8" rx="1" stroke="#93C5FD" strokeWidth="1.2" />
          <rect x="8.5" y="2" width="3.5" height="6" rx="0.8" stroke="#6B7280" strokeWidth="1.2" />
        </svg>
        <span className="text-[10px] font-mono" style={{ color: "rgba(147,197,253,0.7)" }}>responsive</span>
      </motion.div>

      {/* Decorative dots */}
      {[
        { left: "88%", top: "15%", size: 5, color: STATUS_BAR, delay: 0 },
        { left: "10%", top: "72%", size: 3.5, color: "#4EC9B0", delay: 1.2 },
        { left: "78%", top: "85%", size: 4, color: "#569CD6", delay: 0.6 },
      ].map((dot, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: dot.left, top: dot.top,
            width: dot.size, height: dot.size,
            backgroundColor: dot.color,
            boxShadow: `0 0 ${dot.size * 2.5}px ${dot.color}88`,
          }}
          animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.35, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: dot.delay }}
        />
      ))}
    </div>
  );
}
