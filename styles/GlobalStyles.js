import styled from 'styled-components'
import { COLORS, MOBILE_WIDTH } from '../constants'

export const Divider = styled.span`
  font-size: 1.7rem;
  font-weight: 500;
  margin: 0px 10px;
  vertical-align: middle;
`

export const HR = styled.hr`
  border: 0.9px solid rgba(255,255,255,0.4);
  margin: 17px auto;
  width: 100%;
`

export const Link = styled.a`
  align-items: center;
  color: rgba(${COLORS.LINK_BLUE_RGB}, 0.7);
  cursor: pointer;
  line-height: 1.6rem;
  text-decoration: none;
  transition: 0.3s;

  svg {
    fill: rgba(${COLORS.LINK_BLUE_RGB}, 0.7);
    padding-left: 3px;
    transition: 0.3s;
  }

  :hover {
    color: rgba(${COLORS.LIGHT_LINK_BLUE_RGB}, 0.7);

    svg {
      fill: rgba(${COLORS.LIGHT_LINK_BLUE_RGB}, 0.7);
    }
  }
`

export const TabContainer = styled.div`
  margin: 60px auto;
  overflow: visible;
  width: 85%;

  @media (max-width: ${MOBILE_WIDTH}) {
    width: 100%;
  }
`

export const TabTitle = styled.div`
  color: rgb(${COLORS.LIGHT_GREY_RGB});
  font-size: 2.15rem;
  padding: 0.8%;
`

export const TabTitleDiv = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 85px 0 30px 0;
`