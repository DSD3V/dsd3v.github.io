import { CardContainer, CardDiv, CardLabel, CardText, CardTitle, HR } from '../styles/GlobalStyles'

export const EducationCard = ({
    education: {
        collegeName,
        dates,
        degree
    }
}) => (
    <CardContainer>
        <CardTitle>{degree}</CardTitle>
        <HR />
        <CardDiv>
            <CardLabel>{collegeName}</CardLabel>
        </CardDiv>
        <HR />
        <CardDiv>
            <CardText>{dates}</CardText>
        </CardDiv>
    </CardContainer>
)