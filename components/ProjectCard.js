import { BiLinkExternal } from 'react-icons/bi'
import { CardContainer, CardDiv, CardImage, CardLabel, CardText, CardTitle, Link } from '../styles/GlobalStyles'

export const ProjectCard = ({
    project: {
        description,
        features,
        githubUrl,
        image,
        name,
        technologiesUsed
    }
}) => (
    <CardContainer>
        <CardImage src={require(`/media/${image}`).default} />
        <CardTitle>{name}</CardTitle>
        <CardText>{description}</CardText>
        <CardDiv>
            <CardLabel>Features:</CardLabel>
            <CardText>{features}</CardText>
        </CardDiv>
        <CardDiv>
            <CardLabel>Technologies Used:</CardLabel>
            <CardText>{technologiesUsed}</CardText>
        </CardDiv>
        <CardDiv>
            <Link href={githubUrl} rel='noopener noreferrer' target='_blank'>
                View on GitHub <BiLinkExternal />
            </Link>
        </CardDiv>
    </CardContainer>
)