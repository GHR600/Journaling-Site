# Marketing Website Implementation Guide

## Project Overview
Build a marketing landing page for Journaling app that:
- Collects email addresses for launch waitlist
- Explains the "life intelligence system" positioning
- Matches the app's visual design (dark purple aesthetic, minimalist)
- Uses same Supabase backend for email collection
- Deploys to Vercel as separate project

## Tech Stack
- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Backend:** Supabase (existing project - add new table)
- **Deployment:** Vercel
- **Fonts:** Same as React Native app (check app's font configuration)
- **Icons:** Lucide React (same as app uses lucide-react-native)

## Visual Design Requirements

### Color Palette (Match App)
- **Primary Purple:** Check app's theme colors - likely deep purple (#6B46C1 or similar)
- **Background:** Dark mode - very dark purple/black
- **Text:** Text Primary: #e2e8f0 (light gray), Text Secondary: #94a3b8
- **Accents:** primary #ca8a04 (yellow-600)
- **Success states:** Subtle green for form confirmations

### Typography
Font Family: Inter

Loaded via @expo-google-fonts/inter package
Used weights: 400 (Regular), 600 (SemiBold), 700 (Bold)
Also using Yellowtail_400Regular for the logo/title

Typography in designSystem.ts:
typescriptfontFamily: 'Inter'
Font weights used:

Regular: '400'
SemiBold: '600'
Bold: 'bold' or '700'

Based on the search results, you use Yellowtail for screen headers/titles!


Screen Headers:

Font: Yellowtail_400Regular
Size: 32px (most common) to 42px (subscription screen)
Color: #eab308 (yellow)



### UI Principles
- Minimalist, clean design (like app)
- Ample white space
- Subtle animations (not overdone)
- Mobile-first responsive design
- Fast loading, no heavy assets

## Supabase Setup
- use existing supabase project with following api keys

REACT_APP_SUPABASE_URL=https://jmjjhunfvtxcsttdzcor.supabase.co
SUPABASE_URL=https://jmjjhunfvtxcsttdzcor.supabase.co

### New Table: `waitlist_emails`
```sql
create table waitlist_emails (
  id uuid default gen_random_uuid() primary key,
  email text unique not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  source text, -- optional: track where signup came from
  metadata jsonb -- optional: browser info, utm params, etc.
);

-- RLS Policy: Allow anonymous inserts only
alter table waitlist_emails enable row level security;

create policy "Allow anonymous email signups"
  on waitlist_emails for insert
  to anon
  with check (true);

-- Prevent reading emails (privacy)
create policy "No public reads"
  on waitlist_emails for select
  to anon
  using (false);
```

### Environment Variables
Use same Supabase credentials from main app:
```
NEXT_PUBLIC_SUPABASE_URL=your_existing_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_existing_anon_key
```

## Site Structure

### Pages
1. **Homepage (/)** - Main landing page with email capture
2. **Success (/success)** - Redirect after email submission
3. **Privacy (/privacy)** - Simple privacy policy (optional but good practice)

### Homepage Sections

#### 1. Hero Section (Above Fold)
- **Headline:** Strong positioning statement
  - Example: "Your Intelligence, Amplified"
  - Subheading: "Journalling transforms daily reflections into life insights using AI pattern recognition"
- **Email capture form:** Prominent, clean input + button
- **Visual:** App screenshot showing AI insights (hero image)
- **Launch date:** "Coming to Google Play [Date]"

#### 2. Key Features (3-4 cards)
Feature cards with icons (lucide-react) and brief descriptions:
- **AI Pattern Recognition:** "Discover hidden connections in your thoughts"
- **Health Integration:** "Connect sleep, activity, and mood data"
- **Privacy-First:** "Your data, your control - stored securely"
- **Daily Insights:** "Personalized intelligence from your reflections"

Each card: Icon + Title + 2-sentence description + App screenshot

#### 3. How It Works (Simple 3-step)
Visual flow:
1. Journal your day (show entry screen)
2. AI analyzes patterns (show insights screen)
3. Discover yourself (show analytics/trends)

#### 4. Social Proof (if available)
- Beta tester quotes
- "Join X others on the waitlist" (dynamic counter)
- Or skip if no social proof yet

#### 5. Final CTA
- Repeat email capture
- Brief founder note (builds trust, humanizes)
- Links to contact/social

### Success Page
Simple confirmation:
- "You're on the list!"
- "We'll email you when Journalling launches on [Date]"
- What to expect: "Get early access to premium features"
- CTA: "Follow us on [social]" or "Learn more about our approach"

## Component Structure
```
/app
  layout.tsx          // Root layout with fonts, metadata
  page.tsx            // Homepage
  success/page.tsx    // Success page
  
/components
  HeroSection.tsx     // Hero with email form
  FeatureCard.tsx     // Reusable feature showcase
  EmailForm.tsx       // Email capture component
  Footer.tsx          // Simple footer
  
/lib
  supabase.ts         // Supabase client setup
  
/app/api
  waitlist/route.ts   // POST endpoint for email submission
```

## Email Form Implementation

### Frontend Component (`EmailForm.tsx`)
```typescript
'use client';

import { useState } from 'react';
import { Mail } from 'lucide-react';

export default function EmailForm() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Something went wrong');
      }

      // Redirect to success page
      window.location.href = '/success';
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="...">
      {/* Clean input + button design matching app aesthetic */}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        className="..." // Dark purple theme, clean borders
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Joining...' : 'Join Waitlist'}
      </button>
      {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
    </form>
  );
}
```

### Backend API Route (`/app/api/waitlist/route.ts`)
```typescript
import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Basic validation
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email required' },
        { status: 400 }
      );
    }

    // Insert to Supabase
    const { data, error } = await supabase
      .from('waitlist_emails')
      .insert([{ 
        email: email.toLowerCase().trim(),
        source: 'landing_page',
        metadata: {
          userAgent: request.headers.get('user-agent'),
          timestamp: new Date().toISOString(),
        }
      }])
      .select();

    if (error) {
      // Handle duplicate email gracefully
      if (error.code === '23505') {
        return NextResponse.json(
          { error: 'Email already registered' },
          { status: 409 }
        );
      }
      throw error;
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Waitlist error:', error);
    return NextResponse.json(
      { error: 'Failed to join waitlist' },
      { status: 500 }
    );
  }
}
```

## Styling Guidelines

### Tailwind Config
Extend with app's color palette:
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#6B46C1', // Match app purple
        'primary-dark': '#553C9A',
        background: '#0A0A0F', // Very dark
        card: '#1A1A24', // Slightly lighter for cards
      },
      fontFamily: {
        sans: ['YourAppFont', 'system-ui', 'sans-serif'],
      },
    },
  },
};
```

### Animation
- Subtle fade-ins on scroll (framer-motion or CSS)
- Smooth button hover states
- Form submission loading states
- Keep it minimal - let content shine

## SEO & Metadata

### app/layout.tsx
```typescript
export const metadata = {
  title: 'Journalling - Your Intelligence, Amplified',
  description: 'Transform daily reflections into life insights with AI-powered pattern recognition. Coming soon to Google Play.',
  keywords: 'journaling app, AI journal, mental health, self-reflection, pattern recognition',
  openGraph: {
    title: 'Journalling - Your Intelligence, Amplified',
    description: 'AI-powered journaling for deeper self-understanding',
    images: ['/og-image.png'], // Create this
  },
};
```

## Assets Needed

### From App
- App icon (high-res)
- 3-4 key screenshots (insights, entry, analytics)
- Color values from theme
- Font files (if custom fonts)

### To Create
- Hero screenshot (best insight example)
- Feature illustrations (simple, minimal)
- OG image for social sharing (1200x630px)
- Favicon

## Deployment

### Vercel Setup
1. Push code to GitHub repo: `journalling-marketing`
2. Import to Vercel
3. Add environment variables (Supabase URL + Anon Key)
4. Deploy
5. Connect custom domain if ready

### Environment Variables in Vercel
```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
```

## Launch Checklist
- [ ] Create Supabase table + RLS policies
- [ ] Build and test email form locally
- [ ] Verify email submissions appear in Supabase
- [ ] Test error states (duplicate email, invalid format)
- [ ] Mobile responsive on all devices
- [ ] Fast loading (Lighthouse score 90+)
- [ ] OG tags working (test with social preview tools)
- [ ] Analytics set up (Vercel Analytics or Google Analytics)
- [ ] Custom domain pointed (if ready)
- [ ] Spell check all copy
- [ ] Test on actual phones

## Post-Launch

### Email Collection Management
- Export emails from Supabase when ready to send launch email
- Import to proper email service (ConvertKit, Mailchimp, etc.)
- Craft launch email with download link
- Track conversion: waitlist signup → app install

### Analytics to Track
- Page views
- Email signup conversion rate
- Traffic sources
- Bounce rate
- Time on page

## Content Writing Tips

### Tone
- Empowering, not clinical
- "You discover" not "AI learns"
- Avoid AI jargon - focus on outcomes
- Personal but professional
- Confident in value proposition

### Headlines to Test
- "Your Intelligence, Amplified"
- "Discover Patterns in Your Life"
- "Journaling That Thinks With You"
- "Your Life, Understood"

### Key Messaging
- **Not just journaling** → Life intelligence system
- **Not therapy replacement** → Personal growth tool
- **Not selling data** → Privacy-first, your control
- **Not another app** → Strava for mental health

## Timeline
- **step 1:** Setup Next.js, Supabase table, basic layout
- **step 2:** Build homepage sections, components
- **step 3:** Email form + API, success page, polish
- **step 4:** Test, deploy, verify everything works

## Questions to Resolve
1. What's the exact purple hex code from the app?
2. What font does the app use?
3. Do you have beta tester quotes for social proof?
4. Launch date to display?
5. Do you have app screenshots ready to use?
6. Custom domain ready or using Vercel subdomain?

---

## Implementation Prompt for Claude Code

Use this guide to:
1. Set up the Next.js project structure
2. Create the Supabase table (provide SQL)
3. Build components matching app aesthetic
4. Implement email collection flow
5. Deploy to Vercel

Reference the main app's theme/styling files for exact colors and fonts. Keep it minimal, fast, and conversion-focused.