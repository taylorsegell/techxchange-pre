module.exports = {
  trailingSlash: `always`,
  siteMetadata: {
    title: ' Techxchange Outcomes',
    description: 'IBM Techxchange Pre-Conference Workshop',
    keywords: 'ibm, techxchange, outcomes, workshop',
    siteUrl: 'https://techxchange.us/',
  },
  pathPrefix: `/gtc`,
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Carbon Design Gatsby Theme',
        icon: 'src/images/favicon.svg',
        short_name: ' Gatsby theme Carbon',
        start_url: '/',
        display: 'browser',
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        mediumAccount: 'carbondesign',
        repository: {
          baseUrl:
            'https://github.com/taylorsegell/gatsby-dev2',
          subDirectory: '/packages/techxchange-outcomes',
        },
      },
    },
  ],
};
