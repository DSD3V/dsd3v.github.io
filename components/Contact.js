import { BiLinkExternal } from 'react-icons/bi'
import styled from 'styled-components'
import contactData from '../data/contact.json'
import { HR, Link, TabContainer } from '../styles/GlobalStyles'
import { ContactDiv } from '../styles/ContactStyles'
import { TabHeader } from './TabHeader'

export const Contact = ({ title }) => {
    const StyledBiLinkExternal = styled(BiLinkExternal)`
        margin-bottom: -3px;
        margin-left: 2px;
    `

    return (
        <TabContainer>
            <TabHeader title={title} />
            <ContactDiv>
                <div>
                    Email: {contactData.email}
                </div>
                <HR />
                <Link href={contactData.linkedInUrl} rel='noopener noreferrer' target='_blank'>
                    LinkedIn<StyledBiLinkExternal />
                </Link>
            </ContactDiv>
        </TabContainer>
    )
}