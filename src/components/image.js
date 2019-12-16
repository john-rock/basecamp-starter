import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const renderImage=value=>{
  const {node}= value
  const {childImageSharp}= node
    return (
        <Img fluid={childImageSharp.fluid}/>
    )
}

const Image = props => {
  const { file} = props
  return (
    <StaticQuery
      query={graphql`
        query {
          images: allFile(
            filter: { extension: { regex: "/jpeg|jpg|png|gif/" } }
          ) {
            edges {
              node {
                extension
                relativePath
                childImageSharp {
                  fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      `}
      render={({images})=>renderImage(images.edges.find(image=>image.node.relativePath===file))}
    />
  )
}

export default Image    