import workExperienceData from '../data/workExperience.json'
import { Divider, HR, TabContainer } from '../styles/GlobalStyles'
import { WorkExperienceDiv } from '../styles/WorkExperienceStyles'
import { TabHeader } from './TabHeader'

export const WorkExperience = ({ title }) => (
    <TabContainer>
        <TabHeader title={title} />
        <WorkExperienceDiv>
            {workExperienceData.map(({ dates, description }, index) => (
                <>
                    <div>
                        {description}
                        <Divider>|</Divider>
                        {dates}
                    </div>
                    {index !== workExperienceData.length - 1 && <HR />}
                </>
            ))}
        </WorkExperienceDiv>
    </TabContainer>
)