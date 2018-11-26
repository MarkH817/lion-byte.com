import * as React from 'react'
import Image from 'gatsby-image'
import { graphql, StaticQuery } from 'gatsby'

export const PROFILE_IMAGE_QUERY = graphql`
  {
    profileImage: imageSharp(original: { src: { regex: "/profile/" } }) {
      fixed(width: 128, height: 128) {
        aspectRatio
        width
        height
        src
        srcSet
        srcWebp
        srcWebp
        base64
      }
    }
  }
`

export const Profile = () => (
  <StaticQuery query={PROFILE_IMAGE_QUERY}>
    {({ profileImage }) => (
      <Image fixed={profileImage.fixed} alt='Mark Hernandez' />
    )}
  </StaticQuery>
)

export default Profile
