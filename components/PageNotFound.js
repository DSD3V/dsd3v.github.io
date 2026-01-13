import { useEffect } from 'react'
import { Container, InvalidURLDiv, PageNotFoundDiv } from '../styles/PageNotFoundStyles'

export const PageNotFound = ({ setIsPageNotFound }) => {
    useEffect(() => {
        setIsPageNotFound(true)
        return () => setIsPageNotFound(false)
    }, [setIsPageNotFound])

    return (
        <Container>
            <PageNotFoundDiv>Page not found.</PageNotFoundDiv>
            <InvalidURLDiv>Invalid URL entered.</InvalidURLDiv>
        </Container>
    )
}