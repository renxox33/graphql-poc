import React from 'react'
import { Link } from 'react-router-dom'

import './header.css'

class Header extends React.Component{

    render(){
        return(
            <div className='header'>
                <div className='logo'> <h1>Hackernews</h1>  </div>
                <div className='header-links'>
                    <div className="header-link">
                        <Link to='/create'>Create</Link>
                    </div>
                    <div className="header-link">Profile</div>
                    <div className="header-link">Sign in</div>
                </div>
            </div>
        )
    }
}

export default Header