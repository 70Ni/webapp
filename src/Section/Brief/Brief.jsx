import React from 'react'
import '../Brief/Brief.css'
import Img from '../../Images/Img/Image.png'

function Brief() {
  return (
    <div className='outerwrapper'>
        <div className="left">
            <div className="Header">nly five centuries, but also the leap into </div>
            <div className="subtxt">nly five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
            <div className="para">nly five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
        </div>
        <div className="right">
            <img src= {Img} alt="img" className='Imag-Brief' />   
        </div>
    </div>
  )
}

export default Brief