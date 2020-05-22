import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import React from 'react'

const PROFILE_IMAGE_QUERY = graphql`
  query PROFILE_IMAGE_QUERY {
    profileImage: imageSharp(original: { src: { regex: "/profile/" } }) {
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
function Profile (props) {
  const data = useStaticQuery(PROFILE_IMAGE_QUERY)
  return (
    <Image
      className={props.className}
      fixed={data.profileImage.fixed}
      alt='Mark Hernandez'
    />
  )
}

export default Profile
