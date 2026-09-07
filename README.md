# Jake Gutoc — Personal Portfolio

## Description

A personal portfolio website for **Jake Gutoc** — Computer Science Student & Volleyball Athlete.
Built with **React 19 + Vite 8**, styled with a **blue & yellow** motif on a dark theme, and ready
for deployment on **Vercel**.

The site showcases:

- About me with animated stat counters (student-athlete story)
- Skills (Development, Design & Tools, Athlete & Soft Skills)
- Projects with dynamic category filtering
- **Volleyball Achievements gallery** (photo placeholders ready — add your photos)
- **OJT Performance section** (info, highlights & photo placeholders)
- Hobbies & Interests
- Tech stack grid
- Contact form powered by **Web3Forms** + direct email & social links

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React 19** | Component-based UI library |
| **Vite 8** | Build tool and development server |
| **Web3Forms API** | Cloud email service for contact form |
| **Vercel** | Deployment and hosting platform |
| **GitHub** | Version control and source code management |
| **Google Fonts** | Inter + JetBrains Mono typography |

## Project Structure

```
my-portfolio/
├── public/
│   ├── images/
│   │   ├── volleyball/      # 🏐 Drop achievement photos here (vb-1.jpg ... vb-6.jpg)
│   │   └── ojt/             # 💼 Drop OJT photos here (ojt-1.jpg ... ojt-3.jpg)
│   ├── favicon.svg          # JG favicon
│   └── profile.png          # Profile photo (replace with your own photo)
├── src/
│   ├── components/
│   │   ├── About.jsx         # Student-athlete bio + animated statistics
│   │   ├── BackToTop.jsx     # Floating scroll-to-top button
│   │   ├── Contact.jsx       # Web3Forms form + email + social links
│   │   ├── Footer.jsx        # Site footer
│   │   ├── Hobbies.jsx       # Hobbies & interests cards
│   │   ├── Hero.jsx          # Hero section with particles
│   │   ├── Loader.jsx        # Loading screen animation
│   │   ├── Navbar.jsx        # Responsive navigation bar
│   │   ├── OJTGallery.jsx    # OJT performance: info + highlights + photos
│   │   ├── Projects.jsx      # Filterable project cards
│   │   ├── RevealOnScroll.jsx # Intersection Observer wrapper
│   │   ├── ScrollProgress.jsx # Scroll progress bar
│   │   ├── Skills.jsx        # Categorized skill tags
│   │   ├── TechStack.jsx     # Tech stack grid section
│   │   └── VolleyballGallery.jsx # Volleyball achievements photo grid
│   ├── App.jsx             # Root component (section order)
│   ├── main.jsx            # React entry point
│   └── index.css           # Global styles (blue & yellow theme)
├── .env                    # Environment variables (GIT IGNORED)
├── .env.example            # Environment variable template
├── .gitignore              # Git ignore rules
├── index.html              # Vite HTML entry point
├── package.json            # Dependencies and scripts
├── vercel.json             # Vercel deployment config
├── vite.config.js          # Vite configuration
└── README.md               # This file
```

## ✏️ How to Add Your Content

All editable content is marked with `✏️ EDIT ME` comments inside the components.

| What | Where |
|------|-------|
| Your photo | Replace `public/profile.png` (keep the file name) |
| Stats (years, projects) | `src/components/About.jsx` → `STATS` |
| Skills | `src/components/Skills.jsx` → `CATEGORIES` |
| Projects | `src/components/Projects.jsx` → `PROJECTS` |
| Volleyball achievements | `src/components/VolleyballGallery.jsx` → `ACHIEVEMENTS` |
| OJT info & highlights | `src/components/OJTGallery.jsx` → `OJT_INFO` |
| Hobbies | `src/components/Hobbies.jsx` → `HOBBIES` |
| Email & social links | `src/components/Contact.jsx` → `EMAIL`, `SOCIALS` |

### Adding Volleyball / OJT Photos

1. Add your images to `public/images/volleyball/` named `vb-1.jpg` through `vb-6.jpg`
2. Add OJT photos to `public/images/ojt/` named `ojt-1.jpg` through `ojt-3.jpg`
3. They appear automatically — until then, a styled "Photo coming soon" placeholder is shown
4. Update the titles, captions and years in the component files to match each photo

## Features

- **React Components** — All sections are modular, reusable React components
- **Loading Screen** — Animated SVG ring spinner with fade-out transition
- **Scroll Progress Bar** — Blue → yellow gradient progress indicator
- **Hero Floating Particles** — CSS-animated particles generated via React useMemo
- **Project Filtering** — Dynamic filter tabs (All, Java, Web Dev, Design) using React state
- **Animated Stat Counters** — Intersection Observer + requestAnimationFrame in React
- **Scroll Reveal Animations** — Reusable RevealOnScroll wrapper component
- **Photo Galleries with Placeholders** — Volleyball & OJT sections gracefully show placeholders until photos are added
- **Contact Form (Web3Forms)** — Full form with real-time validation, character counter, loading states, success/error feedback
- **Environment Variables** — API key stored securely in `.env` (not committed to Git)
- **Back-to-Top Button** — Floating button with scroll-aware visibility
- **Fully Responsive** — Mobile hamburger menu, responsive grid layouts

## Environment Variables

Copy `.env.example` to `.env` and fill in your values:

```bash
cp .env.example .env
```

| Variable | Description |
|----------|-------------|
| `VITE_WEB3FORMS_KEY` | Your Web3Forms access key from [web3forms.com](https://web3forms.com/) |

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/jgutoc23109053/my-portfolio.git
cd my-portfolio

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your Web3Forms access key

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
npm run preview
```

## Deployment on Vercel

1. Push your changes to GitHub
2. Go to [vercel.com](https://vercel.com) and import the `my-portfolio` repository
3. Vercel auto-detects Vite — no configuration needed
4. Add `VITE_WEB3FORMS_KEY` in Vercel Project Settings → Environment Variables
5. Deploy

## Author

**Jake Gutoc**
Computer Science Student & Volleyball Athlete
DMMMSU

## License

This project is for educational and portfolio purposes.
