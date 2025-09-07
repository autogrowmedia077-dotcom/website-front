# Complete Automation Package Landing Page

## Overview

This is a premium high-converting landing page for a digital automation package built with React, Vite, TypeScript, and modern web technologies. The application features a dark theme with glassmorphism effects, designed to maximize conversions for a ₹399 automation product with lifetime access.

The project is a frontend-only application built with React and modern web technologies. The landing page includes interactive components like countdown timers, testimonial sliders, and FAQ sections to drive user engagement and conversions.

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
- **State Management**: TanStack Query for client state management and caching
- **Routing**: Wouter for lightweight client-side routing

### Development Architecture
- **Frontend Structure**: Organized with `client/` directory containing all frontend code
- **Path Aliases**: TypeScript path mapping for clean imports (`@/`)
- **Hot Reload**: Vite HMR for instant development feedback
- **Type Checking**: Full TypeScript coverage across the frontend

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
- **@tanstack/react-query**: Client state management and caching

### Development Tools
- **vite**: Fast build tool and development server
- **@replit/vite-plugin-runtime-error-modal**: Development error handling

### Form Handling
- **react-hook-form**: Performant forms with minimal re-renders
- **@hookform/resolvers**: Validation resolvers for form validation

### Utilities
- **date-fns**: Date manipulation utilities
- **clsx**: Conditional className utility
- **cmdk**: Command palette component
