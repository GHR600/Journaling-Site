-- Supabase Database Setup for Journalling Waitlist
-- Run this SQL in your Supabase SQL Editor

-- Create the waitlist_emails table
create table waitlist_emails (
  id uuid default gen_random_uuid() primary key,
  email text unique not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  source text, -- optional: track where signup came from
  metadata jsonb -- optional: browser info, utm params, etc.
);

-- Enable Row Level Security
alter table waitlist_emails enable row level security;

-- Policy: Allow anonymous inserts only
create policy "Allow anonymous email signups"
  on waitlist_emails for insert
  to anon
  with check (true);

-- Policy: Prevent reading emails (privacy)
create policy "No public reads"
  on waitlist_emails for select
  to anon
  using (false);

-- Optional: Create an index on email for faster lookups
create index idx_waitlist_emails_email on waitlist_emails(email);

-- Optional: Create an index on created_at for sorting
create index idx_waitlist_emails_created_at on waitlist_emails(created_at desc);

-- View the table structure
\d waitlist_emails
