import React from 'react';
import './SwipeButtons.css';
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from '@material-ui/icons/Favorite';

function SwipeButtons() {
  return (
    <div className="swipeButtons">
        <IconButton className="swipeButtons__repeat">
            <ReplayIcon fontSize='large' />
        </IconButton>
        <IconButton  className="swipeButtons__left">
            <CloseIcon fontSize='large' />
        </IconButton>
        <IconButton  className="swipeButtons__star">
            <StarRateIcon fontSize='large' />
        </IconButton>
        <IconButton  className="swipeButtons__right">
            <FavoriteIcon fontSize='large' />
        </IconButton>
        <IconButton className="swipeButtons_lightning">
            <FlashOnIcon fontSize='large' />
         </IconButton>
    </div>
  )
}

export default SwipeButtons