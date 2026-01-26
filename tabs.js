import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Home } from './components/Home'
import { Projects } from './components/Projects'
import { WorkExperience } from './components/WorkExperience'

export const TABS = [
    {
        Component: Home,
        route: '/',
        title: 'DSD3V'
    },
    {
        Component: Projects,
        route: '/projects',
        title: 'Projects'
    },
    {
        Component: WorkExperience,
        route: '/work-experience',
        title: 'Work Experience'
    },
    {
        Component: Education,
        route: '/education',
        title: 'Education'
    },
    {
        Component: Contact,
        route: '/contact',
        title: 'Contact'
    },
]

export const TabRouteToIndex = TABS.reduce(
    (tabRouteToIndex, tab, index) => ({
        ...tabRouteToIndex,
        [tab.route]: index
    }),
    {}
)

export const TabTitleToIndex = TABS.reduce(
    (tabTitleToIndex, tab, index) => ({
        ...tabTitleToIndex,
        [tab.title]: index
    }),
    {}
)