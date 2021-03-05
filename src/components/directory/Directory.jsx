import React, { useState } from 'react'
import MenuItem from '../menu-item/MenuItem'
import data from './directory-data.js'
import './directory.scss'

const Directory = () => {
    const [sections, setSections] = useState(data);

    return (
        <div className='directory'>
        {sections.map(({ title, imageUrl, id, size }) => (
            <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
        ))}
        </div>
    )
}

export default Directory;