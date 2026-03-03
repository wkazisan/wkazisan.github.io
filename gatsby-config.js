const config = require('./src/config');

module.exports = {
  siteMetadata: {
    title: 'WKA Zisan | Electrical Diploma Engineer Bangladesh',
    description:
      'Waiz Kuruni Ahmed Zisan — Electrical Diploma Engineer in Bangladesh specializing in industrial electrical systems, motor control panels, wiring, maintenance, and troubleshooting. Available for electrical engineering work in Bangladesh.',
    siteUrl: 'https://wkazisan.pro.bd',
    image: '/og.png',
    twitterUsername: '@wkazisan',
    linkedinUsername: 'https://linkedin.com/in/wkazisan',
    githubUsername: 'https://github.com/wkazisan',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: 'https://wkazisan.pro.bd',
        sitemap: 'https://wkazisan.pro.bd/sitemap/sitemap-index.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'WKA Zisan | Electrical Engineer',
        short_name: 'WKA Zisan',
        start_url: '/',
        background_color: config.colors.darkNavy,
        theme_color: config.colors.navy,
        display: 'minimal-ui',
        icon: 'src/images/logo.png',
      },
    },
    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow noopener noreferrer',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 700,
              linkImagesToOriginal: true,
              quality: 90,
              tracedSVG: { color: config.colors.green },
            },
          },
          { resolve: 'gatsby-remark-code-titles' },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['G-TSPSZ7VZ6Z'],
        pluginConfig: {
          head: true,
        },
      },
    },
  ],
};