import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { HomeNavbarLink, NavbarDiv, NavbarLink, NavbarLinksDiv, Toggle } from '../styles/NavbarStyles'
import { TabRouteToIndex, TABS, TabTitleToIndex } from '../tabs'

export const Navbar = ({ isPageNotFound }) => {
    const currentRoute = `/${useLocation().pathname.split('/')[1].toLowerCase()}`
    const [currentTabIndex, setCurrentTabIndex] = useState(
        TabRouteToIndex[currentRoute]
    )
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        setCurrentTabIndex(TabRouteToIndex[currentRoute])
    }, [currentRoute])

    const tabClicked = title => {
        setCurrentTabIndex(typeof title === 'string' ? TabTitleToIndex[title] : 0)
        setIsMenuOpen(false)
    }

    const toggleMenu = () => {
        setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen)
    }

    return (
        <NavbarDiv>
            <HomeNavbarLink
                $isCurrentTab={currentTabIndex === 0}
                key={TABS[0].title}
                onClick={tabClicked}
                to={TABS[0].route}
            >
                {TABS[0].title}
            </HomeNavbarLink>
            <Toggle onClick={toggleMenu}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span /><span /><span />
                </div>
                <div style={{
                    marginLeft: '3px',
                    transform: isMenuOpen ? 'translateY(-3px) rotate(180deg)' : 'translateY(2px)'
                }}>▾</div>
            </Toggle>
            <NavbarLinksDiv $isMenuOpen={isMenuOpen} $numTabs={TABS.length - 1}>
                {TABS.slice(1).map(({ route, title }, index) => (
                    <NavbarLink
                        $isCurrentTab={++index === currentTabIndex && !isPageNotFound}
                        key={title}
                        onClick={() => tabClicked(title)}
                        to={route}
                    >
                        {title}
                    </NavbarLink>
                ))}
            </NavbarLinksDiv>
        </NavbarDiv>
    )
}