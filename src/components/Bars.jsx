import React from 'react'
import './bars.css'
export default function Bars({height}) {
  return (
    <div className='bars'>
        <div className="bar bar1" style={{height : `${height}px`}}></div>
        <div className="bar bar2" style={{height : `${height}px`}}></div>
    </div>
  )
}
