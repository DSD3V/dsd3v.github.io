import { BiLinkExternal } from 'react-icons/bi'
import styled from 'styled-components'
import contactData from '../data/contact.json'
import { Divider, TabContainer } from '../styles/GlobalStyles'
import { ContactDiv, LinkedInLink, TextDiv } from '../styles/ContactStyles'
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
                <TextDiv>
                    Email: {contactData.email}
                    <Divider>|</Divider>
                    <LinkedInLink href={contactData.linkedInUrl} rel='noopener noreferrer' target='_blank'>
                        LinkedIn<StyledBiLinkExternal />
                    </LinkedInLink>
                </TextDiv>
            </ContactDiv>
        </TabContainer>
    )
}