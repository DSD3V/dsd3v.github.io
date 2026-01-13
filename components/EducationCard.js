import { CardContainer, CardDiv, CardLabel, CardText, CardTitle, HR } from '../styles/GlobalStyles'

export const EducationCard = ({
    education: {
        collegeName,
        dates,
        degree,
        gpa
    }
}) => (
    <CardContainer>
        <CardTitle>{collegeName}</CardTitle>
        <HR />
        <CardDiv>
            <CardLabel>{degree}</CardLabel>
        </CardDiv>
        <HR />
        <CardDiv>
            <CardText>{dates}</CardText>
        </CardDiv>
        <HR />
        <CardDiv>
            <CardText>GPA: {gpa}</CardText>
        </CardDiv>
    </CardContainer>
)