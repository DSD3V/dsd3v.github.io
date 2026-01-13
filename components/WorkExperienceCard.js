import { CardContainer, CardDiv, CardLabel, CardText, CardTitle, HR } from '../styles/GlobalStyles'

export const WorkExperienceCard = ({
    workExperience: {
        companyName,
        dates,
        role
    }
}) => (
    <CardContainer>
        <CardTitle>{companyName}</CardTitle>
        <HR />
        <CardDiv>
            <CardLabel>{role}</CardLabel>
        </CardDiv>
        <HR />
        <CardDiv>
            <CardText>{dates}</CardText>
        </CardDiv>
    </CardContainer>
)