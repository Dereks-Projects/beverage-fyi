# CSS Architecture Guide

## Overview
This project follows a **Component-Scoped CSS Architecture** to ensure maintainability and prevent style conflicts.

## Core Principles

### 1. Component Isolation
Every component's CSS must be scoped to its root container class:

```css
/* ✅ GOOD - Scoped to component */
.wine-results-container .wine-header { }

/* ❌ BAD - Global selector */
.wine-header { }
```

### 2. Naming Conventions

#### Page-Level Classes
- Prefix with `page-` or include `page` in the name
- Example: `wine-page-header`, `wine-page-title`

#### Component Classes
- Start with component name
- Example: `wine-results-container`, `wine-filter-grid`

#### Element Classes
- Use descriptive names within component scope
- Example: `.wine-results-container .wine-item`

### 3. File Organization

```
src/
  styles/
    global.css              # Global resets and variables
    [PageName]Page.css      # Page-specific styles
    components/
      [ComponentName].css   # Component-specific styles
```

## Scoping Pattern Examples

### Component CSS Template
```css
/* Component Root */
.component-name {
  /* root styles */
}

/* Component Elements */
.component-name .element {
  /* element styles */
}

/* Component States */
.component-name .element.active {
  /* state styles */
}
```

### Page CSS Template
```css
/* Page Scope */
[data-page="page-name"] .page-element {
  /* page-specific styles */
}
```

## Common Issues and Solutions

### Issue: Style Bleeding
**Problem:** Component styles affecting other parts of the app
**Solution:** Always scope selectors to component root class

### Issue: Specificity Wars
**Problem:** Competing selectors with same specificity
**Solution:** Use consistent scoping depth (2 levels max)

### Issue: Duplicate Class Names
**Problem:** Same class name used in different contexts
**Solution:** Prefix with component name or use more specific names

## Maintenance Checklist

When adding new CSS:
- [ ] Is the selector scoped to its component?
- [ ] Does the class name follow naming conventions?
- [ ] Are there any global selectors that should be scoped?
- [ ] Is the file in the correct directory?
- [ ] Have you checked for naming conflicts?

## Benefits of This Architecture

1. **Predictable Styles** - Changes to one component won't affect others
2. **Easy Debugging** - Issues are isolated to specific components
3. **Team Scalability** - Multiple developers can work without conflicts
4. **Refactor-Friendly** - Components can be moved/updated independently
5. **Performance** - Browsers can optimize scoped selectors better

## For Buyers/New Developers

This architecture ensures:
- **Low maintenance cost** - Bugs are contained
- **Fast onboarding** - Clear patterns to follow
- **Safe updates** - Changes won't cascade unexpectedly
- **Professional quality** - Industry-standard practices

---

*Last Updated: [Current Date]*
*Architecture Version: 1.0*