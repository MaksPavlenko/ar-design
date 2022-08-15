require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const { languages, defaultLanguage } = require('./languages');
const siteUrl = `https://www.ar-design.uk/`;
const myCustomQueries = {
  xs: '(max-width: 576px)',
  sm: '(max-width: 768px)',
  md: '(max-width: 992px)',
  l: '(max-width: 1200px)',
  xl: '(max-width: 1400px)',
  portrait: '(orientation: portrait)',
};

module.exports = {
  siteMetadata: {
    title: `AR-Design`,
    description: `AR Design — Архитектор ваших идей, семейная компания супругов Анны и Евгения Разумовых. Дизайн интерьера, проектирование, авторский надзор и строительство под ключ. ✓ Киев, Украина ☎ 097 887 66 55`,
    author: `@erikdils`,
    siteUrl: siteUrl,
  },
  flags: {
    PRESERVE_WEBPACK_CACHE: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    DEV_WEBPACK_CACHE: true,
    DEV_SSR: false,
    // FAST_DEV: false,
    // FAST_REFRESH: true,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
      },
    },
    {
      resolve: 'gatsby-plugin-breakpoints',
      options: {
        queries: myCustomQueries,
      },
    },

    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images/instagram/`,
    //   },
    // },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `AR-Design`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/icons/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },

    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
        languages: languages,
        defaultLanguage: defaultLanguage,
        // if you are using Helmet, you must include siteUrl, and make sure you add http:https
        siteUrl: siteUrl,
        // you can pass any i18next options
        i18nextOptions: {
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
          keySeparator: false,
          nsSeparator: false,
        },
        // pages: [
        //   {
        //     matchPath: "/:lang?/blog/:uid",
        //     getLanguageFromPath: false,
        //     excludeLanguages: ["en"],
        //   },
        //   {
        //     matchPath: "/preview",
        //     languages: ["en"],
        //   },
        // ],
      },
    },
    // {
    //   resolve: "gatsby-plugin-sitemap",
    //   options: {
    //     exclude: ["/**/404", "/**/404.html"],
    //     query: `
    //       {
    //         site {
    //           siteMetadata {
    //             siteUrl
    //           }
    //         }
    //         allSitePage(filter: {context: {i18n: {routed: {eq: false}}}}) {
    //           edges {
    //             node {
    //               context {
    //                 i18n {
    //                   defaultLanguage
    //                   languages
    //                   originalPath
    //                 }
    //               }
    //               path
    //             }
    //           }
    //         }
    //       }
    //     `,
    //     serialize: ({ site, allSitePage }) => {
    //       return allSitePage.edges.map(edge => {
    //         const {
    //           languages,
    //           originalPath,
    //           defaultLanguage,
    //         } = edge.node.context.i18n;
    //         const { siteUrl } = site.siteMetadata;
    //         const url = siteUrl + originalPath;
    //         const links = [
    //           { lang: defaultLanguage, url },
    //           { lang: "x-default", url },
    //         ];
    //         languages.forEach(lang => {
    //           if (lang === defaultLanguage) return;
    //           links.push({ lang, url: `${siteUrl}/${lang}${originalPath}` });
    //         });
    //         return {
    //           url,
    //           changefreq: "daily",
    //           priority: originalPath === "/" ? 1.0 : 0.7,
    //           links,
    //         };
    //       });
    //     },
    //   },
    // },
    `gatsby-plugin-sass`,
    // {
    //   resolve: "gatsby-plugin-minify-html",
    //   options: {
    //     debug: true, // debug optional, default false
    //     config: {
    //       // Enabled default by this plugin
    //       collapseWhitespace: false,
    //       minifyCSS: false,
    //       minifyJS: false,
    //       removeComments: false,
    //       removeScriptTypeAttributes: false,
    //       removeStyleLinkTypeAttributes: false,
    //       // Disabled default by html-minifier-terser
    //       sortAttributes: true,
    //       useShortDoctype: true,
    //     },
    //   },
    // },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: 'https://admin.ar-design.com.ua',
        queryLimit: 6000, // Defaults to 100
        collectionTypes: [
          `portfolio`,
          `project-filter`,
          `services`,
          `services-categories`,
          `blogs`,
        ],
        singleTypes: [
          `homes`,
          `abouts`,
          `contacts`,
          `services-pages`,
          `instagrams`,
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/, // See below to configure properly
        },
      },
    },
    {
      resolve: 'gatsby-plugin-social9-socialshare',
      options: {
        async: true,
        defer: true,
        content: 'f468d7ec37614593ac21a3669427fa3c',
      },
    },
    // To learn more, visit: https://gatsby.dev/offline // this (optional) plugin enables Progressive Web App + Offline functionality
    `gatsby-plugin-offline`,
  ],
};
