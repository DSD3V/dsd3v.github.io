import educationData from '../data/education.json'
import { Divider, HR, TabContainer } from '../styles/GlobalStyles'
import { EducationDiv, EducationUl } from '../styles/EducationStyles'
import { TabHeader } from './TabHeader'

export const Education = ({ title }) => (
    <TabContainer>
        <TabHeader title={title} />
        <EducationDiv>
            <EducationUl>
                {educationData.map(({ dates, description }, index) => (
                    <>
                        <li>
                            {description}
                            <Divider>|</Divider>
                            {dates}
                        </li>
                        {index !== educationData.length - 1 && <HR />}
                    </>
                ))}
            </EducationUl>
        </EducationDiv>
    </TabContainer>
)