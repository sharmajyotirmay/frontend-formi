import React from 'react'
import './profile.css'
export default function Profile({name, role, image, rating}) {
  return (
    <div className='profile'>
        <div className="image">
          <img className='profile-image' src={image} alt="" />
        </div>
        <div className="about">
          <div className="name-role">
          <h3>{name}</h3>
          <p>{role}</p>
          </div>
          <div className="rating">{rating}</div>
        </div>
    </div>
  )
}
