import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { COLORS } from '../constants'

export const H1 = styled.h1`
  color: ${COLORS.WHITE};
  font-size: 4rem;
  font-weight: 500;
`

export const H2 = styled.h2`
  color: rgb(200, 200, 200);
  font-size: 1.5rem;
  font-weight: 300;
  margin-top: 60px;
`

export const HomeDiv = styled.div`
  margin: 17vh auto 2vh auto;
  max-width: 80%;
`

export const HomeNavigationDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 8vh auto 0 auto;
  max-width: 1000px;
  width: 95%;
`

export const StyledLink = styled(Link)`
  align-items: center;
  border: 1px solid rgba(${COLORS.GREY_RGB}, 0.7);
  color: ${COLORS.GREY};
  display: flex;
  flex-direction: column;
  font-size: 1.3rem;
  margin: 20px;
  padding: 20px 0px;
  text-decoration: none;
  transition: 0.3s;
  width: 180px;

  :hover {
    color: ${COLORS.LIGHT_GREY};
    border: 1px solid rgba(${COLORS.GREY_RGB}, 0.8);
  }
`