import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <div className='header__1'>
            <Link to='/'>
                <img className="header__icon" src="https://th.bing.com/th/id/OIP.jD6hxEFgNuGQcrA6paDmDwHaHa?pid=Api&rs=1" />
            </Link>
            <h3 className='header__d'>Travelz</h3>
            </div>
            <div className='header__center'>
                <input type='text' />
                <SearchIcon />
            </div>
            <div className='header__right'>
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
        </div>
    )
}

export default Header;