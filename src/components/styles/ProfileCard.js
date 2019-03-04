import styled from 'styled-components'

const ProfileCard = styled.div`
  &,
  .image {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
  }

  &.reverse {
    flex-wrap: wrap-reverse;
  }

  .image {
    flex: 2 0 8em;
    justify-content: center;

    & > * {
      border-radius: 10%;
    }
  }

  .text {
    flex: 5 1 20em;
    margin: 0 1em;

    p {
      max-width: 40em;
      margin: 1em auto;
      text-align: center;
    }
  }
`

export default ProfileCard
