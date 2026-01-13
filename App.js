import { useState } from 'react'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { PageNotFound } from './components/PageNotFound'
import { TABS } from './tabs'

export const App = () => {
    const [isPageNotFound, setIsPageNotFound] = useState(false)
    return (
        <Router>
            <Navbar isPageNotFound={isPageNotFound} />
            <Routes>
                {TABS.map(({ Component, route, title }) => (
                    <Route element={<Component title={title} />} key={title} path={route} />
                ))}
                <Route element={<PageNotFound setIsPageNotFound={setIsPageNotFound} />} path='*' />
            </Routes>
        </Router>
    )
}