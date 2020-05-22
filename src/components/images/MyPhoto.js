import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import React from 'react'

const MY_PHOTO_QUERY = graphql`
  query MY_PHOTO_QUERY {
    photo: imageSharp(original: { src: { regex: "/mark/" } }) {
      fixed(width: 160, height: 160) {
        aspectRatio
        width
        height
        src
        srcSet
        srcWebp
        srcSetWebp
        base64
      }
    }
  }
`

/**
 * @param {object} props
 * @param {string} [props.className]
 */
function MyPhoto (props) {
  const data = useStaticQuery(MY_PHOTO_QUERY)
  return (
    <Image
      className={props.className}
      fixed={data.photo.fixed}
      alt='Mark Hernandez'
    />
  )
}

export default MyPhoto
