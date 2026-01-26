import workExperienceData from '../data/workExperience.json'
import { Divider, HR, TabContainer } from '../styles/GlobalStyles'
import { WorkExperienceDiv, WorkExperienceUl } from '../styles/WorkExperienceStyles'
import { TabHeader } from './TabHeader'

export const WorkExperience = ({ title }) => (
    <TabContainer>
        <TabHeader title={title} />
        <WorkExperienceDiv>
            <WorkExperienceUl>
                {workExperienceData.map(({ dates, description }, index) => (
                    <>
                        <li>
                            {description}
                            <Divider>|</Divider>
                            {dates}
                        </li>
                        {index !== workExperienceData.length - 1 && <HR />}
                    </>
                ))}
            </WorkExperienceUl>
        </WorkExperienceDiv>
    </TabContainer>
)