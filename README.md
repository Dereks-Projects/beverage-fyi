# Beverage.fyi

Professional beverage education platform providing comprehensive resources for industry professionals and enthusiasts.

## Overview

Beverage.fyi delivers expert-curated beverage knowledge through an intuitive web platform featuring a terminology database, wine recommendations, cocktail recipes, and educational articles. Built by a 20-year hospitality veteran for the modern beverage professional.

**Live Site**: [https://beverage.fyi](https://beverage.fyi)

## Features

### Content Systems
- **Terminology Database**: 1000+ searchable beverage terms (A-Z)
- **Article Platform**: Dynamic educational articles with category filtering
- **Wine Recommendations**: Smart pairing suggestions by preference
- **Cocktail Library**: Curated classic and modern recipes
- **Article Carousel**: Homepage feature showcasing latest content
- **Mobile-First Design**: Optimized for on-the-go reference

### Technical Features
- React 18.3 with React Router 7
- Vite build system for instant HMR
- Google Analytics integration (ID: G-87NHCW30CX)
- SEO-optimized architecture
- Responsive breakpoints (mobile/tablet/desktop)
- Custom component library with reusable UI elements

## Tech Stack

```
Frontend:     React 18.3.1
Build:        Vite 6.0.5  
Routing:      React Router DOM 7.1.1
Styling:      Custom CSS (mobile-first)
Icons:        React Icons 5.4.0
Analytics:    Google Analytics 4
Hosting:      Vercel
```

## Quick Start

```bash
# Install dependencies
npm install

# Development server (localhost:5173)
npm run dev

# Production build
npm run build

# Preview production
npm run preview
```

## Project Structure

```
beverage.fyi/
├── src/
│   ├── pages/              # Page components
│   │   ├── HomePage.jsx
│   │   ├── ExploreArticles.jsx
│   │   ├── ArticlePage.jsx
│   │   ├── TerminologyPage.jsx
│   │   ├── WineRecommendationsPage.jsx
│   │   ├── CocktailPage.jsx
│   │   └── AboutPage.jsx
│   ├── components/         # Reusable components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── MobileNav.jsx
│   │   ├── ArticleCard.jsx
│   │   ├── FeaturedArticle.jsx
│   │   └── ArticleCarousel.jsx
│   ├── data/              # Content data
│   │   ├── articles/      # Article JSON files
│   │   ├── articleData.js # Article aggregator
│   │   ├── A-Z.json       # Terminology database
│   │   └── cocktails.json # Cocktail recipes
│   └── styles/            # Component CSS
├── public/
│   └── blog-images/       # Article images
└── index.html
```

## Navigation Structure

### Desktop
- Header: Home • Articles • Terminology • Wine • Cocktails • About
- Search: "Search Beverage Terms" (1000+ terms)

### Mobile  
- Hamburger Menu: All navigation links
- Bottom Nav: Quick access to primary sections (Home, Articles, Terminology, Wine, Cocktails)
- Pure black UI with yellow (#FCD128) accents

## Homepage Sections

1. **Hero**: Video introduction with CTAs
2. **Opportunity**: Industry value proposition
3. **Platform Features**: Core tools overview
4. **Value Proposition**: Transformation messaging
5. **Fresh Perspectives**: Article carousel (3 latest)
6. **Vision**: About the founder
7. **CTA**: Call to action
8. **Footer**: Site links and copyright

## Article System

The article platform features:
- Featured article highlighting
- Category filtering (Wine/Beer/Spirits/Cannabis)
- Responsive card grid
- Rich content formatting
- SEO-friendly URLs
- Horizontal scroll carousel on homepage

See `ARTICLES-README.md` for detailed documentation.

## Development

### Code Standards
- Components: PascalCase naming
- Styles: Component-specific CSS files
- Data: JSON-based content management
- Mobile-first responsive design
- Accessibility: Semantic HTML, proper ARIA labels

### Key Files
- `App.jsx` - Route definitions
- `articleData.js` - Article aggregation logic
- `Header.jsx` - Global navigation with hamburger menu
- `MobileNav.jsx` - Mobile bottom navigation
- `ArticleCarousel.jsx` - Homepage article showcase

## Current Article Count
- 7 published articles across 4 categories
- Articles numbered by publication order
- Featured article system based on article number

## Deployment

Automatic deployment via Vercel on main branch push.

```bash
# Manual deployment
vercel --prod
```

## Analytics

Google Analytics 4 integrated (ID: G-87NHCW30CX)
- Page views and user engagement
- Search queries tracking
- Category filtering analytics
- Article read metrics

## Known Issues & Future Enhancements

### Completed ✅
- Article system implementation
- Mobile hamburger menu
- Article carousel on homepage
- Category filtering
- Responsive design optimization

### Planned
- The Beverage Compass book integration (coming soon)
- User accounts and saved preferences
- Advanced search functionality
- Newsletter integration

## Author

**Derek Engles**  
20+ year hospitality professional | Sommelier | Wine Director  
Email: derekengles@gmail.com
Available for consulting and speaking engagements

## The Beverage Compass

Companion to the book "The Beverage Compass: A Modern Guide to the World of Drinks"  
Available on [Amazon Kindle](https://www.amazon.com/dp/B0FQD4X2JT)

## License

© 2025 Derek Engles. All Rights Reserved.  
Proprietary software - no unauthorized use.

---

**Version**: 2.1.0  
**Status**: Production  
**Last Updated**: October 2025  
**Session Notes**: Homepage redesign with article carousel integration complete