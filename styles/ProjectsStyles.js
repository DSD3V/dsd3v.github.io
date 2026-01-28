import styled from 'styled-components'
import { COLORS } from '../constants'
import { Link } from './GlobalStyles'

export const GitHubLink = styled(Link)`
  border: 1px solid rgba(${COLORS.LINK_BLUE_RGB}, 0.5);
  padding: 25px;

  :hover {
    border: 1px solid rgba(${COLORS.LIGHT_LINK_BLUE_RGB}, 0.5);
  }
`

export const ProjectsDiv = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  justify-content: center;
  margin-top: 50px;
`