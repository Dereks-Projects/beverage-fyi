// 📄 FILE: src/data/articleData.js
// PURPOSE: Central aggregation point for all article JSON files
// This file imports all articles and exports them as a sorted array

import article1 from './articles/7-scotch1-article.json';
import article2 from './articles/6-trappistale1-article.json';
import article3 from './articles/5-liqueur1-article.json';
import article4 from './articles/4-gin1-article.json';
import article5 from './articles/3-amaro1-article.json';
import article6 from './articles/2-chardonnay1-article.json';
import article7 from './articles/1-cannabis1-article.json';

// Add slug field to each article based on title
const processArticle = (article) => {
  const slug = article.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
  
  return {
    ...article,
    slug: slug
  };
};

// Process all articles and sort by articlenumber (descending)
const articles = [
  article1,
  article2,
  article3,
  article4,
  article5,
  article6,
  article7
]
  .map(processArticle)
  .sort((a, b) => b.articlenumber - a.articlenumber);

// Export the sorted array and utility functions
export const getAllArticles = () => articles;

export const getFeaturedArticle = () => articles[0];

export const getArticleBySlug = (slug) => 
  articles.find(article => article.slug === slug);

export const getArticlesByCategory = (category) => 
  articles.filter(article => 
    article.category.toLowerCase() === category.toLowerCase()
  );

export const getCategories = () => {
  // Return categories in your desired order
  return ['Wine', 'Beer', 'Spirits', 'Cannabis'];
};

export default articles;