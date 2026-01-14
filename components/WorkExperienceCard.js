import { CardContainer, CardDiv, CardLabel, CardText, CardTitle, HR } from '../styles/GlobalStyles'

export const WorkExperienceCard = ({
    workExperience: {
        companyName,
        dates,
        role
    }
}) => (
    <CardContainer>
        <CardTitle>{role}</CardTitle>
        <HR />
        <CardDiv>
            <CardLabel>{companyName}</CardLabel>
        </CardDiv>
        <HR />
        <CardDiv>
            <CardText>{dates}</CardText>
        </CardDiv>
    </CardContainer>
)