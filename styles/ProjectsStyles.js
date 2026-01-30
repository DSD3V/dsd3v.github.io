import styled from 'styled-components'
import { COLORS, MOBILE_WIDTH } from '../constants'
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
  font-size: 1.15rem;
  justify-content: center;
  margin: 50px auto 0 auto;
  width: 80%;

  @media (max-width: ${MOBILE_WIDTH}) {
    width: 90%;
  }
`