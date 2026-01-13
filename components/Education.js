import educationData from '../data/Education.json'
import { EducationCard } from './EducationCard'
import { TabContainer } from '../styles/GlobalStyles'
import { EducationTabGrid } from '../styles/EducationStyles'
import { TabHeader } from './TabHeader'

export const Education = ({ title }) => (
    <TabContainer>
        <TabHeader title={title} />
        <EducationTabGrid>
            {educationData.map((education) => (
                <EducationCard key={education.collegeName} education={education} />
            ))}
        </EducationTabGrid>
    </TabContainer>
)