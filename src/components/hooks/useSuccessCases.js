import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export const useSuccessCases = () => {
    const data = useStaticQuery(graphql`
    query SuccessCases {
        allWpSuccessCaseCategory {
            nodes {
              name
              uri
              successStory {
                nodes {
                  title
                  successStoryLink {
                    successStoryLink
                  }
                }
              }
            }
          }
      }
    `)
    return data
}