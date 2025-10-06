# Beverage.fyi

A professional beverage education platform designed for hospitality professionals, enthusiasts, and anyone looking to deepen their understanding of the world of beverages.

## 🍷 Overview

Beverage.fyi is a comprehensive web application that provides educational resources, tools, and recommendations for the beverage industry. From wine pairings to cocktail recipes to industry terminology, we're building the most accessible beverage knowledge platform on the web.

Live at: [https://beverage.fyi](https://beverage.fyi)

## ✨ Features

### Core Functionality
- **📖 A-Z Terminology Database**: Comprehensive definitions for thousands of beverage terms
- **🍷 Wine Recommendation Engine**: Personalized wine suggestions based on preferences and food pairings
- **🍸 Cocktail Suggestion System**: Classic and modern cocktail recipes with preparation techniques
- **📚 Educational Resources**: Industry insights, best practices, and professional guidance

### Platform Features
- Mobile-first responsive design
- Fast page loads with Vite
- SEO optimized
- Clean, intuitive navigation
- Professional typography with Google Fonts (Poppins)

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.3.1
- **Build Tool**: Vite 6.0.5
- **Routing**: React Router DOM 7.1.1
- **Styling**: Custom CSS with mobile-first approach
- **Icons**: React Icons 5.4.0
- **Deployment**: Vercel
- **Development**: ESLint for code quality

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/beverage-fyi.git
cd beverage-fyi
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
beverage.fyi/
├── public/               # Static assets
│   ├── beverage-background.png
│   ├── beverage-logo-landingpage.svg
│   └── favicon.png
├── src/
│   ├── components/       # Reusable components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── SearchBar.jsx
│   │   └── ...
│   ├── pages/           # Page components
│   │   ├── HomePage.jsx
│   │   ├── TerminologyPage.jsx
│   │   ├── WineRecommendationsPage.jsx
│   │   ├── CocktailPage.jsx
│   │   └── ...
│   ├── data/            # JSON data files
│   │   ├── A.json through Z.json (terminology)
│   │   ├── cocktails.json
│   │   └── WineRecommendations.json
│   ├── styles/          # CSS files
│   │   ├── global.css
│   │   ├── desktop.css
│   │   └── [component].css
│   ├── App.jsx          # Main application component
│   └── main.jsx         # Application entry point
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── vercel.json         # Vercel deployment config
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🎨 Design Principles

- **Mobile-First**: All designs start with mobile and scale up
- **Accessibility**: Semantic HTML, proper contrast ratios
- **Performance**: Lazy loading, optimized images, minimal dependencies
- **User Experience**: Clear navigation, intuitive interactions
- **Professional**: Clean typography, consistent spacing, thoughtful color palette

## 📚 The Beverage Compass

This platform is designed as a companion to "The Beverage Compass: A Modern Guide to the World of Drinks" by Derek Engles. The book provides deeper insights into beverage culture, history, and professional service.

Available on Amazon: [The Beverage Compass](https://www.amazon.com/dp/B0FQD4X2JT)

## 🚢 Deployment

The application is deployed on Vercel with automatic deployments from the main branch.

### Environment Variables
No environment variables are currently required for deployment.

### Deployment Configuration
See `vercel.json` for deployment settings.

## 🤝 Contributing

While this is primarily a proprietary platform, we welcome feedback and suggestions. Please reach out to Derek Engles for collaboration opportunities.

## 📬 Contact

**Derek Engles**  
Email: derekengles@gmail.com  
Website: [beverage.fyi](https://beverage.fyi)

Derek is a 20-year hospitality veteran with experience as a sommelier and wine director at award-winning restaurants and resorts. He has developed training programs for Fortune 500 companies and Michelin-starred establishments.

## 📄 License

© 2025 Derek Engles. All Rights Reserved.

This is proprietary software. Unauthorized copying, modification, or distribution is prohibited.

## 🙏 Acknowledgments

- Built with React and Vite
- Hosted on Vercel
- Typography by Google Fonts
- Icons by React Icons

---

**Status**: Active Development  
**Version**: 1.0.0  
**Last Updated**: October 2025