# Bryan Bakwowi - Developer Portfolio

A responsive portfolio application that presents my background, technical skills, and selected software projects in one focused experience.

[View the live portfolio](https://portfolio1-rouge-nine.vercel.app) | [GitHub profile](https://github.com/B6800) | [LinkedIn](https://www.linkedin.com/in/bakwowi-bryan-77284b2b7)

## Project overview

Recruiters and engineering teams often review a candidate's work in only a few minutes. I built this portfolio to give them a clear route through the information that matters most: what I build, which technologies I use, and how to contact me.

The result is a single-page React application with responsive navigation, project case-study cards, a structured skills overview, and direct links to my professional profiles.

## Goals

- Present my projects and technical background in a concise, recruiter-friendly format.
- Keep the experience usable across desktop and mobile devices.
- Make important actions, including viewing source code and contacting me, easy to find.
- Use reusable components so that new projects and skills can be added without redesigning the page.
- Create a visual identity that is professional while still feeling personal.

## Current experience

- Scroll-aware desktop navigation with smooth movement between page sections.
- Collapsible mobile navigation for smaller screens.
- Responsive hero, about, projects, skills, certifications, and contact sections.
- Data-driven project and skills cards built from reusable React components.
- Responsive project imagery, technology badges, and external project links.
- Custom Tailwind design tokens, gradients, transitions, and entrance animations.
- Dedicated fallback page for unknown routes.
- Production deployment on Vercel.

## Engineering decisions

### Single-page information architecture

The main portfolio content lives on one page. This reduces navigation friction and lets visitors move directly between the introduction, projects, skills, and contact information.

### Reusable, data-driven sections

Projects and skill groups are represented as structured arrays and rendered into shared card components. This keeps the presentation consistent and makes future updates smaller and safer.

### Responsive behavior by default

The layout uses Tailwind breakpoints for grids, typography, spacing, and navigation. Desktop and mobile navigation states are handled separately so the primary actions remain accessible at different screen sizes.

### Centralized visual system

Colors, spacing, border radii, animation keyframes, and component states are defined through Tailwind configuration and shared UI primitives. This avoids scattering one-off visual decisions across the application.

## Technology stack

| Area | Technologies |
| --- | --- |
| Application | React 18, TypeScript, React Router |
| Build tooling | Vite, SWC |
| Styling | Tailwind CSS, PostCSS, custom design tokens |
| UI | Reusable component primitives, Lucide icons |
| Client infrastructure | TanStack Query |
| Code quality | ESLint, TypeScript |
| Deployment | Vercel |

## Repository structure

```text
src/
|- assets/          Project images and visual assets
|- components/      Portfolio sections and reusable UI components
|  |- ui/           Buttons, cards, inputs, badges, and other primitives
|- hooks/           Shared React hooks
|- lib/             Utility functions
|- pages/           Main portfolio and fallback routes
|- App.tsx          Application providers and routing
|- main.tsx         Browser entry point
```

## Run locally

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

```bash
git clone https://github.com/B6800/Portfolio1.git
cd Portfolio1
npm ci
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create an optimized production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run the ESLint checks |

## Current roadmap

The portfolio is actively being improved. The next priorities are:

- Replace placeholder project actions with verified repositories and live demonstrations.
- Serve the downloadable CV from a stable public asset path.
- Connect the contact form to a validated backend or form service.
- Add automated component and end-to-end tests.
- Add Lighthouse and accessibility checks to continuous integration.
- Expand each featured project into a measurable engineering case study.

## What I learned

This project strengthened my understanding of component-driven React development, responsive information architecture, and maintaining a consistent design system. It also showed me that a portfolio should not simply list tools: it should guide a visitor toward verifiable project evidence.

## Author

**Bakwowi Bryan Beteck**

- [GitHub](https://github.com/B6800)
- [LinkedIn](https://www.linkedin.com/in/bakwowi-bryan-77284b2b7)
- [Email](mailto:bryanbakwowi@gmail.com)
