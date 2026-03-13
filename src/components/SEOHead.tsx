import { Helmet } from "react-helmet-async";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  schema?: object;
  breadcrumbs?: BreadcrumbItem[];
  faq?: FAQItem[];
}

const SEOHead = ({ title, description, canonical, ogImage, schema, breadcrumbs, faq }: SEOHeadProps) => {
  const siteUrl = "https://ayodhyaserenity.com";
  const fullTitle = title.includes("Ayodhya Serenity") ? title : `${title} | Ayodhya Serenity`;
  const image = ogImage || `${siteUrl}/og-image.jpg`;
  const canonicalUrl = canonical || siteUrl;

  const breadcrumbSchema = breadcrumbs?.length ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": item.name,
      "item": item.url,
    })),
  } : null;

  const faqSchema = faq?.length ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faq.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  } : null;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Ayodhya Serenity" />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="keywords" content="Ayodhya Serenity, Ayodhya temples, Ayodhya travel guide, Ayodhya tourism, Ayodhya spiritual retreat, pilgrimage destinations, sacred places in Ayodhya, spiritual tourism India, peaceful places in Ayodhya" />

      <meta name="geo.region" content="IN-UP" />
      <meta name="geo.placename" content="Ayodhya" />
      <meta name="geo.position" content="26.7922;82.1998" />
      <meta name="ICBM" content="26.7922, 82.1998" />

      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
      {breadcrumbSchema && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      )}
      {faqSchema && (
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      )}
    </Helmet>
  );
};

export default SEOHead;
