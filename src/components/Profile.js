import React from 'react'
import Image from 'gatsby-image'
import { graphql, StaticQuery } from 'gatsby'

const PROFILE_IMAGE_QUERY = graphql`
  query PROFILE_IMAGE_QUERY {
    profileImage: imageSharp(original: { src: { regex: "/profile/" } }) {
      fixed(width: 128, height: 128) {
        width
        height
        src
        srcSet
        srcWebp
        base64
      }
    }
  }
`

export const Profile = () => (
  <StaticQuery query={PROFILE_IMAGE_QUERY}>
    {data => <Image fixed={data.profileImage.fixed} alt='Mark Hernandez' />}
  </StaticQuery>
)

export default Profile
