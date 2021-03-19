import React from 'react'
import { useHistory } from 'react-router-dom'
import './menu-item.scss'

const MenuItem = ({ title, imageUrl, size }) => {
    let history = useHistory();
    return(
        <div className={`${size} menu-item`}>
        <div className='background-image' style={{ backgroundImage: `url(${imageUrl})`}}></div>
        <div className='content' onClick={() => history.push(`/shop/${title}`)}>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
    )
}

export default MenuItem;