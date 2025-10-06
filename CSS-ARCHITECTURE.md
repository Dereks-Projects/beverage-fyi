# CSS Architecture Guide

## Overview
This project follows a **Component-Scoped CSS Architecture** with a mobile-first responsive approach to ensure maintainability, performance, and prevent style conflicts.

## Core Principles

### 1. Mobile-First Development
All styles are written for mobile devices first, with desktop enhancements added via media queries:

```css
/* Mobile styles (default) */
.component {
  padding: 20px;
  font-size: 14px;
}

/* Desktop enhancement */
@media (min-width: 768px) {
  .component {
    padding: 40px;
    font-size: 16px;
  }
}
```

**Rule:** Never use `max-width` media queries unless absolutely necessary.

### 2. Component Isolation
Every component's CSS must be scoped to prevent global pollution:

```css
/* ✅ CORRECT - Scoped to component */
.hero-section { }
.hero-section .hero-button { }
.hero-section .hero-title { }

/* ❌ INCORRECT - Global selector */
.button { }
.title { }
```

### 3. Naming Conventions

#### Page-Level Classes
- Use descriptive, unique names for page containers
- Examples: `.homepage`, `.terminology-page`, `.cocktail-page`

#### Section Classes
- Use semantic section names with `-section` suffix
- Examples: `.hero-section`, `.problem-section`, `.stats-section`

#### Component Classes
- Start with component name, use descriptive modifiers
- Examples: `.wine-filter-grid`, `.cocktail-results-list`

#### Element Classes
- Scope within parent component using consistent prefixes
- Examples: `.hero-section .hero-title`, `.feature-card .feature-icon`

## File Organization

```
src/
├── styles/
│   ├── global.css                 # Global resets, fonts, CSS variables
│   ├── desktop.css                # Global desktop overrides
│   ├── HomePage.css               # Page-specific styles
│   ├── TerminologyPage.css
│   ├── WineRecommendationsPage.css
│   ├── CocktailPage.css
│   ├── Header.css                 # Component styles
│   ├── Footer.css
│   ├── SearchBar.css
│   └── [ComponentName].css
```

## Design System

### Color Palette
```css
:root {
  /* Primary Colors */
  --primary-gold: #FFB800;
  --primary-gold-hover: #E5A500;
  
  /* Text Colors */
  --text-dark: #1a1a1a;
  --text-light: white;
  --text-muted: #666;
  
  /* Background Colors */
  --bg-white: white;
  --bg-light-gray: #f8f8f8;
  --bg-medium-gray: #f0f0f0;
  
  /* Utility Colors */
  --shadow-dark: rgba(0, 0, 0, 0.3);
  --shadow-light: rgba(0, 0, 0, 0.08);
}
```

### Typography Scale
```css
/* Mobile */
--font-size-small: 14px;
--font-size-body: 16px;
--font-size-large: 18px;
--font-size-h3: 24px;
--font-size-h2: 28px;
--font-size-h1: 32px;

/* Desktop (in media query) */
--font-size-small: 15px;
--font-size-body: 18px;
--font-size-large: 20px;
--font-size-h3: 28px;
--font-size-h2: 36px;
--font-size-h1: 42px;
```

### Spacing System
```css
/* Consistent spacing units */
--space-xs: 10px;
--space-sm: 15px;
--space-md: 20px;
--space-lg: 40px;
--space-xl: 60px;
--space-2xl: 80px;

/* Section padding */
--section-padding-mobile: 60px 20px;
--section-padding-desktop: 80px 40px;

/* Container max-width */
--container-max: 1200px;
```

## Component CSS Template

```css
/* =========================
   Component Name - Mobile First
   ========================= */

/* Component Root */
.component-name {
  /* Layout */
  display: flex;
  padding: var(--space-md);
  
  /* Styling */
  background: var(--bg-white);
  
  /* Typography */
  font-size: var(--font-size-body);
}

/* Component Elements */
.component-name .element {
  /* Scoped element styles */
}

.component-name .element-modifier {
  /* Modified element styles */
}

/* Component States */
.component-name.is-active {
  /* Active state styles */
}

.component-name .element:hover {
  /* Hover state styles */
}

/* =========================
   Desktop Overrides
   ========================= */
@media (min-width: 768px) {
  .component-name {
    padding: var(--space-lg);
    font-size: var(--font-size-body);
  }
  
  .component-name .element {
    /* Desktop-specific overrides */
  }
}
```

## Button System

```css
/* Base button styles */
.btn-base {
  padding: 14px 24px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Poppins', sans-serif;
}

/* Button variants */
.btn-primary { }      /* Gold background */
.btn-secondary { }    /* Transparent with border */
.btn-dark { }         /* Dark background */
.btn-dark-outline { } /* Dark border, transparent */
```

## Common Patterns

### Section Structure
```css
.section-name {
  padding: var(--section-padding-mobile);
  background: var(--bg-white);
}

.section-container {
  max-width: var(--container-max);
  margin: 0 auto;
}

@media (min-width: 768px) {
  .section-name {
    padding: var(--section-padding-desktop);
  }
}
```

### Grid Layouts
```css
/* Mobile: Stack */
.grid-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

/* Desktop: Multiple columns */
@media (min-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
}
```

## Specificity Guidelines

1. **Maximum nesting depth:** 2 levels
2. **Avoid ID selectors** for styling
3. **No !important** unless absolutely necessary
4. **Use CSS variables** for repeated values

## Performance Considerations

1. **Minimize selector depth** for faster rendering
2. **Group media queries** at the end of each component
3. **Use CSS variables** to reduce repetition
4. **Avoid universal selectors** (* selector)

## Maintenance Checklist

When adding new CSS:
- [ ] Written mobile-first with desktop overrides?
- [ ] Scoped to component/section root class?
- [ ] Following naming conventions?
- [ ] Using design system variables?
- [ ] No global selectors?
- [ ] Media queries grouped at end?
- [ ] No conflicts with existing classes?

## Common Issues and Solutions

### Issue: Style Bleeding
**Problem:** Styles affecting unintended elements  
**Solution:** Always scope to component root class

### Issue: Inconsistent Spacing
**Problem:** Random padding/margin values  
**Solution:** Use spacing variables consistently

### Issue: Desktop-First Thinking
**Problem:** Writing desktop styles then trying to scale down  
**Solution:** Always start with mobile, enhance for desktop

### Issue: Specificity Wars
**Problem:** Competing selectors requiring !important  
**Solution:** Maintain consistent selector depth (2 levels max)

## Migration Notes

When updating existing components:
1. Check if mobile-first approach is used
2. Replace hardcoded values with variables
3. Ensure proper scoping
4. Test at multiple breakpoints

---

**Architecture Version:** 2.0  
**Last Updated:** October 2025  
**Breakpoint:** 768px (tablet/desktop boundary)