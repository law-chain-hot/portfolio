import React from 'react'

import './Avatar.css'

import {img1} from './../assets/imageRender'

function Avatar() {
    return (
            <div className='avatar'>
                <img src={img1} alt='' className='avatar-img'/>
            </div>
    )
}

export default Avatar;

