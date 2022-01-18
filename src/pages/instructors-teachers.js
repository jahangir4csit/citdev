import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import InstructorDesc from "../components/instructors/instructorDesc"
import CourseSlide from '../components/courses/CoursesSlide'
import InstructorsList from "../components/instructors/instructorsList"


export default function Instructors({data}) {

  const pageData = data.allWpPage.nodes[0];
  const courseData = data.allWpCourseCategory.nodes;

  return(
    <Layout>
      <Seo title={pageData.title} />
      <InstructorDesc data={pageData} />
      <InstructorsList data={courseData} />
      <CourseSlide coursSlide={courseData} />
    </Layout>
  )

}
export const query = graphql`
  {
    allWpPage(filter: {slug: {eq: "instructors-teachers"}}) {
      nodes {
        id
        title
        content
      }
    }
    allWpCourseCategory {
      nodes {
        name
        slug
        link
        termTaxonomyId
        categoryThumb {
          categoryThumbnail {
            sourceUrl
          }
        }
        courses {
          nodes {
            id
            title
            excerpt
            slug
            courseCategories {
              nodes {
                name
              }
            }
            featuredImage {
              node {
                sourceUrl
              }
            }
            course_options {
              courseFee
              discountFee
              studentsIn
            }
          }
        }
        instructors {
          nodes {
            title
            featuredImage {
              node {
                sourceUrl
              }
            }
            mentorTrainingExperiences
            mentorSpecializations {
              title
            }
            mentorDsg
            mentorStudents
            mentorPosition
            instructorsWorkplace {
              mentorWorkplace {
                ... on WpCitoption {
                  title
                  featuredImage {
                    node {
                      sourceUrl
                    }
                  }
                }
              }
            }
            mentorAchievements {
              url
            }
            mentorEducations {
              title
            }
            mentorWorkexperiences {
              title
            }
          }
        }
      }
    }
  }
`