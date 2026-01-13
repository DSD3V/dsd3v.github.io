import workExperienceData from '../data/workExperience.json'
import { WorkExperienceCard } from './WorkExperienceCard'
import { TabContainer } from '../styles/GlobalStyles'
import { WorkExperienceTabGrid } from '../styles/WorkExperienceStyles'
import { TabHeader } from './TabHeader'

export const WorkExperience = ({ title }) => (
    <TabContainer>
        <TabHeader title={title} />
        <WorkExperienceTabGrid>
            {workExperienceData.map((workExperience) => (
                <WorkExperienceCard key={workExperience.companyName} workExperience={workExperience} />
            ))}
        </WorkExperienceTabGrid>
    </TabContainer>
)