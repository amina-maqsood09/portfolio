# Amina Maqsood — Portfolio

A personal developer portfolio built to showcase frontend + AI engineering work —
live projects, internship experience, and a technical skill breakdown, presented
through a dark-mode-first, black-and-green interface with a custom 3D hero scene.

**Who it's for:** recruiters, startups, and clients evaluating me for frontend/AI
engineering roles or freelance work.

**Live site:** https://aminamaqsood-dev.vercel.app

## What it does

- Single-page portfolio: About, Experience, Projects, Services, Skills, Education,
  Contact.
- Interactive 3D hero visual (React Three Fiber) that reacts to the cursor.
- Working contact form (EmailJS) — messages land directly in my inbox, no backend
  needed.
- Full dark/light theme system with a persisted user preference.
- Fully responsive (mobile through desktop).

## Setup a stranger could follow

```bash
git clone https://github.com/amina-maqsood09/portfolio.git
cd portfolio
pnpm install
pnpm --filter @workspace/portfolio run dev
```

Open the printed `localhost` URL. That's it — no environment variables or backend
service are required to run the site locally (the contact form uses EmailJS's
client-side SDK with a public key already in the source).

**Build for production:**
```bash
pnpm --filter @workspace/portfolio run build
```

## Usage examples

- **View a project:** scroll to or click "Projects" in the nav — each card links
  out to a live demo and/or source repo.
- **Toggle theme:** the sun/moon icon in the top-right of the navbar.
- **Contact:** fill in the form in the Contact section, or use the WhatsApp/email
  links directly.

## Architecture (high level)

```
React (Vite, TypeScript)
  ├─ Tailwind CSS v4  → design tokens in src/index.css (@theme + light/dark
  │                     CSS custom properties)
  ├─ Framer Motion    → scroll-reveal + micro-interactions
  ├─ React Three Fiber / drei / three → Hero3DScene.tsx (cursor-reactive 3D shapes)
  ├─ shadcn/ui         → base primitives (dialogs, tooltips, etc.)
  ├─ EmailJS           → contact form delivery, no backend
  └─ Vercel            → hosting + auto-deploy on push to main, + @vercel/analytics
```

Each page section is its own component in `src/components/` (`Hero.tsx`,
`About.tsx`, `Experience.tsx`, `Projects.tsx`, `Services.tsx`, `Skills.tsx`,
`Education.tsx`, `Contact.tsx`), composed in `src/pages/Home.tsx`.

## Eval results (v2)

Lighthouse scores from the production build, incognito run (mobile, no extension
interference):

| Metric | Score |
|---|---|
| Performance | 57 |
| Accessibility | 84 |
| Best Practices | 100 |
| SEO | 100 |

Manual checks done: dark/light contrast pass (WCAG AA, 4.5:1 target) on all
text/background pairs; build verified with `tsc --noEmit` (no type errors) and
a clean production `vite build`.

## Limitations

- No backend/CMS — content (projects, experience, skills) is hardcoded in each
  component, so updates require a code change and redeploy rather than a CMS edit.
- The contact form has no server-side spam protection beyond EmailJS's own
  domain restriction — a bot could still hit the public key directly.
- The 3D hero scene adds real bundle weight (~230KB gzipped, lazy-loaded) and
  isn't optimized for low-end mobile devices — it renders a static/simplified
  view on small viewports rather than degrading gracefully by device power.

## Built with AI

This portfolio's dark/light theming system, the diagnosis and fix of a broken
Tailwind v4 `@theme` configuration (which was silently breaking most color
utility classes site-wide), a duplicate-content bug fix, cross-platform
(Windows) dependency install issues, and this README were built with Claude
(Anthropic). When a fix didn't visibly work, I pushed back and asked Claude to
prove it — it rendered the built site with Playwright, inspected the actual
computed CSS and DOM, and only then reported the fix as verified, instead of
me just trusting the diff.

## 🎓 AI Fluency Track — Final Submission Index

### 📚 Weekly Assignments

All weekly assignments completed during the General AI Fluency track:

#### Week 1

* AI Workflow Audit and Tool Setup
* Draw the Path: Portfolio Sitemap + Toolkit
* What Are You Proving?

#### Week 2

* Frame It as Cases: Work That Speaks for Itself
* The Prompt Ladder
* Prompting Fundamentals on Real Tasks v2

#### Week 3

* Consistency, Not Talent (and Frame, Not Upstage)
* Decide Once: Build Your Identity Kit
* Kill Your Darlings: Curate Your Images
* The Through-Line: Map Content & CTAs

#### Week 4

* Empty but Live: Ship a Blank Page
* Three Roads: Choose Your Stack with AI
* Ship an Automation Workflow v2
* Agent Concepts and MCP Basics

#### Week 5

* Explain It Like You Built It
* Design Your Personal Agent
* Build the Agent
* Personal Website Live on the FlyRank Domain

#### Week 6

* Make It Do Something
* Open It on Your Phone
* Survive the Crit

#### Week 7

* Break Your Own Site
* Plant Your Flag: Domain + Badge

#### Week 8

* Show It / Tell the Story
* The Plan to Keep Building
* Documentation and Demo Video

### 🚀 Capstone

**General AI Fluency · Impact Project**
Week 6 · General AI Fluency

[View Capstone](https://internship.flyrank.ai/intern/assignments/fl-cap)

### 🌐 Live Project

**Portfolio Website:**
[View Live Website](https://aminamaqsood-dev.vercel.app/)

### 💻 GitHub

**Portfolio Repository:**
[View GitHub Repository](https://github.com/amina-maqsood09/portfolio)

### 🎥 Demo

**Assignment 8.1 Demo Video:**
[View Demo Video](https://drive.google.com/file/d/1gfNBzJxxUC5UzNUh4DTdcdTxc4DnUtRo/view?usp=drive_link)

### 📝 Final Retrospective

*To be added after completing the 500–800 word retrospective for Assignment 8.2.*

### 📢 Build-in-Public Post

*To be added after publishing the final build-in-public post.*

### ✅ Final Review

*To be added after completing the final review checkpoint.*

