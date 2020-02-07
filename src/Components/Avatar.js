import React from 'react'

import './Avatar.css'

import {img_avatar_cartoon as img_avatar} from './../assets/imageRender'

function Avatar() {
    return (
            <div className='avatar'>
                <img src={img_avatar} alt='' className='avatar-img'/>
            </div>
    )
}

export default Avatar;

