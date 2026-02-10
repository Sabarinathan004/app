# WinqVision - Digital Advertisement Shooting Company Landing Page

## Project Overview
**Company Name:** WinqVision
**Project Type:** Premium Landing Page for Digital Advertisement Shooting Company
**Brand Colors:** Red (#dc2626) primary + minimal black/white/grey theme
**Date Created:** December 10, 2025

## Original Problem Statement
Design a modern, minimal, eye-catchy landing page for a digital advertisement shooting company that specializes in commercial video shoots, brand films, product ads, and social media creatives.

## User Personas
1. **Brand Marketing Directors** - Looking for premium video production services for their campaigns
2. **Small Business Owners** - Seeking professional ad content for product launches
3. **Creative Agencies** - Outsourcing video production to specialized studios
4. **E-commerce Companies** - Need product videos for online platforms

## Core Requirements (Static)

### Design Requirements
- Minimal, premium, cinematic look
- Clean layout with lots of white space
- Bold typography
- Dark or neutral background with high-contrast visuals
- Smooth micro-animations and subtle transitions
- Professional, creative, high-end agency vibe
- Mobile-first responsive design

### Sections Required
1. **Hero Section** - Full-width cinematic background with strong headline and CTAs
2. **Portfolio/Our Works** - Grid layout with categories and hover effects
3. **About Us** - Short, impactful company description
4. **Testimonials** - Client reviews with ratings and photos
5. **Contact/Enquiry Form** - Simple form with email functionality
6. **Location Section** - Studio address and map
7. **Footer** - Social links, contact info, navigation

## What's Been Implemented ✅

### Phase 1: Frontend with Mock Data (December 10, 2025)

#### Components Created
1. **Navbar.jsx** - Fixed navigation with smooth scroll, mobile menu
2. **HeroSection.jsx** - Cinematic hero with stats, CTAs, scroll indicator
3. **Portfolio.jsx** - 8-item grid with category filters (Product Ads, Brand Films, Social Media Ads, Commercial Shoots)
4. **About.jsx** - Company story with 4 feature cards, client logos section
5. **Testimonials.jsx** - 3 client testimonials with 5-star ratings, stats section
6. **Contact.jsx** - Enquiry form (currently MOCK - shows toast notification only)
7. **Footer.jsx** - Complete footer with social links, quick links, contact info

#### Features
- Smooth scroll navigation
- Category filtering in portfolio
- Hover effects and animations
- Mobile responsive design
- Toast notifications (using Sonner)
- Professional stock images from Unsplash

#### Design System
- Primary Color: Red (#dc2626)
- Background: Black (#000000) and Zinc shades
- Typography: System fonts with bold headlines
- Animations: Hover transforms, smooth transitions
- Icons: Lucide React library

## Prioritized Backlog

### P0 Features (High Priority)
1. **Backend Email Integration** - Contact form should send actual emails
   - Integrate email service (Nodemailer/SendGrid/AWS SES)
   - Store enquiries in MongoDB
   - Send confirmation email to client
   - Send notification email to business

2. **Video Background for Hero** - Replace static image with looping video reel
   - Add video element with autoplay and loop
   - Optimize video for web delivery
   - Fallback poster image for mobile

### P1 Features (Medium Priority)
1. **Portfolio Modal/Video Player** - Click to view full projects
   - Modal popup for project details
   - Video player integration
   - Project case studies

2. **Client Logo Updates** - Replace "BRAND 01-05" with actual logos
   - Source client logos or create placeholder designs

3. **Google Maps Integration** - Real embedded map for studio location

### P2 Features (Nice to Have)
1. **Admin Dashboard** - Manage portfolio items, testimonials
2. **Blog Section** - Behind-the-scenes content, industry insights
3. **Newsletter Signup** - Capture leads
4. **Analytics Integration** - Google Analytics/tracking
5. **SEO Optimization** - Meta tags, structured data
6. **Performance Optimization** - Image lazy loading, code splitting

## Next Tasks
1. ✅ Frontend created with mock data
2. ⏭️ **NEXT:** Implement backend email integration for contact form
3. ⏭️ Add video background to hero section
4. ⏭️ Create portfolio modal with video player
5. ⏭️ Integrate Google Maps for location

## Technical Stack
- **Frontend:** React, TailwindCSS, Lucide Icons, Sonner (toasts)
- **Backend:** FastAPI, MongoDB (to be implemented)
- **Email Service:** To be decided (SendGrid/Nodemailer/AWS SES)
- **Hosting:** TBD

## Notes
- Contact form currently shows mock success toast
- Portfolio items link to placeholder actions
- Video background needs actual video file
- All testimonials and stats are sample data
- Client logos are placeholders
