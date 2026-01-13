import contactData from '../data/contact.json'
import { TabContainer } from '../styles/GlobalStyles'
import { ContactDiv, TextDiv } from '../styles/ContactStyles'
import { TabHeader } from './TabHeader'

export const Contact = ({ title }) => (
    <TabContainer>
        <TabHeader title={title} />
        <ContactDiv>
            <TextDiv>Email: {contactData.email}</TextDiv>
        </ContactDiv>
    </TabContainer>
)