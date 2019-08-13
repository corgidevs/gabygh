/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Gaby - UX/UI Designer',
    description: 'Portfolio Site - Gabriela Gonzalez Holguin',
    phrases: [
      'User Experience',
      'Interaction',
      'User Testing',
      'Mockups',
      'User Journey',
      'Problem Solving',
      'Digital Product'
    ],
    siteUrl: 'https://gabygonzalez.com',
    author: 'CorgiDevs',
    authorUrl: 'http://corgidevs.com/'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Poppins']
        }
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/
        }
      }
    }
  ]
}
