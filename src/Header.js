import React from 'react';
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';
import './forumIcon.svg';

function Header() {
  return (
    <div className='header'>
        <IconButton>
            <PersonIcon fontSize='large' className='header__icon' />
        </IconButton>
        <img 
            className='header__logo' 
            src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Symbol.png" 
            alt=""
        ></img>
        
    </div>
  )
}

export default Header