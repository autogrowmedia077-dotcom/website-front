# Complete Automation Package Landing Page

## Overview

This is a premium high-converting landing page for a digital automation package built with React, Vite, TypeScript, and modern web technologies. The application features a dark theme with glassmorphism effects, designed to maximize conversions for a ₹399 automation product with lifetime access.

The project follows a full-stack architecture with a React frontend, Express.js backend, and PostgreSQL database integration through Drizzle ORM. The landing page includes interactive components like countdown timers, testimonial sliders, and FAQ sections to drive user engagement and conversions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with custom CSS variables for consistent theming
- **UI Components**: shadcn/ui component library providing accessible, customizable components
- **Animations**: Framer Motion for smooth, performant animations and transitions
- **Icons**: Lucide React for consistent iconography
- **State Management**: TanStack Query for server state management and caching
- **Routing**: Wouter for lightweight client-side routing

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules for modern JavaScript features
- **Development**: tsx for TypeScript execution in development
- **Build**: esbuild for fast production builds
- **Middleware**: Custom logging middleware for API request tracking

### Database Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL with Neon serverless hosting
- **Migrations**: Drizzle Kit for schema migrations and database management
- **Schema**: Shared schema definitions between client and server

### Development Architecture
- **Monorepo Structure**: Organized with separate `client/`, `server/`, and `shared/` directories
- **Path Aliases**: TypeScript path mapping for clean imports (`@/`, `@shared/`)
- **Hot Reload**: Vite HMR for instant development feedback
- **Type Checking**: Full TypeScript coverage across frontend and backend

### Styling System
- **Theme**: Dark mode with CSS custom properties for consistent theming
- **Design System**: Glassmorphism effects with premium gradients and glows
- **Responsive**: Mobile-first design with Tailwind's responsive utilities
- **Components**: Reusable UI components with variants using class-variance-authority

### Performance Optimizations
- **Code Splitting**: Automatic code splitting through Vite
- **Asset Optimization**: Vite's built-in asset optimization and bundling
- **Query Caching**: TanStack Query for intelligent data fetching and caching
- **Image Optimization**: Proper asset handling through Vite's asset pipeline

## External Dependencies

### UI and Styling
- **@radix-ui/***: Comprehensive set of accessible UI primitives for complex components
- **tailwindcss**: Utility-first CSS framework for rapid styling
- **class-variance-authority**: Type-safe component variants
- **framer-motion**: Animation library for smooth, performant animations
- **lucide-react**: Consistent icon library

### Data Management
- **@tanstack/react-query**: Server state management and caching
- **drizzle-orm**: Type-safe ORM for database operations
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **drizzle-zod**: Schema validation integration

### Development Tools
- **vite**: Fast build tool and development server
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundler for production
- **@replit/vite-plugin-runtime-error-modal**: Development error handling

### Backend Infrastructure
- **express**: Web application framework
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### Form Handling
- **react-hook-form**: Performant forms with minimal re-renders
- **@hookform/resolvers**: Validation resolvers for form validation

### Utilities
- **date-fns**: Date manipulation utilities
- **clsx**: Conditional className utility
- **cmdk**: Command palette component