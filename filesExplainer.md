
# Pelican Forecasting Group Website - Project Structure

This document provides an overview of the project structure and organization after the codebase cleanup.

## Root Structure

- `src/` - Main source code directory
  - `components/` - Reusable UI components
  - `features/` - Feature-specific components and logic
  - `hooks/` - Custom React hooks
  - `lib/` - Utility functions and helpers
  - `pages/` - Top-level page components
  - `styles/` - Global styles and CSS modules

## Key Directories Explained

### Components

The `components` directory is organized by purpose:

- `components/estimating-maturity/` - Components specific to the Estimating Maturity Assessment
- `components/navigation/` - Navigation components like Navbar, menus
- `components/sections/` - Page section components (Hero, Features, etc.)
- `components/ui/` - Shadcn UI components and custom UI elements

### Features

The `features` directory contains domain-specific features:

- `features/contact/` - Contact form and related components

### Pages

The `pages` directory contains top-level page components that are directly rendered by routes:

- `Index.tsx` - Homepage
- `About.tsx` - About page
- `Contact.tsx` - Contact page
- `EstimatingMaturity.tsx` - Estimating Maturity Assessment page
- `NotFound.tsx` - 404 page
- `Resources.tsx` - Resources page
- `Services.tsx` - Services page

### Styles

The `styles` directory contains global styles:

- `animations.css` - Animation keyframes and utilities
- `base.css` - Base styles and typography
- `components.css` - Component-specific styles
- `index.css` - Main style entry point that imports all other styles
- `utilities.css` - Utility classes

## Best Practices for Future Development

1. **Component Organization**:
   - Keep components small and focused on a single responsibility
   - Group related components in feature-specific folders
   - Use index.ts files to export components for cleaner imports

2. **Style Management**:
   - Use Tailwind CSS for component styling
   - Keep global styles minimal and organized by purpose
   - Use CSS variables for theming and consistent values

3. **Code Reuse**:
   - Extract common logic into custom hooks
   - Create reusable UI components for patterns that appear in multiple places
   - Use composition over inheritance

4. **Performance Optimization**:
   - Lazy load components that aren't needed on initial render
   - Optimize images and assets
   - Use memoization (useMemo, useCallback) for expensive computations
