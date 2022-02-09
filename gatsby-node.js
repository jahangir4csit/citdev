const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  return await graphql(`
    {
      allWpCourse(sort: {fields: date}) {
        nodes {
          title
          slug
          uri
          id
          content
          featuredImage {
            node {
              sourceUrl
            }
          }
          course_options {
            courseFee
            discountFee
            courseFeeOnline
            courseFeeOnlineDiscount
            studentsIn
            courseDuration
            classPerWeek
            admissionLink
            courseVideo
            courseSubTitle
            isAdmissionOpen
            isSeminar
            seminarLink
            totalLecture
            courseVideoUrl
            courseVideoThumbnail {
              sourceUrl
            }
            softwareForCourse {
              ... on WpCitoption {
                id
                title
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
              }
            }
            jobPosition {
              ... on WpCitoption {
                id
                title
              }
            }
            jobMarket {
              ... on WpCitoption {
                id
                title
                content
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
              }
            }
            courseForWhome {
              ... on WpCitoption {
                title
                id
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
              }
            }
            courseFacilities {
              ... on WpCitoption {
                id
                title
                content
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
              }
            }
          }
        }
      }
    }
  `).then(result => {
    //highlight-start
    result.data.allWpCourse.nodes.forEach(node => {
      createPage({
        //path: encodeURI(node.uri),
        path: node.uri,
        component: '',
        context: {
          // This is the $slug variable
          // passed to blog-post.js
          id: node.id,
        },
      })
    })
    //highlight-end
  })
}
