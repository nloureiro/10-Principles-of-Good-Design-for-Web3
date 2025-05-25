import { Principle } from "@/types";

export interface PageMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  ogUrl: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
  canonicalUrl: string;
  structuredData: object;
}

export function generatePrincipleMetadata(principle: Principle): PageMetadata {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const pageUrl = `${baseUrl}/principles/${principle.slug}`;
  
  const title = `${principle.title} - 10 Principles of Good Design for Web3`;
  const description = principle.metadata?.description || 
    `${principle.summary} Learn about the ${principle.title.toLowerCase()} principle of good Web3 design with practical examples, real-world applications, and actionable design tips.`;
  
  const defaultKeywords = [
    'Web3 design',
    `${principle.title.toLowerCase()}`,
    'blockchain UX',
    'decentralized design',
    'crypto design principles',
    'DeFi UX',
    'dApp design',
    'Web3 user experience',
    'blockchain interface design',
    'crypto UI patterns',
    'decentralized app design',
    'Web3 best practices'
  ];

  const keywords = principle.metadata?.keywords ? 
    [...principle.metadata.keywords, ...defaultKeywords] : 
    defaultKeywords;

  const twitterDescription = principle.metadata?.twitterDescription || description;
  const ogImage = principle.metadata?.ogImage || principle.image;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `${principle.title} - Good Design for Web3`,
    "description": principle.summary,
    "image": {
      "@type": "ImageObject",
      "url": ogImage,
      "width": 600,
      "height": 400
    },
    "author": {
      "@type": "Organization",
      "name": "10 Principles of Good Design for Web3",
      "url": baseUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": "10 Principles of Good Design for Web3",
      "url": baseUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/generated-icon.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": pageUrl
    },
    "url": pageUrl,
    "datePublished": "2024-01-01",
    "dateModified": "2024-01-01",
    "articleSection": "Design Principles",
    "keywords": keywords.join(', '),
    "wordCount": principle.content.split(' ').length,
    "inLanguage": "en-US",
    "isPartOf": {
      "@type": "WebSite",
      "@id": baseUrl,
      "name": "10 Principles of Good Design for Web3"
    },
    "about": {
      "@type": "Thing",
      "name": "Web3 Design Principles",
      "description": "Comprehensive guide to designing user-friendly decentralized applications and Web3 interfaces"
    }
  };

  return {
    title,
    description,
    keywords,
    ogTitle: title,
    ogDescription: description,
    ogImage,
    ogUrl: pageUrl,
    twitterTitle: title,
    twitterDescription,
    twitterImage: ogImage,
    canonicalUrl: pageUrl,
    structuredData
  };
}

export function updatePageMetadata(metadata: PageMetadata): void {
  // Update document title
  document.title = metadata.title;

  // Helper function to update or create meta tags
  const updateOrCreateMeta = (selector: string, content: string, attribute: string = 'content') => {
    let meta = document.querySelector(selector) as HTMLMetaElement;
    if (meta) {
      meta.setAttribute(attribute, content);
    } else {
      meta = document.createElement('meta');
      if (selector.includes('property=')) {
        const property = selector.match(/property="([^"]+)"/)?.[1];
        if (property) meta.setAttribute('property', property);
      } else if (selector.includes('name=')) {
        const name = selector.match(/name="([^"]+)"/)?.[1];
        if (name) meta.setAttribute('name', name);
      }
      meta.setAttribute(attribute, content);
      document.head.appendChild(meta);
    }
  };

  // Basic meta tags
  updateOrCreateMeta('meta[name="description"]', metadata.description);
  updateOrCreateMeta('meta[name="keywords"]', metadata.keywords.join(', '));
  
  // Open Graph tags
  updateOrCreateMeta('meta[property="og:title"]', metadata.ogTitle);
  updateOrCreateMeta('meta[property="og:description"]', metadata.ogDescription);
  updateOrCreateMeta('meta[property="og:type"]', 'article');
  updateOrCreateMeta('meta[property="og:url"]', metadata.ogUrl);
  updateOrCreateMeta('meta[property="og:image"]', metadata.ogImage);
  updateOrCreateMeta('meta[property="og:site_name"]', '10 Principles of Good Design for Web3');

  // Twitter Card tags
  updateOrCreateMeta('meta[name="twitter:card"]', 'summary_large_image');
  updateOrCreateMeta('meta[name="twitter:title"]', metadata.twitterTitle);
  updateOrCreateMeta('meta[name="twitter:description"]', metadata.twitterDescription);
  updateOrCreateMeta('meta[name="twitter:image"]', metadata.twitterImage);

  // Canonical URL
  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  if (canonical) {
    canonical.href = metadata.canonicalUrl;
  } else {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = metadata.canonicalUrl;
    document.head.appendChild(canonical);
  }

  // Remove existing structured data and add new one
  const existingScript = document.querySelector('script[type="application/ld+json"]');
  if (existingScript) {
    existingScript.remove();
  }

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(metadata.structuredData, null, 2);
  document.head.appendChild(script);
} 