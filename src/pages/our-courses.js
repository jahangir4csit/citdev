import { graphql } from "gatsby"
import React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
import CoursePageHeading from '../components/courses/coursePageHeading'
import DepartmentGrid from "../components/departmentGrid"
import AdmissionCoursesList from "../components/courses/admissionCoursesList"
import StudentFeedback from "../components/homepage/studentFeedback"

export default function Courses({data}){

const courseData = data.allWpCourseCategory.nodes;
const page = data.allWpPage.nodes[0];
const seo = page.pageMeta;
const reviewsData = data.allWp.nodes[0];

    return(
    <Layout>
        <Seo 
        title={seo.metaTitle} 
        description={seo.metaDescription} />
        <CoursePageHeading  data={page} />
        <DepartmentGrid marginTop="0" boxShadow />
        <AdmissionCoursesList 
        coursSlide={courseData} 
        secheading={page.admissionSecHeading} 
        secdesc={page.admissionSecDesc} 
        />
        <StudentFeedback
        secHeading="মন্তব্য" 
        secDesc="আমরা বিশ্বাস করি আমাদের প্রতিটি শিক্ষার্থী ক্রিয়েটিভ আইটি পরিবারের সদস্য। তাই শিক্ষার্থীদের যেকোনো গঠনমূলক মন্তব্য আমাদের ভুল-ত্রুটি শুধরে সামনে এগিয়ে চলার পথে প্রেরণা যোগায়।" 
        data={reviewsData}
        />
    </Layout>
    )

}

export const query = graphql`
  {
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
              reviewsCount
            }
          }
        }
      }
    }
    allWpPage(filter: {slug: {eq: "our-courses"}}) {
      nodes {
        title
        content
        pageMeta {
          metaTitle
          metaDescription
        }
        admissionSecHeading
        admissionSecDesc
      }
    }
    allWp {
      nodes {
        crbThemeOptions {
          citReviewsFacebook
          citReviewsGoogle
          crbFacebookReviews {
            crb_fb_review_url
          }
          crbGooogleReviews {
            crb_goo_review_url
          }
        }
      }
    }
  }
`