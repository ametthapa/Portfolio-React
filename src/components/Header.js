import React from 'react'
import MenuBar from './MenuBar'

const Header = () => {
    return (
        <div className="header">
            <nav>
                <div className="logo">Portfolio</div>
                <MenuBar />
            </nav>
        </div>
        
    )
}

export default Header
