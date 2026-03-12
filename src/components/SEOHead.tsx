import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  schema?: object;
}

const SEOHead = ({ title, description, canonical, ogImage, schema }: SEOHeadProps) => {
  const siteUrl = "https://ayodhyaserenity.com";
  const fullTitle = `${title} | Ayodhya Serenity`;
  const image = ogImage || `${siteUrl}/og-image.jpg`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical || siteUrl} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical || siteUrl} />
      <meta property="og:site_name" content="Ayodhya Serenity" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta name="robots" content="index, follow" />
      <meta name="keywords" content="Ayodhya temples, Ayodhya travel guide, Ayodhya tourism, pilgrimage destinations, sacred places in Ayodhya, spiritual tourism India" />

      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  );
};

export default SEOHead;
