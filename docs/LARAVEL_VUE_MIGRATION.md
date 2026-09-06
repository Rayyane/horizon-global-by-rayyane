# Laravel + Vue Starter Kit Migration Guide

This project was intentionally structured to ensure **100% friction-free migration** into a Laravel starter kit using Vue 3 (such as **Laravel Breeze with Inertia + Vue** or **Laravel Jetstream**).

---

## 1. Directory Mapping Overview

| This Project (`horizon-global-by-rayyane`) | Laravel + Vue Starter Kit Path | Notes |
| :--- | :--- | :--- |
| `tailwind.config.js` | `tailwind.config.js` | Merge or replace theme extensions (colors, fonts). |
| `src/css/style.css` | `resources/css/app.css` | Copy the custom utility classes & layers. |
| `src/components/layout/header.html` | `resources/js/Components/Navbar.vue` | Convert `<a>` tags to Inertia `<Link>`. |
| `src/components/layout/footer.html` | `resources/js/Components/Footer.vue` | Convert `<a>` tags to Inertia `<Link>`. |
| `src/components/sections/hero.html` | `resources/js/Components/Sections/Hero.vue` | Can accept props for dynamic headlines. |
| `src/components/sections/features.html` | `resources/js/Components/Sections/Features.vue` | Feed feature items from props. |
| `src/components/sections/stats.html` | `resources/js/Components/Sections/Stats.vue` | Feed statistics numbers from backend. |
| `src/components/sections/testimonials.html` | `resources/js/Components/Sections/Testimonials.vue` | Pass customer reviews array. |
| `src/components/sections/cta.html` | `resources/js/Components/Sections/Cta.vue` | Connect form to `useForm()` / Laravel route. |
| `src/components/ui/button.html` | `resources/js/Components/PrimaryButton.vue` | Wrap in `<button>` with Vue slots. |
| `src/components/ui/card.html` | `resources/js/Components/Card.vue` | Slot-based container component. |
| `src/components/ui/badge.html` | `resources/js/Components/Badge.vue` | Configurable badge variants. |
| `src/components/ui/input.html` | `resources/js/Components/TextInput.vue` | v-model compatible input. |
| `public/favicon.svg` | `public/favicon.svg` | Place in Laravel's root public directory. |
| `src/assets/images/` | `resources/images/` or `public/images/` | Use standard asset helpers. |

---

## 2. Step-by-Step Porting Instructions

### Step 2.1: Tailwind Configuration
In your Laravel project's `tailwind.config.js`:
1. Ensure the `content` array includes Vue files:
   ```javascript
   content: [
     './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
     './storage/framework/views/*.php',
     './resources/views/**/*.blade.php',
     './resources/js/**/*.vue',
   ],
   ```
2. Copy the `theme.extend` section from this project's `tailwind.config.js` (including `brand`, `secondary` (#A47430), `content` (#606161), `surface`, and `fontFamily` with Poppins).

### Step 2.2: CSS Styles
Open `src/css/style.css` in this project. Copy the base layers and custom utility classes (`.btn`, `.btn-primary`, `.btn-secondary`, `.btn-secondary-solid`, `.glass-card`, `.badge-brand`, `.badge-secondary`) into your Laravel project's:
```
resources/css/app.css
```

### Step 2.3: Converting an HTML Section to a Vue SFC
Converting any section from `src/components/sections/` into a Vue 3 component takes 30 seconds:

**Example: `resources/js/Components/Sections/Hero.vue`**
```vue
<script setup>
import { Link } from '@inertiajs/vue3';

defineProps({
  title: {
    type: String,
    default: 'Next-Generation Global Solutions for the Modern Enterprise'
  },
  demoUrl: {
    type: String,
    default: '#demo'
  }
});
</script>

<template>
  <section class="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32">
    <!-- Paste markup from src/components/sections/hero.html -->
    <div class="container mx-auto">
      <div class="mx-auto max-w-3xl text-center">
        <h1 class="mt-6 font-extrabold tracking-tight text-4xl sm:text-5xl md:text-6xl text-slate-900 dark:text-white">
          {{ title }}
        </h1>
        <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link :href="route('register')" class="btn-primary w-full sm:w-auto text-base px-7 py-3">
            Explore Platform
          </Link>
          <a :href="demoUrl" class="btn-secondary w-full sm:w-auto text-base px-7 py-3">
            Watch 2-Min Demo
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
```

### Step 2.4: Assembling in an Inertia Page
In your Laravel Vue starter kit, the home page is typically `resources/js/Pages/Welcome.vue`:

```vue
<script setup>
import { Head } from '@inertiajs/vue3';
import Navbar from '@/Components/Navbar.vue';
import Hero from '@/Components/Sections/Hero.vue';
import Features from '@/Components/Sections/Features.vue';
import Stats from '@/Components/Sections/Stats.vue';
import Testimonials from '@/Components/Sections/Testimonials.vue';
import Cta from '@/Components/Sections/Cta.vue';
import Footer from '@/Components/Footer.vue';
</script>

<template>
  <Head title="Horizon Global" />
  
  <div class="min-h-screen flex flex-col bg-white dark:bg-surface-950">
    <Navbar />
    <main class="flex-1">
      <Hero />
      <Features />
      <Stats />
      <Testimonials />
      <Cta />
    </main>
    <Footer />
  </div>
</template>
```

---

## 3. Benefits of This Setup
- **Zero Framework Lock-in during prototyping**: Iterate rapidly on design, typography, spacing, and micro-interactions without full backend overhead.
- **Identical Build Tool**: Since both this prototype and Laravel use **Vite**, class purging and Tailwind behaviors are 100% identical.
- **Fast HMR**: Lightning-fast instant updates during development.
