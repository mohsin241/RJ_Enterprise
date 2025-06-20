import { Helmet } from 'react-helmet-async';
import React from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: 'website' | 'article' | 'product';
  twitterCard?: 'summary' | 'summary_large_image';
}

export const SEO: React.FC<SEOProps> = ({
  title = 'R J Enterprise | Premium Steel Supplier & Distributor in India',
  description = 'R J Enterprise offers high-quality TMT bars, steel plates, hot rolled coils & industrial steel products. ISO 9001:2008 certified steel supplier serving construction, oil & gas, manufacturing industries.',
  keywords = 'steel supplier, TMT bars, mild steel plates, boiler quality plates, hot rolled coils, construction steel, industrial steel',
  ogImage = 'https://images.unsplash.com/photo-1616737676197-696fe94df40a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630',
  ogUrl = 'https://rj-enterprise.vercel.app/',
  ogType = 'website',
  twitterCard = 'summary_large_image',
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={ogUrl} />
    </Helmet>
  );
};
