import * as React from 'react'
import Image from 'gatsby-image'
import { graphql, StaticQuery } from 'gatsby'

export class ProfileImage extends React.PureComponent {
  render () {
    return (
      <StaticQuery
        query={graphql`
          {
            profileImage: imageSharp(
              original: { src: { regex: "/profile/" } }
            ) {
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
        `}
        render={data => {
          const { profileImage } = data

          return <Image fixed={profileImage.fixed} alt='Mark Hernandez' />
        }}
      />
    )
  }
}
