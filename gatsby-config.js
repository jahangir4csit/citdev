module.exports = {
  siteMetadata: {
    title: `Creative IT Institute Bangladesh`,
    description: `Creative IT Institute Website`,
    author: `@Jahangir Ahmed`,
    siteUrl: `https://creativeitinstitute.com/`,
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `https://cit.creativejuniors.com/graphql`
        //url: `http://localhost/citbd/graphql`
      },
      develop: {
        hardCacheMediaFiles: true,
      },
      type: {
        Post: {
          limit:
            process.env.NODE_ENV === `development`
              ? // Lets just pull 50 posts in development to make it easy on ourselves (aka. faster).
                50
              : // and we don't actually need more than 5000 in production for this particular site
                5000,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
        // Set to false to allow builds to continue on image errors
        failOnError: true,
        // deprecated options and their defaults:
        base64Width: 20,
        forceBase64Format: ``, // valid formats: png,jpg,webp
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        stripMetadata: true,
        defaultQuality: 50, 
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Hind+Siliguri:300,400,500,600,700`, `source sans pro:300,400,500,600,700`
        ],
        display: 'swap'
      }
    },
    `gatsby-plugin-smoothscroll`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}