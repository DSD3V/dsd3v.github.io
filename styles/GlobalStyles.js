import styled from 'styled-components'
import { COLORS } from '../constants'

export const CardContainer = styled.div`
  align-items: center;
  border: 2px solid rgba(${COLORS.WHITE_RGB}, 0.3);
  color: rgb(${COLORS.GREY_RGB});
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 90%;
  padding-bottom: 8px;
  width: 100%;
`

export const CardDiv = styled.span`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const CardHeader = styled.span`
  color: ${COLORS.LIGHT_GREY};
  font-size: 1.1rem;
  font-weight: 600;
  overflow: hidden;
  padding: 20px;
`

export const CardImage = styled.img`
  height: 150px;
  padding: 2px;
  width: 100%;
`

export const CardLabel = styled.span`
  color: ${COLORS.LIGHT_GREY};
  font-size: 1.1rem;
  overflow: hidden;
  padding: 3% 2%;
  width: 80%;
`

export const CardText = styled.span`
  align-items: center;
  color: rgb(${COLORS.GREY_RGB});
  font-size: 1rem;
  line-height: 1.3rem;
  max-width: 80%;
  overflow: hidden;
  padding: 0 6% 2% 6%;
  text-align: center;
  vertical-align: middle;

  span {
    color: rgb(${COLORS.GREY_RGB});
  }
`

export const CardTitle = styled.span`
  color: ${COLORS.LIGHT_GREY};
  font-size: 1.38rem;
  overflow: hidden;
  padding: 5% 4.5% 2% 4.5%;
`

export const Divider = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0px 8px;
  vertical-align: middle;
`

export const HR = styled.hr`
  max-width: 85%;
  width: 380px;
  border: 0.5px solid rgba(255,255,255,0.3);
`

export const Link = styled.a`
  align-items: center;
  color: rgba(${COLORS.LINK_BLUE_RGB}, 0.7);
  cursor: pointer;
  line-height: 1.6rem;
  text-decoration: none;
  transition: 0.3s;

  svg {
    fill: rgb(${COLORS.LINK_BLUE_RGB}, 0.7);
    padding-left: 3px;
    transition: 0.3s;
  }

  :hover {
    color: rgb(${COLORS.LIGHT_LINK_BLUE_RGB}, 0.7);

    svg {
      fill: rgb(${COLORS.LIGHT_LINK_BLUE_RGB}, 0.7);
    }
  }
`

export const TabContainer = styled.div`
  margin: 60px auto;
  overflow: visible;
  width: 85%;
`

export const TabGrid = styled.div`
  display: grid;
  grid-gap: 3em;
  justify-content: center;
  margin: 1.5% auto 0 auto;
  max-width: 1000px;
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
  margin: 80px 0 30px 0;
`