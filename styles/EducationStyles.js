import styled from 'styled-components'
import { MOBILE_WIDTH } from '../constants'
import { TabGrid } from './GlobalStyles'

export const EducationTabGrid = styled(TabGrid)`
  grid-auto-rows: minmax(210px, auto);
  grid-template-columns: repeat(center, 450px);

  @media (max-width: ${MOBILE_WIDTH}) {
    grid-template-columns: repeat(center, 350px);
  }
`