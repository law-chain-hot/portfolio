import React from 'react'

import './AvatarInfo.css'

function Avatar() {
    return (
        
        <div className='avatar-info'>
            <h2 className='name-chinese'> 罗千皓 </h2>
            <h2 className='name'> <span>Q</span>ianhao <span>L</span>uo </h2> 
            <p> Master student </p>
            <p> <span><strong className="white">@</strong> University of Illinois at Urbana-Champaign</span></p>
            <p> <strong className="white">@</strong> Agricultural and Biological Engineering</p>
            <p> <strong className="white">@</strong> Expectation Graduation: Dec 2020</p>
            <br/>
            <p> ww6652890 <strong className="white">[at]</strong> gmail <strong className="white">[dot]</strong> com</p>
        </div>
    )
}

export default Avatar;
