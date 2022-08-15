import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './cards.css'
function Cards({name, value, number, discription, color}) {
  return (
        <div className="cards">
                <div className="topbar">
                    <h3>{name}</h3>
                    <MoreVertIcon/>
                </div>
                <div className="loader">
                <CircularProgress color={color} variant="determinate" value={value} />
                <div className="text">
                    <h3>{number}</h3>
                    <p>{discription}</p>
                </div>
                </div>
                </div>
  )
}

export default Cards