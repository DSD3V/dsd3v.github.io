import styled from 'styled-components'
import { TabGrid } from './GlobalStyles'

export const WorkExperienceTabGrid = styled(TabGrid)`
  grid-auto-rows: minmax(210px, auto);
  grid-template-columns: repeat(auto-fill, 450px);

  @media (max-width: 525px) {
    grid-template-columns: repeat(auto-fill, 350px);
  }
`