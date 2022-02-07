import React,{Fragment, useState} from 'react'
import Slider from "react-slick";
import { graphql } from "gatsby"; 
import { StaticImage } from "gatsby-plugin-image"
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Layout from "../components/layout"
import StudentFeedback from "../components/homepage/studentFeedback"
import SuccessStorySlider from '../components/successCase/SuccessStorySlider'
import {faPlay} from '@fortawesome/free-solid-svg-icons'
import ModalVideo from 'react-modal-video'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import TabContainer from 'react-bootstrap/TabContainer'
import TabContent from 'react-bootstrap/TabContent'
import TabPane from 'react-bootstrap/TabPane'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function SingleCourse({data}){

    if (typeof window === 'undefined') {
        global.window = {}
    }


    const post = data.allWpCourse.nodes[0]
    console.log(post, 'Single Course')

    const [isOpen, setOpen] = useState(false);

    const settingsProjectsSlider = {
      className: "pgp_slider",
      autoplay:false,
      slidesToShow:1,
      slidesToScroll:1,
      arrows:false,
      dots:true,
      infinite: true,
      speed: 500,
    };

    return(
        <Layout>
          <section id="profe_graphic_banner">
            <div class="pink_shape">
                <StaticImage class="img-fluid" src="../images/course-landing/Pg_banner_shape2.png" alt="pink color victor shape" />
            </div>
            <div class="white_dots">
                <StaticImage class="img-fluid" src="../images/course-landing/Pg_banner_shape4.png" alt="white color dots victor" />
            </div>
            <div class="yellow_shape">
                <iStaticImage class="img-fluid" src="../images/course-landing/Pg_banner_shape1.png" alt="Yellow color victor shape" />
            </div>


            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-5">
                        <div class="pg_banner_text">
                            <h4>{post.course_options.courseSubTitle ? post.course_options.courseSubTitle : ''}</h4>
                            <h1>{post.title ? post.title : ''}<span class="d-block d-sm-none">স্কিল এর সাথে</span></h1>
                            <ul>
                                <li>কোর্সের মেয়াদ<span>{post.course_options.courseDuration !== null ? post.course_options.courseDuration : ''}</span></li>
                                <li>লেকচার<span>{post.course_options.totalLecture !== null ? post.course_options.totalLecture : ''}টি</span></li>
                                <li>প্রজেক্ট<span>{post.course_options.classPerWeek !==null ? post.course_options.classPerWeek : ''}টি</span></li>
                            </ul>
                            {post.content !==null &&
                            <p dangerouslySetInnerHTML={{ __html: post.content }} />
                            }
                            <div class="pg_banner_btn">
                                <a href="desktop-50.html">ভর্তি হবো</a>
                                <a href="free-seminer-schedule.html">ফ্রি সেমিনারে জয়েন করবো</a>
                            </div>
                            <div class="stars">
                                <p>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStarHalfAlt} />
                                     25 Reviews <span>২১২ স্টুডেন্ট</span></p>
                            </div>
                            <div class="countdown_sm_device">
                                <p>৩০% ছাড়ের <span id="day"></span><span id="hour"></span><span id="min"></span> বাকি!</p>
                            </div>

                        </div>
                    </div>
                    <div class="col-lg-7 pg_banner_img_col">
                        <div class="pg_banner_img position-relative">
                            {post.course_options.courseVideoThumbnail !== null ?
                            <img class="img-fluid w-100" src={post.course_options.courseVideoThumbnail.sourceUrl} alt="image" />
                            : <img class="img-fluid w-100" src={post.featuredImage.node.sourceUrl} alt="image" />
                            }
                            <div class="overly_icon">
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={post.course_options.courseVideoUrl !== null ? post.course_options.courseVideoUrl : '1PDg90odyVY'} onClose={() => setOpen(false)} />
                                <button className="modalvidwrap" onClick={()=> setOpen(true)}>
                                    <FontAwesomeIcon icon={faPlay} />
                                </button>
                            </div>
                        </div>
                        <div class="yellow_dots_right"><StaticImage src="../images/course-landing/Pg_banner_shape3.png" alt="Yellow color dots" /></div>
                        <div class="yellow_dot_left"><StaticImage src="../images/course-landing/Pg_banner_shape3.png" alt="Yellow color dots" /></div>
                    </div>
                </div>
            </div>
          </section>



        </Layout>
    )
}

export const query = graphql`
  query($id: String!) {
    allWpCourse(filter: { id: { eq: $id } }) {
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
        studentProjects {
            url
          }
          courseSuccessCase {
            successCaseLink {
              ... on WpSuccessStories {
                successStoryLink {
                  successStoryLink
                }
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
`

