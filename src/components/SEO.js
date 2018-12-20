import React from 'react';
import Helmet from 'react-helmet';
import * as config from '../config';

const getSchemaOrgJSONLD = ({
  isBlogPost,
  url,
  title,
  image,
  description,
  datePublished,
}) => {
  const schemaOrgJSONLD = [
    {
      '@context': 'https://georginagrey.com',
      '@type': 'WebSite',
      url,
      name: title,
      alternateName: config.default.title,
    },
  ];

  return isBlogPost
    ? [
        ...schemaOrgJSONLD,
        {
          '@context': 'https://georginagrey.com',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              item: {
                '@id': url,
                name: title,
                image,
              },
            },
          ],
        },
        {
          '@context': 'https://georginagrey.com',
          '@type': 'BlogPosting',
          url,
          name: title,
          alternateName: config.default.title,
          headline: title,
          image: {
            '@type': 'ImageObject',
            url: image,
          },
          description,
          author: {
            '@type': 'Person',
            name: 'Georgina Grey | Web Developer',
          },
          publisher: {
            '@type': 'Organization',
            url: 'https://georginagrey.com',
            logo: config.default.logo,
            name: 'Georgina Grey | Web Developer',
          },
          mainEntityOfPage: {
            '@type': 'WebSite',
            '@id': config.default.url,
          },
          datePublished,
        },
      ]
    : schemaOrgJSONLD;
};

const SEO = ({ postData, postImage, isBlogPost }) => {
  const postMeta = postData || {};

  const title =  postMeta.title || config.default.title;
  const description =
    postMeta.description || postMeta.excerpt || config.default.description;
  const image = `${config.default.url}${postImage}` || config.default.image;
  const slug = postMeta.slug;
  const url = slug
    ? `${config.default.url}${slug}`
    : config.default.url;
  const datePublished = isBlogPost ? postMeta.date : false;

  const schemaOrgJSONLD = getSchemaOrgJSONLD({
    isBlogPost,
    url,
    title,
    image,
    description,
    datePublished,
  });
  
  return (
    <Helmet>
      {/* General tags */}
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* OpenGraph tags */}
      <meta property="og:url" content={url} />
      {isBlogPost ? <meta property="og:type" content="article" /> : null}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={config.default.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;