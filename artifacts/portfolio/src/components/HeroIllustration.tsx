import React from "react";
import { motion } from "framer-motion";

function float(delay = 0, y = 10) {
  return {
    animate: { y: [0, -y, 0] },
    transition: { duration: 4 + delay, repeat: Infinity, ease: "easeInOut", delay },
  };
}

const CODE_LINES = [
  { tokens: [{ t: "const ", c: "#a78bfa" }, { t: "Portfolio", c: "#67e8f9" }, { t: " = () => {", c: "#e2e8f0" }] },
  { tokens: [{ t: "  ", c: "" }, { t: "return", c: "#a78bfa" }, { t: " (", c: "#e2e8f0" }] },
  { tokens: [{ t: "    <", c: "#67e8f9" }, { t: "Hero", c: "#f472b6" }, { t: " theme=", c: "#e2e8f0" }, { t: '"purple"', c: "#86efac" }, { t: " />", c: "#67e8f9" }] },
  { tokens: [{ t: "    <", c: "#67e8f9" }, { t: "Projects", c: "#f472b6" }, { t: " live />", c: "#67e8f9" }] },
  { tokens: [{ t: "    <", c: "#67e8f9" }, { t: "Contact", c: "#f472b6" }, { t: " open />", c: "#67e8f9" }] },
  { tokens: [{ t: "  );", c: "#e2e8f0" }] },
  { tokens: [{ t: "};", c: "#e2e8f0" }] },
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
        {/* Glow behind editor */}
        <div className="absolute -inset-6 bg-primary/20 rounded-3xl blur-3xl pointer-events-none" />

        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40 bg-[#0f0f1a]">
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1a2e] border-b border-white/5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 text-xs font-mono text-white/30">portfolio.tsx</span>
            <div className="ml-auto flex gap-3">
              <span className="text-xs font-mono text-[#a78bfa]/60">TSX</span>
            </div>
          </div>

          {/* Code body */}
          <div className="px-5 py-5 font-mono text-[13px] leading-[1.8] space-y-0.5 bg-[#0d0d1a]">
            {/* Line numbers + code */}
            {CODE_LINES.map((line, li) => (
              <motion.div
                key={li}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + li * 0.08, duration: 0.3 }}
                className="flex gap-4"
              >
                <span className="text-white/15 w-4 text-right flex-shrink-0">{li + 1}</span>
                <span>
                  {line.tokens.map((tok, ti) => (
                    <span key={ti} style={{ color: tok.c || "#e2e8f0" }}>{tok.t}</span>
                  ))}
                  {/* Blinking cursor on last line */}
                  {li === CODE_LINES.length - 1 && (
                    <motion.span
                      className="inline-block w-[2px] h-[14px] bg-[#a78bfa] ml-0.5 align-middle"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  )}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Status bar */}
          <div className="flex items-center gap-4 px-4 py-2 bg-[#7c3aed]/20 border-t border-white/5">
            <span className="text-[11px] font-mono text-[#a78bfa]">● TypeScript</span>
            <span className="text-[11px] font-mono text-white/25 ml-auto">Ln 7, Col 2</span>
          </div>
        </div>
      </motion.div>

      {/* ── Floating Card: Component preview ── */}
      <motion.div
        {...float(0.5, 12)}
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0, y: [0, -12, 0] }}
        transition={{ opacity: { duration: 0.5, delay: 0.8 }, x: { duration: 0.5, delay: 0.8 }, y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 } }}
        className="absolute -right-4 top-6 w-36 rounded-xl border border-white/10 bg-[#1a1a2e]/90 backdrop-blur-md shadow-xl p-3 z-10"
      >
        <p className="text-[10px] font-mono text-white/30 mb-2">Button.tsx</p>
        <div className="w-full h-7 rounded-lg bg-gradient-to-r from-[#7c3aed] to-[#0891b2] flex items-center justify-center">
          <span className="text-[11px] font-semibold text-white">Get Started →</span>
        </div>
        <div className="mt-2 flex gap-1.5">
          <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#a78bfa]/20 text-[#a78bfa] font-mono">variant</span>
          <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#67e8f9]/20 text-[#67e8f9] font-mono">size</span>
        </div>
      </motion.div>

      {/* ── Floating Card: Color tokens ── */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0, y: [0, 10, 0] }}
        transition={{ opacity: { duration: 0.5, delay: 1.0 }, x: { duration: 0.5, delay: 1.0 }, y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 } }}
        className="absolute -left-4 bottom-10 w-32 rounded-xl border border-white/10 bg-[#1a1a2e]/90 backdrop-blur-md shadow-xl p-3 z-10"
      >
        <p className="text-[10px] font-mono text-white/30 mb-2.5">colors</p>
        <div className="space-y-1.5">
          {[
            { name: "primary", color: "#7c3aed" },
            { name: "accent", color: "#0891b2" },
            { name: "surface", color: "#1e1b4b" },
          ].map(({ name, color }) => (
            <div key={name} className="flex items-center gap-2">
              <span className="w-4 h-4 rounded flex-shrink-0 shadow-sm" style={{ backgroundColor: color }} />
              <span className="text-[10px] font-mono text-white/50">{name}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Floating mini card: performance metric ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [20, 8, 20] }}
        transition={{ opacity: { duration: 0.4, delay: 1.2 }, y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.2 } }}
        className="absolute right-2 bottom-2 rounded-xl border border-white/10 bg-[#1a1a2e]/90 backdrop-blur-md shadow-xl px-3 py-2.5 flex items-center gap-2.5 z-10"
      >
        <div className="relative w-8 h-8 flex-shrink-0">
          <svg viewBox="0 0 36 36" className="w-8 h-8 -rotate-90">
            <circle cx="18" cy="18" r="14" fill="none" stroke="#1e1b4b" strokeWidth="4" />
            <circle cx="18" cy="18" r="14" fill="none" stroke="#7c3aed" strokeWidth="4"
              strokeDasharray="88" strokeDashoffset="9" strokeLinecap="round" />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-[9px] font-bold text-[#a78bfa]">90</span>
        </div>
        <div>
          <p className="text-[11px] font-semibold text-white/80">Perf Score</p>
          <p className="text-[9px] text-[#86efac] font-mono">Lighthouse ✓</p>
        </div>
      </motion.div>

      {/* ── Floating mini: responsive indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, -6, 0] }}
        transition={{ opacity: { duration: 0.4, delay: 1.4 }, y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.4 } }}
        className="absolute -left-2 top-8 rounded-lg border border-[#7c3aed]/30 bg-[#7c3aed]/10 backdrop-blur-md px-2.5 py-1.5 flex items-center gap-1.5 z-10"
      >
        <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
          <rect x="0" y="0" width="7" height="8" rx="1" stroke="#a78bfa" strokeWidth="1.2"/>
          <rect x="8.5" y="2" width="3.5" height="6" rx="0.8" stroke="#67e8f9" strokeWidth="1.2"/>
        </svg>
        <span className="text-[10px] font-mono text-white/60">responsive</span>
      </motion.div>

      {/* ── Decorative floating dots ── */}
      {[
        { cx: "88%", cy: "18%", r: 3, color: "#a78bfa", delay: 0 },
        { cx: "12%", cy: "70%", r: 2, color: "#67e8f9", delay: 1 },
        { cx: "80%", cy: "82%", r: 2.5, color: "#f472b6", delay: 2 },
        { cx: "20%", cy: "22%", r: 2, color: "#86efac", delay: 0.5 },
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
