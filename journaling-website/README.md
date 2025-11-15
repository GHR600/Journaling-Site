# Journalling - Marketing Website

A modern, minimalist marketing landing page for the Journalling app built with Next.js 14, Tailwind CSS, and Supabase.

## Features

- 🎨 Dark purple aesthetic matching the mobile app
- 📧 Email waitlist collection with Supabase backend
- 🎯 Conversion-focused landing page design
- 📱 Fully responsive mobile-first design
- ⚡ Fast performance with Next.js 14 App Router
- 🔒 Privacy-first with Row Level Security

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Backend:** Supabase
- **Icons:** Lucide React
- **Fonts:** Inter, Yellowtail (via Google Fonts)
- **Deployment:** Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A Supabase account and project
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd journaling-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your Supabase credentials:
```
NEXT_PUBLIC_SUPABASE_URL=https://jmjjhunfvtxcsttdzcor.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

4. Set up the Supabase database:
   - Go to your Supabase project dashboard
   - Navigate to the SQL Editor
   - Run the SQL script from `supabase-setup.sql`
   - This will create the `waitlist_emails` table with proper RLS policies

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
journaling-website/
├── app/
│   ├── api/
│   │   └── waitlist/
│   │       └── route.ts       # API endpoint for email submissions
│   ├── success/
│   │   └── page.tsx          # Success page after signup
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Homepage
├── components/
│   ├── CTASection.tsx        # Call-to-action section
│   ├── EmailForm.tsx         # Email capture form
│   ├── FeatureCard.tsx       # Feature card component
│   ├── FeaturesSection.tsx   # Features section
│   ├── Footer.tsx            # Footer component
│   ├── HeroSection.tsx       # Hero section
│   └── HowItWorksSection.tsx # How it works section
├── lib/
│   └── supabase.ts           # Supabase client configuration
├── public/                    # Static assets
├── supabase-setup.sql        # Database setup script
└── tailwind.config.ts        # Tailwind configuration
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- AWS Amplify
- Self-hosted with Docker

## Configuration

### Colors

The color palette is defined in `tailwind.config.ts`:
- Primary Purple: `#6B46C1`
- Accent Yellow: `#eab308`
- Background: `#0A0A0F`
- Card: `#1A1A24`

### Fonts

- **Inter:** Body text (weights: 400, 600, 700)
- **Yellowtail:** Display font for branding

Loaded via Google Fonts in `app/globals.css`

## Database Schema

The `waitlist_emails` table structure:

```sql
waitlist_emails (
  id uuid PRIMARY KEY,
  email text UNIQUE NOT NULL,
  created_at timestamp with time zone DEFAULT now(),
  source text,
  metadata jsonb
)
```

## Security

- Row Level Security (RLS) enabled
- Anonymous users can only INSERT emails
- Email reading is restricted (privacy)
- Email validation on both frontend and backend
- Duplicate email prevention

## Managing Waitlist Emails

To export waitlist emails from Supabase:

1. Go to Supabase Dashboard → Table Editor
2. Select `waitlist_emails` table
3. Click "Export" → CSV
4. Import to your email service provider (Mailchimp, ConvertKit, etc.)

## Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Adding New Features

- Add components in `/components`
- Create new pages in `/app`
- Add API routes in `/app/api`
- Update styles in `tailwind.config.ts`

## License

Private project for Journalling app.

## Support

For issues or questions, please contact the development team.
