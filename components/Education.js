import educationData from '../data/education.json'
import { Divider, HR, TabContainer } from '../styles/GlobalStyles'
import { EducationDiv } from '../styles/EducationStyles'
import { TabHeader } from './TabHeader'

export const Education = ({ title }) => (
    <TabContainer>
        <TabHeader title={title} />
        <EducationDiv>
            {educationData.map(({ dates, description }, index) => (
                <>
                    <div>
                        {description}
                        <Divider>|</Divider>
                        {dates}
                    </div>
                    {index !== educationData.length - 1 && <HR />}
                </>
            ))}
        </EducationDiv>
    </TabContainer>
)