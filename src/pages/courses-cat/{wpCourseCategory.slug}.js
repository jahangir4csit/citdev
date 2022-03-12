import React,{Fragment, useEffect, useState} from 'react'
import Slider from "react-slick";
import { graphql, Link } from "gatsby"; 
import { StaticImage } from "gatsby-plugin-image"
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Layout from "../../components/layout"
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

export default function Courses({data}){

    const post = data.allWpCourse.nodes[0];

    return(
        <Layout>
            <h2>Generate Page</h2>
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
        }
    }
  }
`

