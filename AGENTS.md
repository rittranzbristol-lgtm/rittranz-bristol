# RIT TRANZ website

Marketing website for RIT TRANZ, a man and van service in Bristol. Built with React, Vite and Tailwind CSS, hosted on Vercel at https://www.rittranz.co.uk.

## Development

Uses pnpm (`pnpm-lock.yaml` is the lockfile; Node 22, see `.mise.toml`).

- `pnpm install` - install dependencies
- `pnpm dev` - start the dev server at http://localhost:5173
- `pnpm build` - production build into `dist/`
- `pnpm preview` - serve the production build locally

Every push to `master` on GitHub deploys to Vercel automatically.

## Project structure

- `index.html` - HTML shell: page title, meta description, link-preview tags and favicons
- `src/main.tsx` - React entrypoint; imports `src/index.css` and mounts `src/app/App.tsx`
- `src/app/routes.ts` - URL to page mapping (`/`, `/services`, `/pricing`, `/about`, `/contact`, `/privacy`, `/terms`)
- `src/pages/` - one file per page; each page composes section components
- `src/components/layout/` - header, footer, page shell and CTA shared by the inner pages
- `src/components/home/`, `services/`, `pricing/`, `about/`, `contact/` - sections for each page
- `src/components/icons/` - SVG icon components
- `src/data/` - page content (services, FAQs, pricing plans, links, SEO schema)
- `src/utils/whatsapp.ts` - builds and opens the WhatsApp quote messages
- `src/components/chat/ChatWidget.tsx` - floating "Ask us" chat assistant shown on every page
- `api/chat.ts` - Vercel function behind the chat; calls Google Gemini (`GEMINI_API_KEY`, optional `GEMINI_MODEL`). `api/_knowledge.ts` builds its system prompt from `src/data/`. In `pnpm dev` it is served by a small plugin in `vite.config.ts`; keys go in `.env.local` (see `.env.example`).
- `src/index.css` - global CSS and Tailwind CSS v4 import
- `public/` - static files served as-is (logo, map image, favicons). Stored as normal git files, not Git LFS, so Vercel receives them.
- `vercel.json` - sends every route to `index.html` so refreshing inner pages works

## Styling

Tailwind CSS v4 through the `@tailwindcss/vite` plugin. Use utility classes in JSX; put global CSS and theme customisation in `src/index.css` (keep `@import` statements first). No Tailwind or PostCSS config file is needed.

## Code quality

- Use double quotes for strings containing apostrophes (`"We're here to help"`), or escape them in single-quoted strings. An unescaped apostrophe in a single-quoted string breaks the build.
- Ensure JSX tags are closed and braces are balanced.
- Export components as default exports.
- Keep content (text, lists, prices) in `src/data/` rather than hard-coded in components where practical.
