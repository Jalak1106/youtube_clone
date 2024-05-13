import React from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/200px-Logo_of_YouTube_%282015-2017%29.svg.png"
          alt="youtube logo" />
      </div>
      <div className="header__input">
        <input placeholder="Search" type="text" />
        <SearchIcon className='header__inputButton'/>
      </div>

      <div className='header__icons'>
        <VideoCallIcon className="header__icon"/>
        <AppsIcon className="header__icon"/>
        <NotificationsIcon className="header__icon"/>
        <Avatar 
          alt="Jalak raigandhi"
          src="Avatar"
        />
      </div>
    </div>
  )
}

export default Header