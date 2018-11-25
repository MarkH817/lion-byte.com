import React from 'react'
import styled from 'styled-components'

import Page from '../templates/Page'
import Introduction from '../components/Introduction'

const HomeGrid = styled.section`
  display: grid;
  gap: 1em;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr auto;
`

const Area = styled.section`
  grid-row: span ${props => props.rows};
  grid-column: span ${props => props.columns};
`

Area.defaultProps = {
  rows: 1,
  columns: 1
}

const ItemList = styled.section`
  border-radius: 0.5em;
  box-shadow: inset 0.4em 0.4em 0.2em rgba(0, 0, 0, 0.15);
  background-color: #f3f3d6;
  height: 100%;
  padding: 0.75em 1em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5em;

  & > * {
    word-break: break-all;
  }
`

export const Home = props => (
  <Page>
    <HomeGrid>
      <Area rows={2}>
        <Introduction />
      </Area>

      <Area>
        <ItemList>
          <section>
            <span>Strange Sack</span>
          </section>

          <section>
            <span>Star Key</span>
          </section>

          <section>
            <span>Cog</span>
          </section>

          <section>
            <span>Train Ticket</span>
          </section>
        </ItemList>
      </Area>

      <Area rows={2}>
        <ItemList>
          <section>
            <span>Strange Sack</span>
          </section>

          <section>
            <span>Star Key</span>
          </section>

          <section>
            <span>Cog</span>
          </section>

          <section>
            <span>Train Ticket</span>
          </section>
        </ItemList>
      </Area>

      <Area>
        <ItemList>
          <section>
            <span>Strange Sack</span>
          </section>

          <section>
            <span>Star Key</span>
          </section>

          <section>
            <span>Cog</span>
          </section>

          <section>
            <span>Train Ticket</span>
          </section>
        </ItemList>
      </Area>
    </HomeGrid>
  </Page>
)

export default Home
