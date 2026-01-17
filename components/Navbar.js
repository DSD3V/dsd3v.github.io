import { useEffect, useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { COLORS } from '../constants'
import { HomeNavbarLink, NavbarDiv, NavbarLink, NavbarLinksDiv, Toggle } from '../styles/NavbarStyles'
import { TabRouteToIndex, TABS, TabTitleToIndex } from '../tabs'

export const Navbar = ({ isPageNotFound }) => {
    const StyledAiOutlineMenu = styled(AiOutlineMenu)`
        color: rgb(${COLORS.GREY_RGB});

        :hover {
            color: ${COLORS.LIGHT_GREY};
        }
    `
    const StyledAiOutlineClose = styled(AiOutlineClose)`
        color: rgb(${COLORS.GREY_RGB});

        :hover {
            color: ${COLORS.LIGHT_GREY};
        }
    `
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
                {!isMenuOpen ? <StyledAiOutlineMenu size={32} /> : <StyledAiOutlineClose size={35} />}
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