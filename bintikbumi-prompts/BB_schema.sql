-- ============================================================
-- BINTIKBUMI — Supabase Schema
-- Run this in your Supabase SQL Editor
-- Site: bintikbumi.id
-- ============================================================

CREATE TABLE bintikbumi_contact_submissions (
  id               UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at       TIMESTAMPTZ DEFAULT NOW(),

  -- Personal info
  first_name       TEXT NOT NULL,
  last_name        TEXT NOT NULL,
  email            TEXT NOT NULL,
  country_code     TEXT,
  phone_number     TEXT,
  full_phone       TEXT,

  -- Location
  country          TEXT,
  province         TEXT,
  city             TEXT,

  -- Inquiry context
  role             TEXT,
  -- 'Individual Buyer' | 'Interior Designer' | 'Architect' |
  -- 'Contractor / Developer' | 'Retail Partner' | 'Investor' |
  -- 'Media' | 'Other'

  product_interest TEXT,
  -- 'Panels' | 'Tiles' | 'Furniture' | 'Custom' | 'All Products'

  kategori         TEXT,
  -- 'Product Inquiry' | 'Custom Order' | 'Wholesale / B2B' |
  -- 'Design Collaboration' | 'Partnership' | 'Media & Press' |
  -- 'General Inquiry'

  pesan            TEXT
  -- Optional additional message
);

-- ── Row Level Security ────────────────────────────────────
ALTER TABLE bintikbumi_contact_submissions ENABLE ROW LEVEL SECURITY;

-- Anyone can submit (public insert)
CREATE POLICY "Allow public insert"
  ON bintikbumi_contact_submissions
  FOR INSERT
  WITH CHECK (true);

-- Only authenticated users (you) can read
CREATE POLICY "Allow authenticated read"
  ON bintikbumi_contact_submissions
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- ── Useful Dashboard Queries ──────────────────────────────

-- All submissions, newest first
-- SELECT * FROM bintikbumi_contact_submissions
-- ORDER BY created_at DESC;

-- This month's submissions
-- SELECT * FROM bintikbumi_contact_submissions
-- WHERE created_at >= date_trunc('month', NOW())
-- ORDER BY created_at DESC;

-- Count by inquiry category
-- SELECT kategori, COUNT(*) as total
-- FROM bintikbumi_contact_submissions
-- GROUP BY kategori
-- ORDER BY total DESC;

-- Count by role type
-- SELECT role, COUNT(*) as total
-- FROM bintikbumi_contact_submissions
-- GROUP BY role
-- ORDER BY total DESC;

-- Count by product interest
-- SELECT product_interest, COUNT(*) as total
-- FROM bintikbumi_contact_submissions
-- GROUP BY product_interest
-- ORDER BY total DESC;

-- Custom orders specifically
-- SELECT first_name, last_name, email, full_phone, pesan, created_at
-- FROM bintikbumi_contact_submissions
-- WHERE kategori = 'Custom Order'
-- ORDER BY created_at DESC;

-- Wholesale/B2B inquiries
-- SELECT first_name, last_name, email, full_phone, province, city, pesan, created_at
-- FROM bintikbumi_contact_submissions
-- WHERE kategori = 'Wholesale / B2B'
-- ORDER BY created_at DESC;
