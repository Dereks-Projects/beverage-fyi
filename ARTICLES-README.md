# Article System Documentation

## Overview
The article system for beverage.fyi provides a content platform for in-depth beverage education articles. Built with React and React Router, it features a main listing page with category filtering, featured article highlighting, and individual article pages with rich content formatting.

## Current Status: PRODUCTION READY ✅
- Full article system implemented and tested
- Navigation integrated (desktop and mobile)
- 7 launch articles live
- Google Analytics tracking active (ID: G-87NHCW30CX)

## File Structure
```
beverage.fyi/
├── src/
│   ├── data/
│   │   ├── articleData.js              # Aggregates all articles
│   │   └── articles/                   # JSON article files
│   │       ├── 1-cannabis1-article.json
│   │       ├── 2-chardonnay1-article.json
│   │       ├── 3-amaro1-article.json
│   │       ├── 4-gin1-article.json
│   │       ├── 5-liqueur1-article.json
│   │       ├── 6-trappistale1-article.json
│   │       └── 7-scotch1-article.json
│   ├── pages/
│   │   ├── ExploreArticles.jsx         # Main articles listing page
│   │   └── ArticlePage.jsx             # Individual article display
│   ├── components/
│   │   ├── ArticleCard.jsx             # Article preview card
│   │   └── FeaturedArticle.jsx         # Hero featured article
│   └── styles/
│       ├── ExploreArticles.css
│       ├── ArticlePage.css
│       ├── ArticleCard.css
│       └── FeaturedArticle.css
└── public/
    └── blog-images/                    # Article images
        ├── 1-whisky-hero.jpg
        ├── 1-whisky-body.jpg
        └── [...more images]
```

## JSON Article Schema

Each article JSON file must include these fields:

```json
{
  "title": "string",                  // Main article title
  "subtitle": "string",               // Secondary title/tagline
  "category": "string",               // Main category (Wine, Beer, Spirits, Cannabis)
  "subcategory": "string",            // Specific subcategory (e.g., "Scotch")
  "author": "string",                 // Author name
  "articlenumber": number,            // Determines order (highest = featured)
  "heroImage": "string",              // Path to hero image (/blog-images/...)
  "heroImageAlt": "string",           // Alt text for hero image
  "introductionparagraph": "string",  // Opening paragraph
  "paragraph1title": "string",        // First section title
  "paragraph1": "string",             // First section content
  "bodyquote": "string",              // Pull quote (displayed prominently)
  "paragraph2title": "string",        // Second section title
  "paragraph2": "string",             // Second section content
  "bodyImage": "string",              // Path to body image (/blog-images/...)
  "bodyImageAlt": "string",           // Alt text for body image
  "paragraph3title": "string",        // Third section title
  "paragraph3": "string",             // Third section content
  "conclusion": "string"              // Conclusion paragraph
}
```

## Adding New Articles

### Step 1: Prepare Article Content
1. Write your article following the JSON schema above
2. Ensure articlenumber is higher than existing articles (for featured placement)
3. Choose appropriate category and subcategory

### Step 2: Prepare Images
1. **Hero Image**: 
   - Recommended: 1920x1080px minimum
   - Format: JPG for photos, optimize for web (~200-300KB)
   - Naming: `[number]-[topic]-hero.jpg`

2. **Body Image**: 
   - Recommended: 1200x800px minimum
   - Format: JPG for photos, optimize for web (~150-200KB)
   - Naming: `[number]-[topic]-body.jpg`

3. Place images in `/public/blog-images/`

### Step 3: Create JSON File
1. Create new file in `/src/data/articles/`
2. Name format: `[number]-[topic]-article.json`
3. Add all required fields per schema

### Step 4: Update articleData.js
1. Import new article in `/src/data/articleData.js`:
```javascript
import article8 from './articles/8-newtopic-article.json';
```
2. Add to articles array:
```javascript
const articles = [
  article1,
  article2,
  // ...
  article8  // Add new article
]
```

## Component Architecture

### Data Flow
```
articleData.js (aggregates JSONs)
    ↓
ExploreArticles.jsx (listing page)
    ├── FeaturedArticle.jsx (hero display)
    └── ArticleCard.jsx (grid cards)
    
ArticlePage.jsx (individual article)
```

### Key Functions (articleData.js)
- `getAllArticles()` - Returns all articles sorted by articlenumber (descending)
- `getFeaturedArticle()` - Returns highest articlenumber article
- `getArticleBySlug(slug)` - Returns specific article by URL slug
- `getArticlesByCategory(category)` - Returns filtered articles
- `getCategories()` - Returns unique category list

### Routing
- `/explore-articles` - Main articles listing
- `/article/:slug` - Individual article page
- Slugs auto-generated from article titles (spaces → hyphens, lowercase)

## Category System

Current categories (custom display order):
- Wine
- Beer  
- Spirits
- Cannabis

Categories are:
1. Manually ordered in articleData.js `getCategories()` function
2. Filter order: All → Wine → Beer → Spirits → Cannabis
3. Displayed as pills with "All" option (always first)
4. Mobile: Reduced pill sizes for better fit

## Featured Article Logic

The article with the highest `articlenumber` value:
- Displays as hero/featured on main articles page
- Only shows when "All" category filter is selected
- Excluded from the regular article grid

## Pagination

- Currently set to 6 articles per page (2 rows × 3 columns)
- Pagination dots appear when articles exceed limit
- Controlled by `ARTICLES_PER_PAGE` constant in ExploreArticles.jsx

## Styling Guidelines

### Colors
- Primary: #FCD128 (brand yellow - updated from #FFB800)
- Text: #1a1a1a (near-black) / considering pure #000000
- Secondary text: #666 (gray)
- Background: #f8f8f8 (light gray)
- Mobile elements: #000000 (pure black)

### Typography
- Font: 'Poppins', sans-serif
- Article title: 3.5rem (desktop), 2rem (mobile)
- Body text: 1.1rem with 1.8 line-height

### Responsive Breakpoints
- Desktop: > 1024px (3-column grid)
- Tablet: 768px - 1024px (2-column grid)  
- Mobile: < 768px (1-column grid)

## SEO Considerations

### Current Implementation
- Semantic HTML structure
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text for all images
- Clean URL slugs

### Future Enhancements Needed
- Dynamic meta tags per article
- Structured data (Article schema)
- Open Graph tags for social sharing
- XML sitemap updates

## Known Issues & Limitations

1. **No CMS** - Articles must be manually added as JSON files
2. **No Search** - No article search functionality yet
3. **No Tags** - Articles only filterable by main category
4. **No Related Articles** - No recommendation system
5. **No Comments** - No user engagement features

## Future Enhancements

### Phase 1 (Completed) ✅
- [x] Full article system implementation
- [x] Add to main navigation (desktop and mobile)
- [x] Mobile hamburger menu
- [x] Category filtering system
- [x] Featured article logic
- [x] Responsive design

### Phase 2 (Next Session)
- [ ] Add article carousel to homepage
- [ ] Article search functionality
- [ ] Social sharing buttons
- [ ] Read time estimation
- [ ] SEO meta tags per article
- [ ] XML sitemap updates

### Phase 3 (Long-term)
- [ ] Related articles suggestions
- [ ] Newsletter signup integration
- [ ] Article bookmarking
- [ ] Print-friendly view

## Maintenance Notes

### Regular Tasks
- Optimize new images before upload
- Test responsive layout with each article
- Verify category filters after adding articles
- Update sitemap.xml with new article URLs

### Performance Considerations
- Lazy load images below the fold
- Keep hero images under 300KB
- Monitor page load times
- Consider CDN for images at scale

## Troubleshooting

### Article Not Appearing
- Verify JSON file is properly formatted
- Check import in articleData.js
- Confirm articlenumber is set

### Images Not Loading
- Check file paths start with `/blog-images/`
- Verify images exist in public folder
- Check file extensions match JSON

### Category Filter Issues
- Ensure category matches existing categories exactly
- Check for case sensitivity
- Verify category is spelled correctly

---

*Last Updated: October 2025*
*Maintained by: Derek Engles*