import styled from 'styled-components'
import { MOBILE_WIDTH } from '../constants'
import { TabGrid } from './GlobalStyles'

export const ProjectsTabGrid = styled(TabGrid)`
  grid-auto-rows: minmax(650px, auto);
  grid-template-columns: repeat(auto-fill, 450px);

  @media (max-width: ${MOBILE_WIDTH}) {
    grid-template-columns: repeat(auto-fill, 350px);
  }
`