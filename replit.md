# Portfolio Website - Namrata Nyamagoudar

## Overview

This is a single-page portfolio website showcasing the work of Namrata Nyamagoudar, an AI/ML engineer specializing in RAG systems, computer vision, and data platforms. The application features a modern dark-themed design with smooth animations and responsive layouts. The site includes sections for professional experience, research projects, featured work with interactive carousels, and contact information.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application uses a modern React-based stack built with Vite for fast development and building. The frontend is structured as a single-page application with smooth scrolling between sections and client-side routing handled by Wouter. The component architecture follows a modular approach with reusable UI components built on top of Radix UI primitives and styled with Tailwind CSS.

**Key Design Decisions:**
- **React + Vite**: Chosen for fast development experience and optimized builds
- **Tailwind CSS**: Provides utility-first styling with consistent design tokens
- **Framer Motion**: Enables smooth animations and transitions throughout the interface
- **Embla Carousel**: Implements dual-level carousel functionality for project showcases
- **Radix UI**: Ensures accessibility compliance with keyboard navigation and focus management

### UI Component System
The application implements a comprehensive design system using shadcn/ui components, providing consistent styling and behavior across all interface elements. The theme system supports both light and dark modes with localStorage persistence and respects user's system preferences.

**Component Structure:**
- Modular sections (Header, Hero, About, Experience, Research, Projects, Contact)
- Reusable UI primitives (buttons, cards, dialogs, forms)
- Accessible carousel components with keyboard navigation
- Responsive design system supporting 360px to 1440px+ viewports

### Data Management
Portfolio content is managed through a centralized data structure that separates content from presentation. This approach enables easy content updates without modifying component logic.

**Content Architecture:**
- Structured TypeScript interfaces for experience, research, and project data
- Centralized portfolio data file with type safety
- Image asset organization with placeholder management system
- Static asset serving for resume and project images

### State Management
The application uses React's built-in state management combined with specialized hooks for theme management and responsive behavior. React Query handles any potential API interactions, though the current implementation is primarily static.

**State Management Approach:**
- Local component state for UI interactions
- Context-based theme management with persistence
- Custom hooks for mobile detection and carousel controls
- Toast notifications for user feedback

### Backend Architecture
The backend implements an Express.js server with a modular route structure and storage abstraction layer. While currently using in-memory storage, the architecture supports easy migration to persistent databases.

**Server Architecture:**
- Express.js with TypeScript for type safety
- Modular route registration system
- Abstract storage interface supporting multiple implementations
- Development/production environment handling with Vite integration

### Development & Build System
The build system supports both development and production environments with optimized bundling and development tools integration.

**Build Configuration:**
- Vite for frontend bundling with React plugin
- ESBuild for server-side bundling in production
- TypeScript compilation with strict type checking
- Development server with hot module replacement and error overlay

## External Dependencies

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework for consistent styling
- **Radix UI**: Accessible component primitives for complex UI elements
- **Framer Motion**: Animation library for smooth transitions and interactions
- **Lucide React**: Icon library providing consistent iconography

### Frontend Libraries
- **React**: Core framework for component-based UI development
- **Wouter**: Lightweight client-side routing
- **React Query**: Data fetching and caching library
- **React Hook Form**: Form management with validation
- **Embla Carousel**: Carousel implementation for project showcases

### Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Type safety and enhanced developer experience
- **ESBuild**: Fast JavaScript bundler for production builds

### Backend Dependencies
- **Express.js**: Web server framework
- **Drizzle ORM**: Type-safe database ORM (configured for PostgreSQL)
- **Neon Database**: Serverless PostgreSQL database service
- **Zod**: Runtime type validation for data schemas

### Database Configuration
The application is configured to use PostgreSQL through Drizzle ORM, specifically set up for Neon's serverless PostgreSQL service. The database schema includes user management tables with UUID primary keys and proper indexing.

### Development Environment
- **Replit Integration**: Custom plugins for development environment support
- **PostCSS**: CSS processing with Tailwind CSS integration
- **Font Integration**: Google Fonts (Inter and JetBrains Mono) for typography