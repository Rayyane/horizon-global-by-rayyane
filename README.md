# Horizon Global — HTML, CSS & Tailwind CSS Project

Modern, lightweight, component-driven frontend architecture built with **HTML5**, **Tailwind CSS v3**, and **Vite**. Specifically architected for rapid design prototyping with seamless migration into **Laravel with Vue Starter Kits** (Inertia/Breeze/Jetstream).

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```
*(On Windows PowerShell, use `npm.cmd install`)*

### 2. Run Local Development Server
```bash
npm run dev
```
*(On Windows PowerShell, use `npm.cmd run dev`)*

Your browser will automatically open at `http://localhost:3000` with instant Hot Module Replacement (HMR).

### 3. Build for Production
```bash
npm run build
```
*(On Windows PowerShell, use `npm.cmd run build`)*

Builds compiled, minified HTML, CSS, and JS into the `dist/` directory.

---

## 📁 Project Structure

```
horizon-global-by-rayyane/
├── .gitignore                       # Git ignore rules
├── package.json                     # NPM project scripts & dependencies
├── vite.config.js                   # Vite dev server & asset aliases
├── tailwind.config.js               # Extended Tailwind tokens & content paths
├── postcss.config.js                # Tailwind & Autoprefixer plugin setup
├── index.html                       # Assembled master preview page
├── public/                          # Static public assets (favicon, robots.txt)
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── css/
│   │   └── style.css                # Tailwind directives & reusable utility classes
│   ├── js/
│   │   ├── main.js                  # Entry script & module imports
│   │   └── modules/
│   │       ├── navigation.js        # Mobile drawer & accessibility logic
│   │       └── theme.js             # Dark/light mode switcher & localStorage
│   ├── components/                  # Modular HTML templates ready for Vue SFCs
│   │   ├── layout/                  # Header, Footer
│   │   ├── sections/                # Hero, Features, Stats, Testimonials, CTA
│   │   └── ui/                      # Button, Card, Badge, Input primitives
│   └── assets/
│       ├── images/                  # Mockups, banners, visual assets
│       └── icons/                   # Raw SVG icons
└── docs/
    └── LARAVEL_VUE_MIGRATION.md     # Step-by-step Laravel + Vue porting instructions
```

---

## 💡 Porting to Laravel + Vue
See [`docs/LARAVEL_VUE_MIGRATION.md`](docs/LARAVEL_VUE_MIGRATION.md) for full step-by-step instructions on copying components into Vue Single File Components (`.vue`) and integrating with Inertia.js.
