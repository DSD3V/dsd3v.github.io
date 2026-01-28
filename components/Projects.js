import { BiLinkExternal } from 'react-icons/bi'
import styled from 'styled-components'
import projectsData from '../data/projects.json'
import { TabContainer } from '../styles/GlobalStyles'
import { ProjectsDiv, GitHubLink } from '../styles/ProjectsStyles'
import { TabHeader } from './TabHeader'

export const Projects = ({ title }) => {
    const StyledBiLinkExternal = styled(BiLinkExternal)`
        margin-bottom: -2px;
    `

    return (
        <TabContainer>
            <TabHeader title={title} />
            <ProjectsDiv>
                <GitHubLink href={projectsData.githubUrl} rel='noopener noreferrer' target='_blank'>
                    View on GitHub <StyledBiLinkExternal />
                </GitHubLink>
            </ProjectsDiv>
        </TabContainer>
    )
}