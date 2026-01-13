import styled from 'styled-components'
import { TabGrid } from './GlobalStyles'

export const EducationTabGrid = styled(TabGrid)`
  grid-auto-rows: minmax(270px, auto);
  grid-template-columns: repeat(center, 300px);

  @media (max-width: 525px) {
    grid-template-columns: repeat(center, 250px);
  }
`