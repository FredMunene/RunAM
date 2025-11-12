# RunAm - Peer-to-Peer Delivery Platform

## Overview

RunAm is a peer-to-peer delivery marketplace platform that connects parcel senders with travelers already heading to the same destination. The platform aims to make deliveries faster, cheaper, and more reliable by leveraging existing travel routes. Starting with a focus on Nigeria (specifically Akwa Ibom), RunAm provides a trust-first approach to package delivery through verified travelers, secure payments, and real-time tracking.

## Current MVP Status (UI-Only with Dummy Data)

The application is now a **functional UI-only MVP** ready for user testing and demonstration. All features use client-side state and dummy data - no backend/database integration yet.

**Completed Interactive Features:**
- ✅ Landing page with responsive design and call-to-action buttons
- ✅ Sign-up flow with multi-step form validation (NIN, email, phone, password strength)
- ✅ Simulated SMS phone verification (demo code: 123456)
- ✅ Sign-in flow with form validation
- ✅ Complete parcel booking workflow (form → find travelers → select → confirm → view bookings)
- ✅ Transaction limits ($50 for new users) with UI enforcement
- ✅ Traveler cards with star ratings (4.5-5.0 scale)
- ✅ Analytics dashboard with charts and metrics
- ✅ Toast notifications for user feedback throughout the app

**Security & Validation:**
- NIN: 11-digit Nigerian format validation
- Phone: Nigerian format validation (supports 0803..., +234803..., or 803... formats)
- Email: Standard email validation
- Password: Minimum 8 characters, requires 2 of: lowercase, uppercase, numbers, symbols
- Transaction limits: $50 cap for new users enforced in UI

**MVP Notes for Future Integration:**
- SMS Verification: Currently simulated. User declined Twilio integration setup. When ready for production, can integrate Twilio or Nigerian SMS provider (e.g., Termii, BulkSMS Nigeria) with API keys stored as secrets.
- NIN Verification: Format validation only. For real verification, integrate with NIMC API or third-party verification services.
- Authentication: Forms validate and navigate to dashboards, but no actual auth backend yet.
- Payments: Displays USDC pricing with 20% platform commission, but no Solana/blockchain integration yet.
- Data Persistence: All bookings, user data stored in React state only - resets on page refresh.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, providing fast HMR (Hot Module Replacement)
- **Wouter** for lightweight client-side routing (currently only landing page and 404)
- **TanStack Query (React Query)** for server state management and data fetching

**UI Component System**
- **Shadcn/ui** component library built on Radix UI primitives, providing accessible and customizable components
- **Tailwind CSS** for utility-first styling with custom design tokens
- **Class Variance Authority (CVA)** for component variant management
- Custom color scheme defined for RunAm brand: primary green (#2D8A54), brand yellow (#FFD700), and navy (#1A2332)

**Design Philosophy**
- Mobile-first responsive design targeting Nigerian users who primarily access via mobile
- Trust-first approach with emphasis on safety, verification, and transparency
- Component-based architecture with reusable UI elements
- Design guidelines documented in `design_guidelines.md` emphasizing modern fintech aesthetics

**Project Structure**
- `/client/src/components` - Reusable UI components (Navigation, Hero, Footer, etc.)
- `/client/src/components/ui` - Shadcn UI component library
- `/client/src/pages` - Page-level components (Landing, NotFound)
- `/client/src/hooks` - Custom React hooks
- `/client/src/lib` - Utility functions and query client configuration

### Backend Architecture

**Server Framework**
- **Express.js** server with TypeScript
- Custom Vite middleware integration for development with HMR
- Structured to serve the built React application in production
- API routes prefixed with `/api` (currently minimal implementation)

**Application Structure**
- `/server/index.ts` - Main server entry point with middleware setup
- `/server/routes.ts` - API route registration (currently stub)
- `/server/storage.ts` - Data access layer with in-memory storage implementation

**Storage Layer**
- Interface-based storage design (`IStorage`) for flexibility
- Current implementation uses in-memory storage (`MemStorage`)
- Designed to be swapped with database implementation (Drizzle ORM ready)

### Data Layer

**ORM & Database**
- **Drizzle ORM** configured for PostgreSQL (via `@neondatabase/serverless`)
- Schema defined in `/shared/schema.ts` with Zod validation
- Currently minimal schema with just a `users` table
- Migration support configured via `drizzle-kit`

**Schema Design**
- User entity with username/password (baseline authentication setup)
- Uses Drizzle-Zod integration for type-safe validation schemas
- Prepared for expansion to include parcels, travelers, trips, ratings, etc.

### Authentication & Security

**Current State**
- Basic user schema defined but no authentication implemented yet
- Prepared for session-based authentication (connect-pg-simple dependency present)
- Password storage ready (will need hashing implementation)

**Planned Security Features** (based on landing page messaging)
- Verified user identities
- Escrow payment system
- Rating and review system
- Background checks for travelers

## External Dependencies

### Third-Party Services

**UI & Component Libraries**
- Radix UI (complete primitive set for accessible components)
- Lucide React (icon library)
- Embla Carousel (image carousels)
- React Hook Form with Zod resolvers (form validation)

**Development Tools**
- Replit-specific plugins for development environment integration
- TypeScript for type safety across the stack
- ESBuild for production bundling

### Database & Infrastructure

**Database**
- Configured for **Neon Database** (serverless PostgreSQL)
- Connection via `@neondatabase/serverless` package
- Database URL expected via `DATABASE_URL` environment variable

**Asset Management**
- Static assets stored in `/attached_assets` directory
- Images for logo, hero backgrounds, and feature illustrations
- Survey forms (text files) suggesting user research phase

### Styling & Design

**CSS Framework**
- Tailwind CSS with custom configuration
- PostCSS for CSS processing
- Custom CSS variables for theming (light/dark mode ready)
- Shadcn/ui "new-york" style preset

### State Management

**Client-Side State**
- TanStack Query for server state with custom query client configuration
- Built-in caching and refetching strategies
- Error handling via custom query functions
- 401 handling with configurable behavior

### Build & Deployment

**Build Process**
- Vite builds client to `/dist/public`
- ESBuild bundles server to `/dist`
- Development runs via tsx for TypeScript execution
- Production uses compiled JavaScript

**Environment Configuration**
- `NODE_ENV` for environment detection
- Database URL required for database operations
- Replit-specific environment variables supported