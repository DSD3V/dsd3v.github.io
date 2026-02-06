import styled from 'styled-components'
import { MOBILE_WIDTH } from '../constants'

export const EducationDiv = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 1.1rem;
  justify-content: center;
  margin: 50px auto 0 auto;
  width: 80%;

  @media (max-width: ${MOBILE_WIDTH}) {
    width: 90%;
  }
`