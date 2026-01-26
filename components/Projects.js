import { BiLinkExternal } from 'react-icons/bi'
import projectsData from '../data/projects.json'
import { TabContainer } from '../styles/GlobalStyles'
import { ProjectsDiv, GitHubLink } from '../styles/ProjectsStyles'
import { TabHeader } from './TabHeader'

export const Projects = ({ title }) => (
    <TabContainer>
        <TabHeader title={title} />
        <ProjectsDiv>
            <GitHubLink href={projectsData.githubUrl} rel='noopener noreferrer' target='_blank'>
                View on GitHub <BiLinkExternal />
            </GitHubLink>
        </ProjectsDiv>
    </TabContainer>
)