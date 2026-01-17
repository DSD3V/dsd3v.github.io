import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { COLORS, NAVBAR_TOGGLE_WIDTH } from '../constants'

export const HomeNavbarLink = styled(Link)`
  border-bottom: ${({ $isCurrentTab }) =>
    $isCurrentTab
      ? `1px solid rgba(${COLORS.LIGHT_GREY_RGB}, 0.6)`
      : 'black'};
  font-size: 1.4rem;
  left: 0;
  margin-left: 1rem;
  position: fixed;
  text-decoration: none;
  top: 0;
  transform: translateY(70%);
`

export const NavbarDiv = styled.nav`
  align-items: center;
  border-bottom: 1px solid rgba(${COLORS.LIGHT_GREY_RGB}, 0.3);
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: fixed;
  width: 100%;
  z-index: 2;
`

export const NavbarLinksDiv = styled.div`
  align-items: center;
  display: flex;
  overflow: hidden;

  @media (max-width: ${NAVBAR_TOGGLE_WIDTH}) {
    flex-direction: column;
    max-height: ${({ $isMenuOpen, $numTabs }) =>
    $isMenuOpen ? `${50 * $numTabs}px` : '0px'};
    transition: max-height 0.3s;
    width: 100%;
  }
`

export const NavbarLink = styled(Link)`
  border: ${({ $isCurrentTab }) =>
    $isCurrentTab
      ? `1px solid rgba(${COLORS.LIGHT_GREY_RGB}, 0.7)`
      : `1px solid rgba(${COLORS.GREY_RGB}, 0.5)`};
  color: ${({ $isCurrentTab }) =>
    $isCurrentTab ? `rgb(${COLORS.LIGHT_GREY_RGB})` : `rgb(${COLORS.GREY_RGB})`};
  font-size: 1rem;
  margin: 1rem 1.5rem;
  padding: 7px 5px;
  text-decoration: none;
  transition: 0.3s;
  width: 160px;

  :hover {
    border: ${({ $isCurrentTab }) =>
    $isCurrentTab
      ? `1px solid rgba(${COLORS.LIGHT_GREY_RGB}, 0.7)`
      : `1px solid rgba(${COLORS.GREY_RGB}, 0.6)`};
  }

  @media (max-width: 850px) {
    margin: 1rem 1.5rem;
  }

  @media (max-width: ${NAVBAR_TOGGLE_WIDTH}) {
    margin: 0 0 1.1rem 0;
  }
`

export const Toggle = styled.div`
  cursor: pointer;
  display: none;
  margin: 1rem 1rem 1rem 88%;

  :hover {
    background-color: ${COLORS.LIGHT_GREY};
  }

  @media (max-width: ${NAVBAR_TOGGLE_WIDTH}) {
    display: flex;
    flex-direction: column;
  }
`