import { HomeNavigationDiv, StyledLink } from '../styles/HomeStyles'
import { TABS } from '../tabs'

export const HomeNavigation = () => (
    <HomeNavigationDiv>
        {TABS.slice(1).map(({ route, title }) => (
            <StyledLink key={title} to={route}>
                {title}
            </StyledLink>
        ))}
    </HomeNavigationDiv>
)