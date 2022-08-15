import React, { useState, useEffect } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './Dashboard.css'
import Cards from './Cards';
import Profile from './Profile';
import Bars from './Bars';
export default function DashBoard() {
  return (
    <div className='dashboard-container'>
        <div className="user">
            <h2>Dashboard</h2>
            <div className="user-profile">
            <img src="/user.png" alt="" />
            <div className="mobile-hidden web-hidden">
            <KeyboardArrowDownIcon/>
            </div>
            </div>
        </div>
        <div className="content">
            <div className="allcards">

            <div className="stats">
                <Cards name = "Works" color = "secondary" value = {50} number = {75} discription = "Works Today"/>
                <Cards name = "analytics" color = "success" value = {25} number = {310} discription = "Analytics Today"/>
                <Cards name = "Statistics" color = "inherit" value = {59} number = {75} discription = "Statistics Today"/>
                <Cards name = "Task" color = "primary" value = {75} number = {15} discription = "Works Today"/>
            </div>
            <div className="activities">
                <div className="activity-top">
                    <div className="title">
                        <h3>Activity</h3>
                    </div>
                    <div className="colors">
                        <div className="recieved">
                        <div className="color-patch"></div>
                        <div className="color-name"><p>Recieved</p></div>
                        </div>
                        <div className="completed">
                        <div className="color-patch"></div>
                        <div className="color-name"><p>Recieved</p></div>
                        </div>
                    </div>
                    <div className="activity-options">
                        <div className="time">
                        <p>6 Months</p>
                        <KeyboardArrowDownIcon/>
                        </div>
                        <MoreVertIcon/>
                    </div>
                </div>
                <div className="activity-graph">
                <Bars height={100}/>
                <Bars height={90}/>
                <Bars height={80}/>
                <Bars height={40}/>
                <Bars height={110}/>
                <Bars height={140}/>               
                </div>
            </div>
            <div className="team-activities">
                <div className="top-team">
                    <h3>Team Activities</h3>
                    <div className="team-options">
                        <div className="time">
                        <p>6 Months</p>
                        <KeyboardArrowDownIcon/>
                        </div>
                        <MoreVertIcon/>
                    </div>
                </div>
                <div className="bottom-team">
                    <div className="graph">
                        <img className = "wave" src="/wave.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="team-members">
            <div className="heading"><h3>Team Member Performance</h3></div>
                <Profile name = "Anirudh Arun" role = "Project Manager" rating={9.8} image = "/user1.png"/>
                <Profile name = "Anirudh Arun" role = "UX Designer" rating={9.2} image = "/user2.png"/>
                <Profile name = "Anirudh Arun" role = "UI Designer" rating={9.1} image = "/user3.png"/>
                <Profile name = "Anirudh Arun" role = "Motion Designer" rating={8.5} image = "/user4.png"/>
            </div>
            </div>
        </div>
    </div>
  )
}
