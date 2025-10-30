# RunAm - Peer-to-Peer Delivery Platform

## Overview

RunAm is a peer-to-peer delivery marketplace platform that connects parcel senders with travelers already heading to the same destination. The platform aims to make deliveries faster, cheaper, and more reliable by leveraging existing travel routes. Starting with a focus on Nigeria (specifically Akwa Ibom), RunAm provides a trust-first approach to package delivery through verified travelers, secure payments, and real-time tracking.

The current implementation consists of a landing page showcasing the platform's value proposition to both senders and travelers, with a mobile-first responsive design emphasizing trust, safety, and transparency.

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