import React from 'react'
import MenuBar from './MenuBar'

const Header = () => {
    return (
        <div className="header">
            <nav>
                <div className="logo">Portfolio</div>
                <div className="menu-icon"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></div>
                <MenuBar />
            </nav>
        </div>
        
    )
}

export default Header
