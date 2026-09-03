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

# My AI Fluency Journey: From Learning to Building

When I started Week 1 of the AI Fluency track, my main goal was simple: I wanted to learn more about AI and understand how to use different AI tools properly. At that point, I honestly did not expect that I would learn and build as much as I eventually did. I thought I would learn a few tools and concepts, but the track turned into a much bigger learning experience for me.

One of the biggest things I learned was that using AI effectively is not just about asking it a question and copying the answer. I learned how to set up tools, connect different services, understand how different parts of a project work together, and troubleshoot errors when something did not work. I became much more comfortable with technical setup and debugging. Whenever I faced an error, I used AI to understand the problem, but I also checked the solution myself instead of blindly copying and pasting it. I wanted to understand why something worked before keeping it in my project.

My main project during the track was my personal portfolio website. I did not want to create a basic portfolio and stop there. I kept improving it throughout the weeks. I added interactive elements, including 3D components, worked on the visual design, improved responsiveness, tested the website, and deployed it live. At different stages, I made more than 50 commits while building and improving the project. Seeing the website change from an initial idea into a live, working project was one of the most rewarding parts of the track.

AI became part of almost every stage of my workflow. I used it for brainstorming, understanding concepts, writing and improving code, troubleshooting errors, reviewing my work, and thinking through design decisions. I also applied ideas and practices from the AI Fluency framework and from the Anthropic-related courses I had completed, especially around using AI as a thinking partner rather than simply treating it as a code generator.

Another important part of my learning was designing my personal agent. The earlier weeks helped me understand consistency, workflows, prompting, and how AI systems can be structured around a specific purpose. Later, I was able to use those ideas to think more seriously about building an agent of my own. This changed how I think about AI projects: instead of asking, “What can AI generate?”, I started asking, “What problem am I trying to solve, and where does AI actually add value?”

There were also many moments where things did not work immediately. I had to deal with setup problems, connection issues, errors, deployment problems, and changes during development. Those experiences taught me that building with AI still requires human judgment. AI can suggest a solution, but I need to test it, understand it, and decide whether it is actually correct for my project.

If I continue this project, I would like to build a larger real-world project, possibly a website or application for a company, business, or specific organization. I want to take what I learned here and use it on a more complete product with a real problem, real users, and more advanced AI functionality.

The three most transferable lessons I learned are:

**1. AI should be used thoughtfully, not blindly.**
Knowing how to use AI is not about copying its answers. It is about asking better questions, checking the results, understanding the reasoning, and using AI where it genuinely improves the work.

**2. Building is the best way to learn.**
I understood concepts much better when I actually used them in my portfolio and projects. Errors and debugging became learning opportunities rather than just problems.

**3. Consistency and iteration matter.**
A good project does not appear perfectly on the first attempt. I learned to keep improving, testing, reviewing, and refining my work instead of stopping when the first version worked.

When I look back at Week 1, I mainly wanted to learn AI. By the end of the track, I had learned how to use AI as a practical partner while building and improving a real project. That change is probably the most valuable outcome of the entire experience.


### 📢 Build-in-Public Post

[View my Build-in-Public post on LinkedIn](https://www.linkedin.com/posts/amina-maqsood09_github-amina-maqsood09portfolio-personal-activity-7500222455697829888-gKqR)
## Built with AI

This portfolio's dark/light theming system, the diagnosis and fix of a broken
Tailwind v4 `@theme` configuration (which was silently breaking most color
utility classes site-wide), a duplicate-content bug fix, cross-platform
(Windows) dependency install issues, and this README were built with Claude
(Anthropic). When a fix didn't visibly work, I pushed back and asked Claude to
prove it — it rendered the built site with Playwright, inspected the actual
computed CSS and DOM, and only then reported the fix as verified, instead of
me just trusting the diff.

### ✅ Final Review

*To be added after completing the final review checkpoint.*

