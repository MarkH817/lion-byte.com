import React from 'react'
import Image from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

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

export function MyPhoto () {
  const data = useStaticQuery(MY_PHOTO_QUERY)
  return <Image fixed={data.photo.fixed} alt='Mark Hernandez' />
}

export default MyPhoto
