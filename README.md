# Intellutions - AI Powered Solutions Website

A modern Next.js website for Intellutions, featuring AI and robotics solutions with light/dark mode, smooth animations, and a responsive design.

## Features

- ✅ **Next.js 14** with App Router
- ✅ **TypeScript** for type safety
- ✅ **Tailwind CSS** for styling
- ✅ **Dark Mode** support with theme toggle
- ✅ **Framer Motion** for smooth animations
- ✅ **Responsive Design** for all devices
- ✅ **Reusable Components** with consistent classnames
- ✅ **Uniform Font System** (Inter)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
intellutions/
├── app/
│   ├── globals.css      # Global styles and utility classes
│   ├── layout.tsx       # Root layout with theme provider
│   └── page.tsx         # Main page
├── components/
│   ├── Header.tsx       # Navigation header with theme toggle
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── Technologies.tsx # Technologies showcase
│   ├── ContactForm.tsx  # Contact form
│   ├── CTA.tsx          # Call-to-action section
│   ├── Footer.tsx       # Footer with links
│   └── ThemeProvider.tsx # Theme context provider
├── package.json
├── tailwind.config.ts   # Tailwind configuration
└── tsconfig.json        # TypeScript configuration
```

## Reusable Utility Classes

The project includes reusable utility classes defined in `globals.css`:

- `.container-custom` - Consistent container width
- `.btn-primary` - Primary button style
- `.btn-secondary` - Secondary button style
- `.btn-outline` - Outline button style
- `.section-padding` - Consistent section spacing
- `.heading-primary` - Large heading style
- `.heading-secondary` - Medium heading style
- `.text-body` - Body text style
- `.card` - Card component style
- `.gradient-bg` - Gradient background
- `.gradient-text` - Gradient text effect

## Color Scheme

- **Primary (Orange)**: `#FF6B35` - Used for accents and CTAs
- **Dark Blue**: `#1A1F3A` - Main dark background
- **Purple**: `#6B46C1` - Secondary accent color

## Animations

Animations are powered by Framer Motion and include:
- Fade-in effects
- Slide-up animations
- Hover effects
- Scroll-triggered animations

## Build for Production

```bash
npm run build
npm start
```

## License

© 2025 Intellutions. All rights reserved.

