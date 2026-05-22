# The Little Garimayans — Premium Preschool Website

An ultra-premium, cinematic, full-stack website for The Little Garimayans preschool brand built with Next.js 15, Three.js, GSAP, Framer Motion, MongoDB, and Tailwind CSS.

---

## Tech Stack

| Layer      | Technology |
|------------|------------|
| Frontend   | Next.js 15, React 18, TypeScript |
| Styling    | Tailwind CSS, custom CSS variables |
| 3D         | Three.js, React Three Fiber, Drei |
| Animation  | GSAP + ScrollTrigger, Framer Motion, Lenis |
| Backend    | Next.js API Routes |
| Database   | MongoDB + Mongoose |
| Auth       | JWT (httpOnly cookies) |
| Email      | Nodemailer |
| Deployment | Vercel + MongoDB Atlas |

---

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx            # Home (cinematic hero + sections)
│   ├── about/              # About page
│   ├── programs/           # Programs page
│   ├── admissions/         # Online admission form
│   ├── franchise/          # Franchise investment page
│   ├── gallery/            # Photo gallery
│   ├── blog/               # Blog listing + [slug]
│   ├── contact/            # Contact page
│   ├── events/             # Events listing
│   ├── summer-camp/        # Summer camp page
│   ├── daycare/            # Daycare program
│   ├── locations/          # Location finder
│   ├── careers/            # Job openings
│   ├── parent-portal/      # Parent portal info
│   ├── privacy-policy/     # Legal
│   ├── terms/              # Legal
│   ├── thank-you/          # Post-form confirmation
│   ├── not-found.tsx       # Custom 404
│   ├── admin/              # Admin panel (protected)
│   │   ├── login/          # Admin login
│   │   ├── dashboard/      # Stats overview
│   │   ├── admissions/     # Manage admission leads
│   │   └── franchise/      # Manage franchise leads
│   └── api/                # API Routes
│       ├── admissions/     # POST/GET admissions
│       ├── franchise/      # POST/GET franchise leads
│       ├── contact/        # POST contact enquiries
│       └── admin/          # Admin auth + stats
├── components/
│   ├── 3d/                 # React Three Fiber components
│   ├── admin/              # Admin panel components
│   ├── animations/         # GSAP, Framer Motion components
│   ├── forms/              # AdmissionForm, FranchiseForm, ContactForm
│   ├── layout/             # Header, Footer
│   ├── providers/          # SmoothScrollProvider (Lenis)
│   ├── sections/           # Page section components
│   └── ui/                 # Button, LogoSVG, SectionBadge
├── lib/
│   ├── auth.ts             # JWT sign/verify
│   ├── db.ts               # MongoDB singleton
│   ├── email.ts            # Nodemailer templates
│   ├── utils.ts            # cn(), formatDate(), etc.
│   └── models/             # Mongoose schemas
└── scripts/
    └── seed.ts             # Admin user seeder
```

---

## Getting Started

### 1. Clone & Install

```bash
git clone <your-repo>
cd little-garimayans
npm install
```

### 2. Environment Variables

Copy `.env.example` to `.env.local` and fill in:

```bash
cp .env.example .env.local
```

Required:
- `MONGODB_URI` — MongoDB Atlas connection string
- `JWT_SECRET` — Random string (32+ chars)
- `EMAIL_USER` / `EMAIL_PASS` — Gmail with App Password
- `ADMIN_EMAIL` — Where admin notifications go

### 3. Seed Admin Account

```bash
npx ts-node -P tsconfig.seed.json src/scripts/seed.ts
```

Default credentials (change immediately!):
- Email: `admin@littlegarimayans.in`
- Password: `Admin@TLG2024!`

### 4. Add Fonts

Place your licensed **All Round Gothic Demi** font files in `public/fonts/`:
- `AllRoundGothicW01-Demi.woff2`
- `AllRoundGothicW01-Demi.woff`

(Purchase from [Fontspring](https://www.fontspring.com))

### 5. Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 6. Admin Panel

Visit [http://localhost:3000/admin/login](http://localhost:3000/admin/login)

---

## Deployment (Vercel)

1. Push to GitHub
2. Connect repo to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy → Done!

MongoDB: Use [MongoDB Atlas](https://cloud.mongodb.com) free tier.

---

## Pages Overview

| Page | Route | Purpose |
|------|-------|---------|
| Home | `/` | Cinematic hero, SPACE framework, programs, franchise teaser |
| About | `/about` | Mission, values, timeline |
| Programs | `/programs` | Playgroup, Nursery, Jr/Sr KG details |
| Admissions | `/admissions` | 4-step admission form |
| Franchise | `/franchise` | Investment models, ROI, franchise form |
| Gallery | `/gallery` | Photo/video masonry grid |
| Blog | `/blog` | Articles, parenting tips |
| Contact | `/contact` | Contact form + info |
| Events | `/events` | Upcoming events |
| Summer Camp | `/summer-camp` | Camp details + registration |
| Daycare | `/daycare` | Daycare timings & features |
| Locations | `/locations` | City-wise center finder |
| Careers | `/careers` | Job openings |
| Parent Portal | `/parent-portal` | Portal info + access |
| Thank You | `/thank-you` | Post-form confirmation |
| 404 | `/not-found` | Custom error page |
| Admin | `/admin/dashboard` | CRM + analytics |

---

## Brand Colors

| Name | Hex |
|------|-----|
| Post Office Red | `#99292D` |
| Golden Saffron | `#FAA21B` |
| Cerise Pink | `#EE3869` |
| Aqua Jade | `#17998F` |
| Steel Blue | `#2D5D8A` |
| Warm Cream | `#F6F1E7` |

---

## License

© 2024 The Little Garimayans Pvt. Ltd. All Rights Reserved.
