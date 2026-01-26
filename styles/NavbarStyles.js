import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { COLORS, NAVBAR_TOGGLE_WIDTH } from '../constants'

export const HomeNavbarLink = styled(Link)`
  border-bottom: ${({ $isCurrentTab }) =>
    `1px solid rgba(${COLORS.GREY_RGB}, ${$isCurrentTab ? 1 : 0.7})`};
  color: ${({ $isCurrentTab }) =>
    `rgb(${$isCurrentTab ? COLORS.LIGHT_GREY_RGB : COLORS.GREY_RGB})`};
  font-size: 1.4rem;
  left: 0;
  margin-left: 1rem;
  position: fixed;
  text-decoration: none;
  top: 0;
  transform: translateY(70%);
  transition: 0.2s;

  :hover {
    border-bottom: 1px solid rgba(${COLORS.GREY_RGB}, 1});
    color: rgb(${COLORS.LIGHT_GREY_RGB});
  }
`

export const NavbarDiv = styled.nav`
  align-items: center;
  border-bottom: 1px solid rgba(${COLORS.GREY_RGB}, 0.4);
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
    $isMenuOpen ? `${60 * $numTabs}px` : '0px'};
    padding-bottom: ${({ $isMenuOpen }) =>
    $isMenuOpen ? '12px' : '0px'};
    transition: max-height 0.2s;
    width: 100%;
  }
`

export const NavbarLink = styled(Link)`
  border: ${({ $isCurrentTab }) =>
    `1px solid rgba(${COLORS.GREY_RGB}, ${$isCurrentTab ? 1 : 0.7})`};
  color: ${({ $isCurrentTab }) =>
    `1px solid rgb(${$isCurrentTab ? COLORS.LIGHT_GREY_RGB : COLORS.GREY_RGB})`};
  font-size: 1rem;
  margin: 1rem 1.5rem;
  padding: 10px 2px;
  text-decoration: none;
  transition: 0.3s;
  width: 160px;

  :hover {
    border: ${({ }) =>
    `1px solid rgba(${COLORS.GREY_RGB}, 1)`};
  }

  @media (max-width: ${NAVBAR_TOGGLE_WIDTH}) {
    margin: 0.5rem 1.5rem;
    min-height: 17px;
  }
`

export const Toggle = styled.div`
  cursor: pointer;
  display: none;
  margin: 1rem 1rem 1rem 85%;

  span {
    background-color: rgba(${COLORS.GREY_RGB}, 0.8);
    height: 3px;
    margin: 3px;
    width: 26px;
    transition: background-color 0.3s;
  }

  div {
    color: rgba(${COLORS.GREY_RGB}, 0.8);
    transition: color 0.3s;
  }

  :hover {
    span {
      background-color: rgba(${COLORS.GREY_RGB}, 1);
    }

    div {
      color: rgba(${COLORS.GREY_RGB}, 1);
    }
  }

  @media (max-width: ${NAVBAR_TOGGLE_WIDTH}) {
    display: flex;
  }
`