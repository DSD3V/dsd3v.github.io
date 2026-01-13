import styled from 'styled-components'
import { TabGrid } from './GlobalStyles'

export const ProjectsTabGrid = styled(TabGrid)`
  grid-auto-rows: minmax(630px, auto);
  grid-template-columns: repeat(auto-fill, 450px);

  @media (max-width: 525px) {
    grid-template-columns: repeat(auto-fill, 400px);
  }
`